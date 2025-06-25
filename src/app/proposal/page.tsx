"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import backgroundImg from "../assets/background.png";
import cyberlogo from "../assets/cyber-logo.png";

export default function TokenPage() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.get(
        `https://cyberwarrior2025.io/api/forms?filters[teamToken][$eq]=${token}`
      );
      if (res.data.data.length === 0) {
        setError("ไม่พบทีมด้วย token นี้ กรุณาลองใหม่อีกครั้ง");
      } else {
        const teamId = res.data.data[0].id;
        router.push(`/proposal/${teamId}?token=${token}`);
      }
    } catch {
      setError("เกิดข้อผิดพลาดในการเชื่อมต่อ");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <div className="bg-white rounded-3xl p-10 shadow-lg w-full max-w-lg">
        <div
          className="mx-auto mb-6"
          style={{
            backgroundImage: `url(${cyberlogo.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "180px",
            height: "180px",
          }}
        />
        <h1 className="text-xl font-bold text-center mb-4 text-gray-800">
          กรุณากรอก Token ของทีม 👁️👄👁️
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="กรอก token ที่ได้รับ"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-orange-500 w-full text-white py-3 px-4 rounded-lg font-bold hover:bg-orange-600"
          >
            ยืนยัน
          </button>
          <div className="h-10"></div>
        </form>
      </div>
    </div>
  );
}
