"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import backgroundImg from "./assets/background.png";
import cpeLogo from "./assets/cpe-logo.png";
import kmuttLogo from "./assets/kmutt-logo.png";
import kmuttLogo2 from "./assets/kmutt-logo-02.png";
import policeLogo from "./assets/police-logo.png";
import policeLogo2 from "./assets/police-logo-02.png";
import sponsorlogo from "./assets/sponsor-logo.png";
import cyberlogo from "./assets/cyber-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faStar,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons";

// Define the type for timeLeft
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Home: React.FC = () => {
  // Subscription
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("กรุณากรอกอีเมล");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://cyberwarrior2025.io/api/subscribes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { email } }),
      });

      const data = await res.json();
      console.log("✅ Response:", data);

      if (!res.ok) {
        setMessage(
          "เกิดข้อผิดพลาด: " + (data.error?.message || "ไม่สามารถสมัครได้")
        );
        return;
      }

      setMessage("สมัครรับข่าวสารสำเร็จ ✅");
      setEmail("");
    } catch (err) {
      console.error("❌ Network error:", err);
      setMessage("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
    } finally {
      setLoading(false);
    }
  };

  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-05-12T00:00:00"); // Target date
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60), // Seconds Calculation
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null); // Initialize as null for CSR
  const [isOpen, setIsOpen] = useState(false); // This is the isOpen state
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false); // For client-side rendering check

  // Function to toggle the menu state
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Set mounted to true after the component has mounted on the client
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    if (mounted) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [mounted]);

  // If not mounted (server-side), don't render anything to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-initial bg-no-repeat "
        style={{
          backgroundImage: `url(${backgroundImg.src})`,
        }}
      >
        <section className="text-white py-[2rem] lg:pt-[6rem] lg:pb-[3rem]">
          <div className="grid w-full justify-center md:max-w-screen-xl px-8 md:px-4  mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
            <div className="md:mr-auto place-self-center lg:col-span-6">
              <div className="grid gap-8" style={{ fontFamily: "Gabarito" }}>
                <div>
                  <h1 className="max-w-2xl mb-4 text-6xl font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white">
                    Cyber
                  </h1>
                  <h1 className="max-w-2xl mb-4 text-5xl font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white">
                    Warrior
                  </h1>
                  <h1 className="max-w-2xl mb-4 text-5xl font-normal uppercase tracking-tight leading-none  md:text-5xl xl:text-7xl dark:text-white">
                    Hackathon
                  </h1>
                  <h1 className="max-w-2xl mb-0 text-6xl text-right font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white">
                    2025
                  </h1>
                </div>
              </div>
            </div>

            <div className="lg:mt-0 lg:col-span-6 lg:flex  md:pt-0">
              <div className="lg:mt-0 lg:col-span-6 lg:flex">
                <div className="flex flex-col items-center justify-end gap-4">
                  <div className="mt-6 md:mt-0 mb-3 text-center text-white uppercase font-thai pt-4 px-10 md:px-14 py-4 border-l-2 border-r-2 border-white rounded-[26px]">
                    <span className="text-lg md:text-[1.4rem] font-normal">
                      <p>เปิดรับสมัคร แล้ววันนี้ !</p>
                    </span>
                    <p className="text-[1.6rem] font-bold pt-2">
                      12 ถึง 31 พฤษภาคม 2025
                    </p>
                  </div>

                  <div className="grid  items-center pt-2">
                    <div className="flex items-center space-x-2 justify-start"></div>
                    <div className="col-span-1 text-center">
                      <span className="text-black text-xl md:text-xl font-bold font-thai ">
                        <div className="">
                          <Link href="/regis">
                            <span className="py-2 px-18 font-bold text-white border-2 border-white bg-gradient-to-r to-[#0032D2] from-[#FF4C00] rounded-3xl gradient-border cursor-pointer">
                              สมัครเข้าร่วมแข่งขัน
                            </span>
                          </Link>
                        </div>
                      </span>
                    </div>
                    <div></div>
                  </div>

                  <div className="flex items-center pt-7 pb-6 text-xl">
                    เหลือเวลา
                  </div>

                  <div className="flex items-center space-x-4 text-center ">
                    {/* Days - Only for larger screens */}
                    <div className="flex flex-col items-center">
                      <div className="flex space-x-1 gap-3">
                        {String(timeLeft?.days || "00")
                          .padStart(2, "0")
                          .split("")
                          .map((digit, index) => (
                            <div
                              key={`day-${index}`}
                              style={{ fontFamily: "Gabarito" }}
                              className="text-8xl  font-normal text-white border border-white rounded-lg w-16 h-24 flex items-center justify-center"
                            >
                              {digit}
                            </div>
                          ))}
                      </div>
                      <div className="mt-2 text-2xl font-medium uppercase text-white pt-3">
                        Day
                      </div>
                    </div>

                    <div className="text-8xl font-normal text-white flex flex-col items-center pb-10">
                      <div>:</div>
                      <div className="h-6" />
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col items-center">
                      <div className="flex space-x-1 gap-3">
                        {String(timeLeft?.hours || "00")
                          .padStart(2, "0")
                          .split("")
                          .map((digit, index) => (
                            <div
                              key={`hour-${index}`}
                              style={{ fontFamily: "Gabarito" }}
                              className="text-8xl font-normal text-white border border-white rounded-lg w-16 h-24 flex items-center justify-center"
                            >
                              {digit}
                            </div>
                          ))}
                      </div>
                      <div className="mt-2 text-2xl font-medium uppercase text-white pt-3">
                        Hour
                      </div>
                    </div>

                    {/* Colon */}
                    {!isMobile && (
                      <div className="text-8xl font-normal text-white flex flex-col items-center pb-10">
                        <div>:</div>
                        <div className="h-6" />
                      </div>
                    )}

                    {/* Minutes */}
                    {!isMobile && (
                      <div className="flex flex-col items-center">
                        <div className="flex space-x-1 gap-3">
                          {String(timeLeft?.minutes || "00")
                            .padStart(2, "0")
                            .split("")
                            .map((digit, index) => (
                              <div
                                key={`minute-${index}`}
                                style={{ fontFamily: "Gabarito" }}
                                className="text-8xl  font-normal text-white border border-white rounded-lg w-16 h-24 flex items-center justify-center"
                              >
                                {digit}
                              </div>
                            ))}
                        </div>
                        <div className="mt-2 text-2xl font-medium uppercase text-white pt-3">
                          Minute
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-screen-sm px-10 md:px-4">
            <h2 className="font-thai mb-4 text-2xl font-extrabold tracking-tight leading-tight text-center text-white md:text-2xl">
              โดย
            </h2>

            <div className="bg-white rounded-3xl grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-4 text-gray-500 dark:text-gray-400 p-6">
              {/* Logo 1 */}
              <button
                className="inline-flex items-center justify-center w-full hover:text-gray-900 dark:hover:text-white"
                style={{
                  backgroundImage: `url(${policeLogo2.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "80px", // Adjust as needed
                }}
              >
                <span className="sr-only">Police Logo 2</span>{" "}
                {/* Hidden for accessibility */}
              </button>

              {/* Logo 2 */}
              <button
                className="inline-flex items-center justify-center w-full hover:text-gray-900 dark:hover:text-white"
                style={{
                  backgroundImage: `url(${policeLogo.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "80px", // Adjust as needed
                }}
              >
                <span className="sr-only">Police Logo</span>{" "}
                {/* Hidden for accessibility */}
              </button>

              {/* Logo 3 */}
              <button
                className="inline-flex items-center justify-center w-full hover:text-gray-900 dark:hover:text-white"
                style={{
                  backgroundImage: `url(${kmuttLogo.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "80px", // Adjust as needed
                }}
              >
                <span className="sr-only">KMUTT Logo</span>{" "}
                {/* Hidden for accessibility */}
              </button>

              {/* Logo 5 */}
              <button
                className="inline-flex items-center justify-center w-full hover:text-gray-900 dark:hover:text-white"
                style={{
                  backgroundImage: `url(${kmuttLogo2.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "80px", // Adjust as needed
                }}
              >
                <span className="sr-only">KMUTT Logo 2</span>{" "}
                {/* Hidden for accessibility */}
              </button>

              {/* Logo 4 */}
              <button
                className="inline-flex items-center justify-center w-full hover:text-gray-900 dark:hover:text-white"
                style={{
                  backgroundImage: `url(${cpeLogo.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "80px", // Adjust as needed
                }}
              >
                <span className="sr-only">CPE Logo</span>{" "}
                {/* Hidden for accessibility */}
              </button>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="mx-auto px-4 text-center">
            <h2 className="font-thai mb-4 text-2xl font-bold tracking-tight leading-tight text-white md:text-2xl">
              ผู้สนับสนุน
            </h2>

            <div className="inline-block bg-white rounded-3xl px-8 p-4 text-gray-500 dark:text-gray-400">
              <button
                className="inline-flex items-center justify-center hover:text-gray-900 dark:hover:text-white"
                style={{
                  backgroundImage: `url(${sponsorlogo.src})`, // Using sponsorlogo.src for background image
                  backgroundSize: "contain", // Ensures the image fits within the container
                  backgroundRepeat: "no-repeat", // Prevents image repetition
                  backgroundPosition: "center", // Centers the image
                  height: "120px", // Adjust the height as needed
                  width: "100px", // Adjust the width as needed
                }}
              >
                {/* You can keep the button content if needed, otherwise just leave the background image */}
                <span className="sr-only">Sponsor Logo</span>{" "}
                {/* Hidden text for accessibility */}
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="text-white   md:pt-0">
          <div className="grid max-w-screen-xl px-10 md:px-4 py-8 mx-auto md:gap-8 xl:gap-0 pt-[4rem] md:pt-[6rem] md:grid-cols-12">
            {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
            <div className="lg:col-span-12">
              <h4 className="max-w-2xl text-[1.6rem] mb-4 font-thai text-start font-bold uppercase tracking-tight leading-none md:text-3xl xl:text-3xl">
                ข้อมูลการแข่งขัน
              </h4>
              <h4 className="max-w-2xl text-xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl ">
                เป้าหมายของการแข่งขัน
              </h4>
              <p className="font-thai text-md md:text-xl pt-4 md:pt-6">
                มุ่งค้นหาองค์ความรู้และนวัตกรรมที่สามารถนำมาสนับสนุนภารกิจในการป้องกันและปราบปรามอาชญากรรมทางเทคโนโลยี
                <br></br>
                พร้อมทั้งสร้างเครือข่ายนักศึกษาที่มีศักยภาพด้านเทคโนโลยี
                เพื่อร่วมเป็นกำลังสำคัญ ในการเสริมสร้างความมั่นคงปลอดภัย
                ทางไซเบอร์
              </p>
            </div>
          </div>
        </section>

        <section className="text-white">
          <div className="grid max-w-screen-xl px-10 md:px-4 md:py-2  mx-auto md:gap-8 xl:gap-0  md:grid-cols-12">
            {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
            <div className="lg:col-span-12">
              <h4 className="max-w-2xl text-xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl">
                กำหนดการ
              </h4>
            </div>

            {/* ด้านล่าง (รับสมัคร + วันที่) */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-2 pt-4 lg:col-span-12  mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center  font-thai">
                <span className="text-md md:text-lg font-normal">
                  {" "}
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-white p-1 pr-3"
                  />
                  รับสมัคร
                </span>
              </div>

              <div className="col-span-4 flex items-start justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  12-31 พฤษภาคม 2025
                </span>
              </div>

              <div className=" md:hidden col-span-4 flex items-start justify-start font-thai">
                <span className=" text-md md:text-lg font-normal">Online</span>
              </div>
            </div>

            {/* Repeat the same layout for the next section */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-2 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-white p-1 pr-3"
                  />
                  ประกาศรายชื่อผู้มีสิทธิ์เข้าแข่งขัน
                </span>
              </div>

              <div className="col-span-4 flex items-center justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  2 มิถุนายน 2025
                </span>
              </div>

              <div className=" md:hidden col-span-4 flex items-start justify-start font-thai">
                <span className=" text-md md:text-lg font-normal">Online</span>
              </div>
            </div>

            {/* Repeat the same layout for the next section */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-2 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  {" "}
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-white p-1 pr-3"
                  />
                  ปฐมนิเทศ และ workshop 1
                </span>
              </div>

              <div className="col-span-4 flex items-center justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  6 มิถุนายน 2025
                </span>
              </div>

              <div className=" md:hidden col-span-4 flex items-start justify-start font-thai">
                <span className=" text-md md:text-lg font-normal">
                  ห้องฟีนิกซ์ 1-4 อาคารศูนย์แสดงสินค้า อิมแพ็ค เมืองทองธานี
                </span>
              </div>
            </div>

            {/* Repeat the same layout for the next section */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-2 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-white p-1 pr-3"
                  />
                  Workshop 2
                </span>
              </div>

              <div className="col-span-4 flex items-center justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  28 มิถุนายน 2025
                </span>
              </div>

              <div className=" md:hidden col-span-4 flex items-start justify-start font-thai">
                <span className=" text-md md:text-lg font-normal">Online</span>
              </div>
            </div>

            {/* Repeat the same layout for the next section */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-2 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-white p-1 pr-3"
                  />
                  นำส่งข้อเสนอโครงการ
                </span>
              </div>

              <div className="col-span-4 flex items-center justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  4 กรกฎาคม 2025
                </span>
              </div>

              <div className=" md:hidden col-span-4 flex items-start justify-start font-thai">
                <span className=" text-md md:text-lg font-normal">Online</span>
              </div>
            </div>

            {/* Repeat the same layout for the next section */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-2 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-white p-1 pr-3"
                  />
                  ประกาศผลรายชื่อผู้ผ่านเข้ารอบ
                </span>
              </div>

              <div className="col-span-4 flex items-center justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  8 กรกฎาคม 2025
                </span>
              </div>

              <div className=" md:hidden col-span-4 flex items-start justify-start font-thai">
                <span className=" text-md md:text-lg font-normal ">Online</span>
              </div>
            </div>

            {/* Repeat the same layout for the next section */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-2 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-white p-1 pr-3"
                  />
                  Hackathon & Pitching Day
                </span>
              </div>

              <div className="col-span-4 flex items-center justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  19 - 21 กรกฎาคม 2025
                </span>
              </div>

              <div className=" md:hidden col-span-4 flex items-start justify-start font-thai">
                <span className=" text-md md:text-lg font-normal">
                  อาคารการเรียนรู้ LX KMUTT
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="hidden md:block">
          <section className="text-white">
            <div className="grid max-w-screen-xl px-10 md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 ">
              <div className="lg:col-span-12">
                <h4 className="max-w-2xl text-2xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl ">
                  ไทม์ไลน์การแข่งขัน
                </h4>
              </div>
            </div>
          </section>

          <section className="text-white">
            <div className="grid grid-cols-8 gap-4 max-w-screen-xl px-4 mx-auto lg:gap-4 xl:gap-4">
              {[
                {
                  title: "รับสมัคร",
                  date: "12-31 พฤษภาคม 2025",
                  label: "online",
                },
                {
                  title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าแข่งขัน",
                  date: "2 มิถุนายน 2025",
                  label: "online",
                },
                {
                  title: "ปฐมนิเทศ และ workshop 1",
                  date: "6 มิถุนายน 2025",
                  label: "ห้องฟีนิกซ์ 1-4 IMPACT",
                },
                {
                  title: "กิจกรรม workshop 2",
                  date: "28 มิถุนายน 2025",
                  label: "online",
                },
                {
                  title: "ส่งข้อเสนอโครงการ",
                  date: "4 กรกฎาคม 2025",
                  label: "online",
                },
                {
                  title: "ประกาศผลผู้ผ่านเข้ารอบ",
                  date: "8 กรกฎาคม 2025",
                  label: "online",
                },
                {
                  title: "Hackathon",
                  date: "19 - 20 กรกฎาคม 2025",
                  label: "อาคารการเรียนรู้ LX KMUTT",
                },
                {
                  title: "Pitching Day",
                  date: "21 กรกฏาคม",
                  label: "SCBX NEXT TECH @SiamParagon",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center font-thai gap-2 p-2 h-[180px] rounded-2xl border border-white bg-gradient-to-b from-[#2F65AF66] to-[#0032D266]"
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-white p-1 pr-3"
                  />
                  <span className="text-lg font-normal text-center">
                    {item.title}
                  </span>
                  <span className="text-sm font-normal text-start">
                    {item.date}
                  </span>
                  <span className="text-sm font-normal text-start">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="max-w-screen-xl px-4 pt-4 mx-auto">
              <span className="text-md md:text-lg font-normal">
                * สถานที่อาจมีการเปลี่ยนแปลง
              </span>
            </div>
          </section>
        </div>

        <section className="text-white">
          <div className="grid max-w-screen-xl px-10 md:px-4 py-4  mx-auto   pt-[2rem]  lg:grid-cols-12">
            {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
            <div className="lg:col-span-12">
              <h4 className="max-w-2xl text-xl font-thai text-start font-bold uppercase tracking-tight  md:text-2xl">
                คุณสมบัติผู้เข้าแข่งขัน
              </h4>
            </div>

            {/* ด้านล่าง (รับสมัคร + วันที่) */}
            <div className="grid grid-cols-8 gap-2 lg:col-span-12 mt-4  mb-4">
              <div className="col-span-12 flex items-center gap-2 font-thai">
                <li></li>
                <span className="text-md md:text-lg font-normal">
                  นักศึกษาระดับอุดมศึกษา ป.ตรี ป.โท ป.เอก
                  และสถานศึกษาอยู่ในประเทศไทย
                </span>
              </div>

              <div className="col-span-12 flex items-center gap-2 font-thai">
                <li></li>
                <span className="text-md md:text-lg font-normal">
                  ผู้เข้าแข่งขันทีมละ 5 คน
                </span>
              </div>
              <div className="col-span-12 flex items-center gap-2 font-thai">
                <li></li>
                <span className="text-md md:text-lg font-normal">
                  ต้องไม่เป็นผู้ปฏิบัติหน้าที่ใดหน้าที่หนึ่งในการดำเนินการ
                  และ/หรือให้คำปรึกษาการจัดการแข่งขัน
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="text-white">
          <div className="grid max-w-screen-xl px-10 md:px-4  mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
            <div className="lg:col-span-12">
              <h4 className="max-w-2xl text-xl font-thai text-start font-bold uppercase tracking-tight  md:text-2xl">
                สิทธิ์ในผลงาน
              </h4>
            </div>

            <div className="grid grid-cols-8 gap-4 lg:col-span-12 mt-4 mb-4">
              <div className="col-span-12 flex items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  ผลงานที่พัฒนาขึ้นภายใต้โครงการ Cyber Warrior Hackathon 2025
                  จะถือเป็นทรัพย์สินทางปัญญาที่มีเจ้าของร่วมระหว่าง
                  กองบัญชาการตำรวจสืบสวนสอบสวนอาชญากรรมทางเทคโนโลยี (บช.สอท.)
                  และ ผู้เข้าร่วมโครงการ โดยทั้งสองฝ่ายสามารถนำไปใช้ประโยชน์
                  รวมถึงเผยแพร่ต่อสาธารณชน เพื่อวัตถุประสงค์ของโครงการ เช่น
                  การส่งเสริมความรู้ การจัดแสดงผลงาน หรือการพัฒนาเชิงนโยบาย
                  โดยไม่ละเมิดสิทธิของอีกฝ่าย ทั้งนี้
                  การนำไปใช้ในเชิงพาณิชย์จะต้องได้รับความยินยอมร่วมกันจากทั้งสองฝ่ายเป็นลายลักษณ์อักษร
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="text-white" id="reward">
          <div className="grid max-w-screen-xl px-10 md:px-4 py-4  mx-auto lg:gap-4 lg:grid-cols-12">
            {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
            <div className="lg:col-span-12">
              <h4 className="max-w-2xl text-xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl">
                รางวัลทั้งหมด
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0  mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="text-md md:text-lg font-normal">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="text-white p-1 pr-3"
                  />
                  รางวัลชนะเลิศ
                </span>
              </div>

              <div className="md:col-span-4 flex flex-col md:flex-row items-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  <span className="font-bold">100,000 </span> บาท จำนวน 1 รางวัล
                </span>
              </div>
            </div>

            {/* ด้านล่าง (รับสมัคร + วันที่) */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0  mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="text-md md:text-lg font-normal">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="text-white p-1 pr-3"
                  />
                  รางวัลรองชนะเลิศอันดับ 1
                </span>
              </div>

              <div className="col-span-4 flex items-center justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  <span className="font-bold">50,000 </span> บาท จำนวน 1 รางวัล
                </span>
              </div>
            </div>

            {/* ด้านล่าง (รับสมัคร + วันที่) */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0  mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="text-md md:text-lg font-normal">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="text-white p-1 pr-3"
                  />
                  รางวัลรองชนะเลิศอันดับ 2
                </span>
              </div>

              <div className="col-span-4 flex items-center justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  <span className="font-bold">30,000 </span> บาท จำนวน 1 รางวัล
                </span>
              </div>
            </div>

            {/* ด้านล่าง (รับสมัคร + วันที่) */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0  mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="text-md md:text-lg font-normal">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="text-white p-1 pr-3"
                  />
                  รางวัล ชมเชย
                </span>
              </div>

              <div className="col-span-4 flex items-center justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  10,000 บาท จำนวน 7 รางวัล
                </span>
              </div>
            </div>

            {/* ด้านล่าง (รับสมัคร + วันที่) */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0  mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="text-md md:text-lg font-normal">
                  <FontAwesomeIcon
                    icon={faAsterisk}
                    className="text-white p-1 pr-3"
                  />
                  รางวัลชม Popular Vote
                </span>
              </div>

              <div className="col-span-4 flex items-center justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  จำนวน 1 รางวัล
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0  mb-4 md:mb-0">
              <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="text-md md:text-lg font-normal">
                  ** พร้อมโล่ประกาศเกียรติคุณจากสำนักงานตำรวจแห่งชาติ
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="text-white">
          <div className="grid max-w-screen-xl px-10 md:px-4 py-4  mx-auto lg:gap-8 xl:gap-0  md:pb-[2rem] lg:grid-cols-12">
            <div className="lg:col-span-12">
              <h4 className="max-w-2xl text-xl font-thai text-start font-bold uppercase tracking-tight  md:text-2xl">
                เกณฑ์การให้คะแนนและการตัดสิน
              </h4>
            </div>

            {/* ด้านล่าง (รับสมัคร + วันที่) */}
            <div className="grid grid-cols-8 gap-4 lg:col-span-12 mt-4  mb-4">
              <div className="col-span-12 flex items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  1. แนวคิดและความสอดคล้องกับโจทย
                </span>
              </div>

              <div className="col-span-12 flex items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  2. ความคิดสร้างสรรค์และนวัตกรรม
                </span>
              </div>
              <div className="col-span-12 flex items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  3. ความเป็นไปได้ในการพัฒนาและนำไปใช้จริง
                </span>
              </div>
              <div className="col-span-12 flex items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  4. ผลกระทบและประโยชน์ต่อกลุ่มเป้าหมาย
                </span>
              </div>
              <div className="col-span-12 flex items-center gap-2 font-thai">
                <span className="text-md md:text-lg font-normal">
                  5. การนำเสนอและการสื่อสาร
                </span>
              </div>
              <div className="col-span-8 flex items-center justify-start font-thai">
                <span className="text-md md:text-lg font-normal">
                  ** หมายเหตุ: การตัดสินของคณะกรรมการถือเป็นที่สิ้นสุด
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid  items-center py-8 ">
          <div className="flex items-center space-x-2 justify-start"></div>
          <div className="col-span-1 text-center">
            <span className="text-black text-xl md:text-2xl font-bold font-thai pt-[1.5rem]">
              <div className="">
                <Link href="/regis">
                  <span className="py-4 px-14 font-bold text-white border-2 border-white bg-gradient-to-r to-[#0032D2] from-[#FF4C00] rounded-3xl gradient-border cursor-pointer">
                    สมัครเข้าร่วมแข่งขัน
                  </span>
                </Link>
              </div>
            </span>
          </div>
          <div></div>
        </div>
        {/* subscribe  */}
        {/* <section className="text-white pt-8 md:pt-12 px-10 md:px-4">
          <div
            className="relative bg-cover bg-initial bg-no-repeat bg-bottom rounded-xl border-l-2 border-r-2 border-white rounded-[26px] grid grid-cols-1 md:grid-cols-12 gap-6 max-w-screen-xl px-6 md:px-6 py-8 mx-auto md:gap-8"
            style={{ backgroundImage: `url(${backgroundImg.src})` }}
          >
            <div className="absolute inset-0 bg-[rgba(10,29,58,0.1)]" />
            <div className="lg:col-span-3 flex items-center justify-center z-10">
              <h4 className="max-w-2xl text-xl font-thai text-center font-bold uppercase tracking-tight leading-none md:text-2xl">
                สมัครรับข่าวสารการแข่งขัน
              </h4>
            </div>

            <div className="lg:col-span-7 flex items-center justify-center z-10">
              <div className="w-full flex flex-col md:flex-row items-center gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="กรอกอีเมลของคุณ"
                  className="w-full md:w-full px-4 py-2 rounded-lg bg-transparent border border-gray-300 font-thai text-white placeholder:text-gray-300 z-10"
                />
              </div>
            </div>

            <div className="lg:col-span-2 flex items-center justify-center z-10">
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="text-lg w-[149px] h-[45.938px] flex justify-center items-center px-6 gap-2 font-thai font-bold rounded-[12px] bg-gradient-to-r from-[#0032D2] to-[#FF4C00] hover:opacity-90 transition-all"
              >
                {loading ? "กำลังส่ง..." : "ติดตาม"}
              </button>
            </div>

            {message && (
              <div className="col-span-full text-center text-sm mt-2 z-10">
                {message}
              </div>
            )}
          </div>
        </section> */}

        <section
          className="text-white pt-12 md:pt-16 px-10 md:px-4"
          id="contact"
        >
          <div className="flex max-w-screen-xl py-2 mx-auto justify-center md:justify-start">
            <div className="relative rounded-xl border-l-2 border-r-2 border-white gap-2 w-fit md:w-[800px] px-4 py-4 md:gap-8">
              <div className="flex flex-col items-start justify-start gap-4">
                <h4 className="text-md font-thai text-start font-bold uppercase tracking-tight leading-none md:text-xl">
                  ติดต่อสอบถาม
                </h4>
                <h4 className="text-md md:font-bold tracking-tight leading-none md:text-xl">
                  E-mail :
                  <a
                    href="mailto:cyberwarrior2025@kmutt.ac.th"
                    className="text-blue-400 pl-2 pt-2 hover:underline"
                  >
                    cyberwarrior2025@kmutt.ac.th
                  </a>
                </h4>
                <h4 className="text-md md:font-bold tracking-tight leading-none md:text-xl">
                  เบอร์โทร :
                  <a
                    href="tel:024709630"
                    className="text-blue-400 pl-2 pt-2 hover:underline"
                  >
                    02-470-9630 , 095-241-5393
                  </a>
                </h4>
                <h4 className="text-md tracking-tight leading-none md:text-xl">
                  คุณภิรดา บินรามัน (ดา)
                </h4>
                <h4 className="text-md tracking-tight leading-none md:text-xl">
                  คุณภัทรานิษฐ์ ปิตินันท์พงศ์ (โบว์)
                  <a
                    href="tel:024709387"
                    className="text-blue-400 pl-2 pt-2 hover:underline"
                  >
                    02-470-9387
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section className="h-40 py-20"></section>
      </div>
    </>
  );
};

export default Home;
