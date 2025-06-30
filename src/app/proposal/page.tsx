"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import backgroundImg from "../assets/background.png";
import cpeLogo from "../assets/cpe-logo.png";
import kmuttLogo from "../assets/kmutt-logo.png";
import kmuttLogo2 from "../assets/kmutt-logo-02.png";
import policeLogo from "../assets/police-logo.png";
import policeLogo2 from "../assets/police-logo-02.png";
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

  const logos = [policeLogo2, policeLogo, kmuttLogo, kmuttLogo2, cpeLogo];


  return (
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      {/* Header Section */}
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
                  <span className="sr-only">Sponsor Logo</span>
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

      <section className=" flex items-center justify-center px-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-12 text-center">
          <span className="text-black text-xl md:text-2xl font-bold font-thai block">
            ตรวจสอบสิทธิ์การส่งข้อเสนอ
          </span>
          <div className="mx-auto w-[120px] border-t-4 border-orange-500 mt-4 mb-6"></div>
          <h1 className="text-xl font-bold mb-4 text-gray-800">
            กรุณากรอก Special Token ของทีม 👁️👄👁️
          </h1>
          <p className="mb-6">
            Special Token ของทีม ได้ถูกส่งไปยัง email ของทีมคุณแล้ว
            กรณีที่ไม่ได้รับกรุณาติดต่อ Admin
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="กรอก token ที่ได้รับ"
              className="w-100 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 "
              required
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* Button */}
            <span className="text-black text-xl md:text-xl font-bold font-thai">
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="cursor-pointer px-6 py-2 rounded-3xl font-bold border-2 text-orange-500"
                >
                  ตรวจสอบข้อมูลทีม
                </button>
              </div>
            </span>
          </form>
        </div>
      </section>

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
