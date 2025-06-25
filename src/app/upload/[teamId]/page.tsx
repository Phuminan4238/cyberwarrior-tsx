"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import backgroundImg from "../../assets/background.png";
import cyberlogo from "../../assets/cyber-logo.png";

const STRAPI_TOKEN = "0efc938cdd6d40a28828c86343e30f65becde773ee1131e78293fc314d4cb229bd1b8dc1e093c7f6fb51545c83b0f1e8527ba0f8997ef5de7ce106c2f73da1b969ff9e6e245ebe07887aab2c83168a03f82eeed62cebf565bfe5d929678aa4505990d3386a4c19242268b41144181ee5a7e594f5fb2129406e82225e0a4cb35f"; // keep your secure token here

export default function UploadPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const teamId = params.teamId;
  const token = searchParams.get("token");

  const [teamName, setTeamName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch(
          `https://cyberwarrior2025.io/api/forms?filters[id][$eq]=${teamId}`,
          {
            headers: {
              Authorization: `Bearer ${STRAPI_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        if (res.ok && data.data.length > 0) {
          setTeamName(data.data[0].teamName);
        } else {
          setTeamName("ไม่พบชื่อทีม");
        }
      } catch {
        setTeamName("ไม่พบชื่อทีม");
      }
    }

    if (teamId) {
      fetchTeam();
    }
  }, [teamId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage("กรุณาเลือกไฟล์ก่อนส่ง");
      return;
    }

    if (!token) {
      setMessage("ไม่พบ token กรุณากลับไปกรอกใหม่อีกครั้ง");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("files", file);

      const uploadRes = await fetch("https://cyberwarrior2025.io/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      if (!uploadRes.ok || !uploadData[0]?.id) {
        throw new Error(uploadData?.error?.message || "Upload failed");
      }

      const uploadedFileId = uploadData[0].id;

      const proposalRes = await fetch(
        "https://cyberwarrior2025.io/api/proposals",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${STRAPI_TOKEN}`,
          },
          body: JSON.stringify({
            data: {
              teamName,
              token,
              uploadfile: uploadedFileId,
            },
          }),
        }
      );

      const proposalData = await proposalRes.json();
      if (!proposalRes.ok) {
        throw new Error(proposalData?.error?.message || "Proposal creation failed");
      }

      setMessage("อัปโหลดสำเร็จแล้ว! ระบบจะส่งอีเมลยืนยันให้ทีม");
      setFile(null);
    } catch (error: any) {
      setMessage("เกิดข้อผิดพลาด: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <div className="bg-white rounded-3xl p-10 shadow-lg w-full max-w-lg text-center">
        <div
          className="mx-auto "
          style={{
            backgroundImage: `url(${cyberlogo.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "180px",
            height: "180px",
          }}
        />
        <h1 className="text-xl font-bold mb-4 text-gray-800">
          อัปโหลดไฟล์สำหรับทีม <br />
          <span className="text-orange-600">{teamName ?? "...กำลังโหลด"}</span>
        </h1>
        <div className="h-20"></div>
        <form onSubmit={handleSubmit} className="space-y-4 text-left ">
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-orange-50 file:text-orange-700
              hover:file:bg-orange-100"
          />
          <div className="h-10"></div>
          <button
            type="submit"
            disabled={uploading}
            className="bg-orange-500 w-full text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600 disabled:opacity-50"
          >
            {uploading ? "กำลังอัปโหลด..." : "ส่งไฟล์"}
          </button>
        </form>
      
        {message && (
          <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
}
