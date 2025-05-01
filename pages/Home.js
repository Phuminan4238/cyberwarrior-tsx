import React, { useState, useEffect } from "react";
import backgroundImg from "../assets/background.png"; // Background image
import "../index.css";
import cpeLogo from "../assets/cpe-logo.png";
import kmuttLogo from "../assets/kmutt-logo.png";
import kmuttLogo2 from "../assets/kmutt-logo-02.png";
import policeLogo from "../assets/police-logo.png";
import policeLogo2 from "../assets/police-logo-02.png";
import sponsorlogo from "../assets/sponsor-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  // Countdown Logic
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-05-12T00:00:00"); // Target date
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Mobile check
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      className="w-full min-h-screen bg-cover bg-initial bg-no-repeat "
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <section className="text-white">
        <div className="grid w-full justify-center md:max-w-screen-xl px-8 md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[6rem] lg:grid-cols-12">
          <div className="md:mr-auto place-self-center lg:col-span-6">
            <div className="grid gap-8">
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

          <div className="lg:mt-0 lg:col-span-6 lg:flex pt-6 md:pt-0">
            <div className="lg:mt-0 lg:col-span-6 lg:flex">
              <div className="flex flex-col items-center justify-end ">
                <div className="flex items-center space-x-4 text-center ">
                  {/* Days - Only for larger screens */}

                  <div className="flex flex-col items-center">
                    <div className="flex space-x-1 gap-3">
                      {String(timeLeft.days || "00")
                        .padStart(2, "0")
                        .split("")
                        .map((digit, index) => (
                          <div
                            key={`day-${index}`}
                            className="text-7xl font-normal text-white border border-white rounded-lg p-[0.6rem] py-0 w-16"
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
                      {String(timeLeft.hours || "00")
                        .padStart(2, "0")
                        .split("")
                        .map((digit, index) => (
                          <div
                            key={`hour-${index}`}
                            className="text-7xl font-normal text-white border border-white rounded-lg p-[0.6rem] py-0 w-16"
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
                        {String(timeLeft.minutes || "00")
                          .padStart(2, "0")
                          .split("")
                          .map((digit, index) => (
                            <div
                              key={`minute-${index}`}
                              className="text-7xl font-normal text-white border border-white rounded-lg p-[0.6rem] py-0 w-16"
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

                <div className="mt-6 md:mt-10 mb-3 text-center text-white uppercase font-thai pt-4 px-10 md:px-14 py-4 border-l-2 border-r-2 border-white rounded-[26px]">
                  <span className="text-lg md:text-[1.4rem] font-normal">
                    <p>สมัครเข้าแข่งขันพร้อมกัน</p>
                  </span>
                  <p className="text-[1.6rem] font-bold pt-2">
                    12 พฤษภาคม 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo  */}
      <section>
        <div className="mx-auto max-w-screen-sm px-10 md:px-4">
          <h2 className="font-thai mb-4 text-2xl font-extrabold tracking-tight leading-tight text-center text-white md:text-2xl">
            โดย
          </h2>

          <div className="bg-white rounded-3xl grid grid-cols-3  md:grid-cols-5 gap-8 md:gap-4 text-gray-500 dark:text-gray-400 p-6">
            <button className="inline-flex items-center justify-center w-full hover:text-gray-900 dark:hover:text-white">
              <img
                src={policeLogo2}
                alt="Police Logo2"
                className="h-16 object-contain"
              />
            </button>
            <button className="inline-flex items-center justify-center w-full hover:text-gray-900 dark:hover:text-white">
              <img
                src={policeLogo}
                alt="Police Logo"
                className="h-16 object-contain"
              />
            </button>
            <button className="inline-flex items-center justify-center w-full hover:text-gray-900 dark:hover:text-white">
              <img
                src={kmuttLogo}
                alt="KMUTT Logo"
                className="h-16 object-contain"
              />
            </button>
            <button className="inline-flex items-center justify-center w-full hover:text-gray-900 dark:hover:text-white">
              <img
                src={cpeLogo}
                alt="CPE Logo"
                className="h-16 object-contain"
              />
            </button>
            <button className="inline-flex items-center justify-center w-full hover:text-gray-900 dark:hover:text-white">
              <img
                src={kmuttLogo2}
                alt="KMUTT Logo2"
                className="h-16 object-contain"
              />
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
            <button className="inline-flex items-center justify-center hover:text-gray-900 dark:hover:text-white">
              <img
                src={sponsorlogo}
                alt="Sponsor Logo"
                className="h-20 object-contain"
              />
            </button>
          </div>
        </div>
      </section>

      {/* New Section Start */}
      <section className="text-white pt-4  md:pt-0">
        <div className="grid max-w-screen-xl px-10 md:px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:pt-[6rem] md:grid-cols-12">
          {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
          <div className="lg:col-span-12">
            <h4 className="max-w-2xl text-[1.6rem] mb-4 font-thai text-start font-bold uppercase tracking-tight leading-none md:text-3xl xl:text-3xl">
              ข้อมูลการแข่งขัน
            </h4>
            <h4 className="max-w-2xl text-xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl ">
              เป้าหมายของการแข่งขัน
            </h4>
            <p className="font-thai text-md md:text-xl pt-4">
              มุ่งค้นหาองค์ความรู้และนวัตกรรมที่สามารถนำมาสนับสนุนภารกิจในการป้องกันและปราบปรามอาชญากรรมทางเทคโนโลยี
              <br></br>
              พร้อมทั้งสร้างเครือข่ายนักศึกษาที่มีศักยภาพด้านเทคโนโลยี
              เพื่อร่วมเป็นกำลังสำคัญ ในการเสริมสร้างความมั่นคงปลอดภัย
              ทางไซเบอร์
            </p>
          </div>
        </div>
      </section>

      {/* End  */}

      {/* New Section Start */}
      <section className="text-white">
        <div className="grid max-w-screen-xl px-10 md:px-4 py-4 md:py-8 mx-auto md:gap-8 xl:gap-0  md:grid-cols-12">
          {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
          <div className="lg:col-span-12">
            <h4 className="max-w-2xl text-xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl">
              กำหนดการ
            </h4>
          </div>

          {/* ด้านล่าง (รับสมัคร + วันที่) */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 pt-4 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
            <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
              <span className="text-md md:text-lg font-normal">
                {" "}
                <FontAwesomeIcon
                  icon={faStarRegular}
                  className="text-white p-1 pr-3"
                />
                รับสมัคร
              </span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-md md:text-lg font-normal">
                12-31 พฤษภาคม 2025
              </span>
            </div>
          </div>

          {/* Repeat the same layout for the next section */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
            <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
              <span className="text-md md:text-lg font-normal">
                <FontAwesomeIcon
                  icon={faStarRegular}
                  className="text-white p-1 pr-3"
                />
                ประกาศรายชื่อผู้มีสิทธิ์เข้าแข่งขัน
              </span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-md md:text-lg font-normal">
                1 มิถุนายน 2025
              </span>
            </div>
          </div>

          {/* Repeat the same layout for the next section */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
            <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
              <span className="text-md md:text-lg font-normal">
                {" "}
                <FontAwesomeIcon
                  icon={faStarRegular}
                  className="text-white p-1 pr-3"
                />
                ปฐมนิเทศ และ workshop 1
              </span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-md md:text-lg font-normal">
                2 - 6 มิถุนายน 2025
              </span>
            </div>
          </div>

          {/* Repeat the same layout for the next section */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
            <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
              <span className="text-md md:text-lg font-normal">
                <FontAwesomeIcon
                  icon={faStarRegular}
                  className="text-white p-1 pr-3"
                />
                ปฐมนิเทศ และ workshop 1
              </span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-md md:text-lg font-normal">
                23 - 27 มิถุนายน 2025
              </span>
            </div>
          </div>

          {/* Repeat the same layout for the next section */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
            <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
              <span className="text-md md:text-lg font-normal">
                <FontAwesomeIcon
                  icon={faStarRegular}
                  className="text-white p-1 pr-3"
                />
                ส่งข้อเสนอโครงการ
              </span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-md md:text-lg font-normal">
                4 กรกฎาคม 2025
              </span>
            </div>
          </div>

          {/* Repeat the same layout for the next section */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
            <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
              <span className="text-md md:text-lg font-normal">
                <FontAwesomeIcon
                  icon={faStarRegular}
                  className="text-white p-1 pr-3"
                />
                ประกาศผลผู้ผ่านเข้ารอบสุดท้าย
              </span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-md md:text-lg font-normal">
                8 กรกฎาคม 2025
              </span>
            </div>
          </div>

          {/* Repeat the same layout for the next section */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0 md:mt-4 mb-4 md:mb-0">
            <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
              <span className="text-md md:text-lg font-normal">
                <FontAwesomeIcon
                  icon={faStarRegular}
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
          </div>
        </div>
      </section>
      {/* New Section End */}

      {/* Hide Timeline on mobile */}
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
          <div className="grid grid-cols-7 gap-4 max-w-screen-xl px-4 mx-auto lg:gap-4 xl:gap-4">
            {[
              { title: "รับสมัคร", date: "12-31 พฤษภาคม 2025" },
              {
                title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าแข่งขัน",
                date: "1 มิถุนายน 2025",
              },
              { title: "ปฐมนิเทศ และ workshop 1", date: "2 - 6 มิถุนายน 2025" },
              {
                title: "ปฐมนิเทศ และ workshop 2",
                date: "23 - 27 มิถุนายน 2025",
              },
              { title: "ส่งข้อเสนอโครงการ", date: "4 กรกฎาคม 2025" },
              {
                title: "ประกาศผลผู้ผ่านเข้ารอบสุดท้าย",
                date: "8 กรกฎาคม 2025",
              },
              {
                title: "Hackathon & Pitching Day",
                date: "19 - 21 กรกฎาคม 2025",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center font-thai gap-2 p-2 h-[140px] rounded-2xl border border-white bg-gradient-to-b from-[#2F65AF66] to-[#0032D266]"
              >
                <FontAwesomeIcon
                  icon={faStarRegular}
                  className="text-white p-1"
                />
                <span className="text-lg font-normal text-center">
                  {item.title}
                </span>
                <span className="text-sm font-normal text-center">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="text-white">
        <div className="grid max-w-screen-xl px-10 md:px-4 py-4  mx-auto lg:gap-8 xl:gap-0 md:pt-[4rem] md:pb-[2rem] lg:grid-cols-12">
          {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
          <div className="lg:col-span-12">
            <h4 className="max-w-2xl text-xl font-thai text-start font-bold uppercase tracking-tight  md:text-2xl">
              คุณสมบัติผู้เข้าแข่งขัน
            </h4>
          </div>

          {/* ด้านล่าง (รับสมัคร + วันที่) */}
          <div className="grid grid-cols-8 gap-4 lg:col-span-12 mt-8 mb-4">
            <div className="col-span-12 flex items-center gap-2 font-thai">
              <li></li>
              <span className="text-md md:text-lg font-normal">สัญชาติไทย</span>
            </div>

            <div className="col-span-12 flex items-center gap-2 font-thai">
              <li></li>
              <span className="text-md md:text-lg font-normal">
                นักศึกษาที่กำลังศึกษาในระดับอุดมศึกษา และพำนักอยู่ในประเทศไทย
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
        <div className="grid max-w-screen-xl px-10 md:px-4 py-4  mx-auto lg:gap-4  lg:grid-cols-12">
          {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
          <div className="lg:col-span-12">
            <h4 className="max-w-2xl text-xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl">
              รางวัลทั้งหมด
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0  mb-4 md:mb-0">
            <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
              <span className="text-md md:text-lg font-normal">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-white p-1 pr-3"
                />
                รางวัลชนะเลิศอันดับ 1
              </span>
            </div>

            <div className="md:col-span-4 flex flex-col md:flex-row items-start font-thai">
              <span className="text-md md:text-lg font-normal">
                100,000 บาท จำนวน 1 รางวัล พร้อมโล่เกียรติยศ
              </span>
            </div>
          </div>

          {/* ด้านล่าง (รับสมัคร + วันที่) */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0  mb-4 md:mb-0">
            <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
              <span className="text-md md:text-lg font-normal">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-white p-1 pr-3"
                />
                รางวัลชนะเลิศอันดับ 2
              </span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-md md:text-lg font-normal">
                50,000 บาท จำนวน 1 รางวัล พร้อมโล่เกียรติยศ
              </span>
            </div>
          </div>

          {/* ด้านล่าง (รับสมัคร + วันที่) */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0  mb-4 md:mb-0">
            <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
              <span className="text-md md:text-lg font-normal">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-white p-1 pr-3"
                />
                รางวัลชนะเลิศอันดับ 3
              </span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-md md:text-lg font-normal">
                30,000 บาท จำนวน 1 รางวัล พร้อมโล่เกียรติยศ
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 lg:col-span-12 pt-0  mb-4 md:mb-0">
            <div className="md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-2 font-thai">
              <span className="text-md md:text-lg font-normal">
                ** พร้อมโล่ประกาศเกียรติคุณจากสำนักงานตำรวจแห่งชาติ
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white pt-8 md:pt-12 px-10 md:px-4">
        <div
          className="relative bg-cover bg-initial bg-no-repeat bg-bottom rounded-xl border-l-2 border-r-2 border-white rounded-[26px] grid grid-cols-1 md:grid-cols-12 gap-6 max-w-screen-xl px-6 md:px-6 py-8 mx-auto md:gap-8"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="absolute inset-0 bg-[rgba(10,29,58,0.1)] " />
          {/* Left Column */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <h4 className="max-w-2xl text-xl font-thai text-center font-bold uppercase tracking-tight leading-none md:text-2xl">
              สมัครรับข่าวสารการแข่งขัน
            </h4>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full flex flex-col md:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="กรอก E-mail ของคุณ"
                className="w-full md:w-full px-4 py-2 rounded-lg bg-transparent border border-gray-300 font-thai text-white placeholder:text-gray-300 z-10"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <button
              style={{
                backgroundImage: `url(${backgroundImg})`,
              }}
              className="w-[149px] h-[45.938px] flex justify-center items-center px-6 gap-2 rounded-lg font-thai font-bold bg-cover"
            >
              ติดตาม
            </button>
          </div>
        </div>
      </section>

      <section className="text-white pt-8 md:pt-12 px-10 md:px-4">
        <div className="grid max-w-screen-xl   py-2  mx-auto lg:gap-4 justify-center md:justify-start">
          <div className="relative rounded-xl border-l-2 border-r-2 border-white rounded-[26px] gap-2 max-w-fit px-4 md:px-4 py-4 ml-0 md:gap-8">
            {/* Left Column */}
            <div className="flex flex-col items-start justify-start gap-4">
              <h4 className=" text-md font-thai text-start font-bold uppercase tracking-tight leading-none md:text-xl">
                ติดต่อสอบถาม
              </h4>
              <h4 className="text-md md:font-bold tracking-tight leading-none md:text-xl">
                E-mail:
                <span className="text-blue-400 pl-2 pt-2">
                  cyberwarrior2025@kmutt.ac.th
                </span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="h-20 py-10"></section>
    </div>
  );
};

export default Home;
