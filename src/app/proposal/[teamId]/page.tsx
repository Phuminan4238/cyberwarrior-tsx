"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import backgroundImg from "../../assets/background.png";
import cpeLogo from "../../assets/cpe-logo.png";
import kmuttLogo from "../../assets/kmutt-logo.png";
import kmuttLogo2 from "../../assets/kmutt-logo-02.png";
import policeLogo from "../../assets/police-logo.png";
import policeLogo2 from "../../assets/police-logo-02.png";
import cyberlogo from "../../assets/cyber-logo.png";

const STRAPI_TOKEN =
  "0efc938cdd6d40a28828c86343e30f65becde773ee1131e78293fc314d4cb229bd1b8dc1e093c7f6fb51545c83b0f1e8527ba0f8997ef5de7ce106c2f73da1b969ff9e6e245ebe07887aab2c83168a03f82eeed62cebf565bfe5d929678aa4505990d3386a4c19242268b41144181ee5a7e594f5fb2129406e82225e0a4cb35f";

export default function UploadPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const teamId = params.teamId;
  const token = searchParams.get("token");

  const [teamName, setTeamName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [confirmedData, setConfirmedData] = useState(false);

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
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    const MAX_SIZE_MB = 10;
    const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

    if (selectedFile.size > MAX_SIZE_BYTES) {
      setMessage(`ขนาดไฟล์เกิน ${MAX_SIZE_MB}MB กรุณาเลือกไฟล์ใหม่ 👁️👄👁️`);
      setFile(null);
      e.target.value = ""; // Clear file input
      return;
    }

    setMessage(""); // Clear any previous error
    setFile(selectedFile);
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage("กรุณาเลือกไฟล์ก่อนส่ง");
      return;
    }
    if (!token) {
      setMessage("ไม่พบ token กรุณากลับไปกรอกใหม่อีกครั้ง 👁️👄👁️");
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
        throw new Error(
          proposalData?.error?.message || "Proposal creation failed"
        );
      }

      setMessage("อัปโหลดสำเร็จแล้ว! ระบบจะส่งอีเมลยืนยันให้ทีม");
      setFile(null);
    } catch (error: any) {
      setMessage("เกิดข้อผิดพลาด: " + error.message);
    } finally {
      setSubmittedTeamName(teamName); // Show success confirmation

      setUploading(false);
    }
  };

  const logos = [policeLogo2, policeLogo, kmuttLogo, kmuttLogo2, cpeLogo];

  const [submittedTeamName, setSubmittedTeamName] = useState<string | null>(
    null
  );

  return (
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      {/* Header */}
      <section className="text-white">
        <div className="grid justify-center w-full md:max-w-screen-xl px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[2rem]">
          <div className="place-self-center">
            <div className="grid gap-8" style={{ fontFamily: "Gabarito" }}>
              <div>
                <button
                  className="inline-flex items-center justify-center hover:text-gray-900"
                  style={{
                    backgroundImage: `url(${cyberlogo.src})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "240px",
                    width: "240px",
                  }}
                >
                  <span className="sr-only">Cyber Logo</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 className="max-w-2xl text-[1.4rem] mb-4 font-thai text-center font-bold uppercase tracking-tight leading-none md:text-3xl">
              ส่งข้อเสนอโครงการ
            </h4>
          </div>
        </div>
      </section>

      {!submittedTeamName ? (
        <section className="flex justify-center px-4 text-white">
          <section className="w-full md:max-w-screen-xl p-[2rem] md:p-[3rem] mx-auto bg-white rounded-2xl shadow-lg">
            <div className="w-full ">
              <span className="text-black text-xl md:text-2xl font-bold font-thai block text-center">
                การส่งข้อเสนอโครงการ
              </span>
              <div className="mx-auto w-[120px] border-t-4 border-orange-500 my-6 text-start"></div>
              <span className="text-black text-xl md:text-2xl font-bold font-thai block pt-4">
                สวัสดี ทีม:{" "}
                <span className="text-blue-500">
                  {teamName ?? "...กำลังโหลด"}
                </span>
              </span>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 text-left pt-6"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  กรุณาส่งไฟล์ข้อเสนอโครงการ ใน format ไฟล์ PDF ขนาดสูงสุด
                  ไม่เกิน 10MB
                </h3>

                {/* สำเนาบัตร Student ID */}
                <div>
                  <label
                    htmlFor="studentId"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    <span className="font-bold">กรุณาเลือกไฟล์ Resume </span>{" "}
                    (PDF ขนาดไม่เกิน 10MB)
                    <span className="text-red-500"> * </span>
                  </label>

                  <div className="flex items-center gap-4">
                    <div className="flex-[5]">
                      <input
                        type="file"
                        id="studentId"
                        accept=" .pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />
                      <div
                        id="fileName-studentId"
                        className="block w-full text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 px-4 py-2.5"
                      >
                        {file
                          ? file.name.length > 20
                            ? file.name.slice(0, 20) + "..."
                            : file.name
                          : "ยังไม่ได้เลือกไฟล์"}
                      </div>
                    </div>

                    <div className="flex-[1]">
                      <button
                        type="button"
                        onClick={() =>
                          document.getElementById("studentId")?.click()
                        }
                        className="flex w-full px-4 py-2 justify-center items-center gap-2 rounded-[12px] border-2 text-blue-700 text-md font-bold border-blue-700 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-100"
                      >
                        Browse
                      </button>
                    </div>
                  </div>
                </div>

                {message && (
                  <p className="mt-4 text-sm text-center text-red-500">
                    {message}
                  </p>
                )}

                {/* Confirmation Checkbox */}
                <div className="flex flex-col justify-center items-center mt-10 mb-4 space-y-4 w-full">
                  <div className="mx-auto w-[120px] border-t-3 border-orange-500 mb-4"></div>
                  <div className="w-full justify-center items-center pt-6">
                    <label className="flex justify-center items-center font-thai text-black text-left w-full">
                      <input
                        type="checkbox"
                        checked={confirmedData}
                        onChange={(e) => setConfirmedData(e.target.checked)}
                        className="peer hidden"
                      />
                      <span className=" w-6 h-6  border border-[#0032D2] rounded-sm mr-3 flex-shrink-0 flex items-center justify-center text-[#0032D2] text-xs peer-checked:before:content-['✓'] peer-checked:before:text-[#0032D2] peer-checked:before:font-bold"></span>
                      <span>
                        ข้าพเจ้าขอยืนยันว่าข้อมูลที่กรอกในการสมัครนี้ถูกต้อง
                        และได้ตรวจสอบความถูกต้องครบถ้วนแล้ว
                      </span>
                    </label>
                  </div>
                </div>

                {/* Styled Submit Button */}
                <div className="grid md:grid-cols-3 items-center mb-6 pt-8">
                  <div className="flex items-center space-x-2 justify-start"></div>
                  <div className="col-span-1 text-center">
                    <span className="text-black text-xl md:text-xl font-bold font-thai pt-[1.5rem]">
                      <div className="">
                        <button
                          type="submit"
                          disabled={!confirmedData || uploading}
                          className={`cursor-pointer px-6 py-2 rounded-2xl font-bold border-2 text-orange-500
            ${
              !confirmedData || uploading ? "opacity-50 cursor-not-allowed" : ""
            }`}
                        >
                          {uploading ? "กำลังอัปโหลด..." : "ส่งข้อเสนอโครงการ"}
                        </button>
                      </div>
                    </span>
                  </div>
                  <div></div>
                </div>
              </form>
            </div>
          </section>
        </section>
      ) : (
        <section className="text-white md:m-0">
          <form className="grid w-full justify-center md:max-w-screen-xl p-[2rem] md:p-[3rem] mx-auto lg:gap-8 bg-white rounded-2xl shadow-lg">
            <div className="grid items-center mb-6">
              <div className="grid items-center mb-6">
                <div className="flex items-center space-x-2 justify-start"></div>
                <div className="col-span-1 text-center">
                  <span className="text-black text-xl md:text-2xl font-bold font-thai">
                    เราได้รับข้อมูลการสมัครของคุณแล้ว!
                  </span>
                  <div className="mx-auto w-[120px] border-t-3 border-orange-500 mt-4"></div>
                </div>
                <div></div>
              </div>
              <div className="text-black space-y-5 pt-4">
                <p className="text-sm-7 md:text-lg/8 mb-4">
                  ขอบคุณที่ลงทะเบียนเข้าร่วม Cyber Warrior Hackathon 2025
                  <br />
                  <span className="text-2xl font-bold">
                    ทีมของคุณ :
                    <span className="text-orange-500">
                      <strong> {submittedTeamName}</strong>
                    </span>
                  </span>
                  <br />
                  <br />
                  ระบบได้บันทึกข้อมูลการสมัครของคุณเรียบร้อยแล้ว
                  และจะมีอีเมลยืนยันการส่งถึงคุณ
                  <br />
                  ภายใน 24 ชั่วโมง (ในกรณีที่มีผู้ส่งจำนวนมาก
                  อาจใช้เวลาเล็กน้อยในการประมวลผล)
                  <br />
                  <br />
                  📢 ประกาศรายชื่อทีมที่ผ่านเข้ารอบ Hackathon
                  จะเผยแพร่ผ่านเว็บไซต์อย่างเป็นทางการในวันที่ 10 กรกฎาคม 2025
                  <br />
                  แล้วเจอกันในสนามจริงครับ! 💻⚔️
                  <br />
                  <br />
                  หากมีข้อสงสัยเพิ่มเติม กรุณาติดต่อทีมผู้จัดงานผ่านอีเมล :
                  <span className="text-blue-700 font-bold">
                    {" "}
                    cyberwarrior2025@kmutt.ac.th
                  </span>
                </p>

                <div className="col-span-1 text-center mt-[2rem]">
                  <div className="mx-auto w-[120px] border-t-3 border-orange-500 mb-6"></div>
                  <div className="flex justify-center mt-4">
                    <button
                      type="button"
                      onClick={() => (window.location.href = "/")} // or replace with router.push("/")
                      className="cursor-pointer px-6 py-2 rounded-2xl font-bold border-2 text-orange-500"
                    >
                      กลับหน้าหลัก
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      )}

      {/* Sponsor Logos */}
      <div className="max-w-screen-sm mx-[4rem] md:mx-auto md:max-w-screen-md mt-[3rem] p-[2rem] md:pt-[2rem] bg-white rounded-3xl grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-4 text-gray-500">
        {logos.map((logo, index) => (
          <button
            key={index}
            className="inline-flex items-center justify-center w-full hover:text-gray-900"
            style={{
              backgroundImage: `url(${logo.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "40px",
            }}
          >
            <span className="sr-only">Logo</span>
          </button>
        ))}
      </div>

      {/* Spacer */}
      <section className="h-20 md:h-20 py-20"></section>
    </div>
  );
}
