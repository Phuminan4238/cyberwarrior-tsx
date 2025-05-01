import React, { useState, useEffect } from "react";
import backgroundImg from "../assets/background.png"; // Background image
import "../index.css";
import cpeLogo from "../assets/cpe-logo.png";
import kmuttLogo from "../assets/kmutt-logo.png";
import policeLogo from "../assets/police-logo.png";
import policeLogo2 from "../assets/police-logo-02.png";

// src/pages/Registration.js
const Registration = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-initial bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <section className="text-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-[6rem] lg:grid-cols-12">
          <div className=" place-self-center lg:col-span-12">
            <div className="grid  gap-8">
              {/* Left Column */}
              <div>
                <h1 className="max-w-2xl mb-4 text-2xl font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                  Cyber
                </h1>
                <h1 className="max-w-2xl mb-4 text-2xl font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                  Warrior
                </h1>
                <h1 className="max-w-2xl mb-4 text-2xl font-normal uppercase tracking-tight leading-none  md:text-5xl xl:text-4xl dark:text-white">
                  Hackathon
                </h1>
                <h1 className="max-w-2xl mb-0 text-2xl text-right font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                  2025
                </h1>
              </div>
            </div>
          </div>
          <div className=" place-self-center lg:col-span-12 pt-8">
            <div className="grid  gap-8">
              {/* Left Column */}
              <div>
                <h1 className="max-w-2xl mb-4 text-2xl font-thai font-bold uppercase tracking-tight leading-none md:text-3xl xl:text-3xl ">
                  สมัครเข้าร่วมการแข่งขัน
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 pt-[3rem] lg:pb-[3rem] lg:grid-cols-12 bg-white border border-white rounded-xl">
          <div className="place-self-center lg:col-span-12">
            <div className="grid gap-8">
              <div>
                <h1 className="max-w-2xl mb-4 text-xl font-thai font-bold uppercase tracking-tight leading-none md:text-2xl xl:text-2xl">
                  ข้อกำหนดและเงื่อนไขในการแข่งขัน
                </h1>
              </div>
            </div>
          </div>
          {/* Centered Orange Line */}
          <div className="flex justify-center lg:col-span-12 pt-4">
            <span className="block w-[120px] h-[3px] bg-orange-500"></span>
          </div>
          <div className="place-self-start lg:col-span-12 px-[3rem] py-[2rem]">
            <div className="grid gap-8">
              <div>
                <span className="text-lg font-normal font-thai">
                  ผู้สมัครและผู้เข้าร่วมโครงการตกลงและรับทราบว่าการเก็บรวบรวม
                  ใช้ และเปิดเผยข้อมูลส่วนบุคคลดังกล่าวข้างต้นเป็นไป
                  เพื่อวัตถุประสงค์ ดังต่อไปนี้
                </span>
                <br />
                <br />
                <span className="text-lg font-normal font-thai">
                  ก. เพื่อจัดทำฐานข้อมูลของผู้สมัครและผู้เข้าร่วมโครงการ
                  <br />
                  ข.
                  เพื่อใช้ในการติดต่อสื่อสารทั้งในระหว่างและภายหลังจากการเข้าร่วมโครงการ
                  <br />
                  ค. เพื่อแจ้งข้อมูลข่าวสารและเสนอสิทธิประโยชน์ต่างๆ ของโครงการ
                  <br />
                  ง.
                  เพื่อวิเคราะห์และประมวลข้อมูลเชิงสถิติของผู้สมัครและผู้เข้าร่วมโครงการ
                  <br />
                  จ. เพื่อใช้ในการเผยแพร่ โฆษณา/ประชาสัมพันธ์บนหนังสือ เอกสาร
                  เว็บไซต์ หรือ ช่องทางการสื่อสารต่าง ๆ ของบริษัท ผู้จัดงาน
                  องค์กรพันธมิตร สื่อมวลชน และ/หรือโซเชียลมีเดีย
                </span>
                <br />
                <br />
                <span className="text-lg font-normal font-thai">
                  This question is required.*
                </span>
              </div>
            </div>
          </div>
          <div className="place-self-center lg:col-span-12">
            <div className="grid gap-8">
              <div className="flex gap-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <h1 className="max-w-2xl mb-0 text-md font-thai font-normal uppercase tracking-tight leading-none md:text-lg xl:text-lg">
                  ข้าพเจ้าขอยินยอมปฏิบัติตามเงื่อนไขการแข่งขัน
                </h1>
              </div>
            </div>
          </div>

          {/* Centered Orange Line */}
          <div className="flex justify-center lg:col-span-12 pt-4">
            <span className="block w-[120px] h-[3px] bg-orange-500"></span>
          </div>

          {/* Button */}
          <div className="place-self-center lg:col-span-12 pt-8 py-4">
            <div className="grid py-2 px-6 border-2 border-orange-500 rounded-2xl">
              <div>
                <h1 className="max-w-2xl mb-0 text-lg text-orange-700 font-thai font-bold uppercase tracking-tight leading-none md:text-xl xl:text-xl">
                  สมัครเข้าร่วมกิจกรรม
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mx-auto max-w-screen-sm px-4 py-8">
          <div className="bg-white rounded-3xl grid grid-cols-2 gap-8 text-gray-500 md:grid-cols-3 dark:text-gray-400">
            <button className="inline-flex items-center px-8 py-3 gap-4 flex-shrink-0 justify-center hover:text-gray-900 dark:hover:text-white">
              <img src={policeLogo2} alt="Police Logo" />
            </button>

            <button className="inline-flex items-center px-8 py-3 gap-4 flex-shrink-0 justify-center hover:text-gray-900 dark:hover:text-white">
              <img src={policeLogo} alt="Police Logo" />
            </button>

            <button className="inline-flex items-center px-8 py-3 gap-4 flex-shrink-0 justify-center hover:text-gray-900 dark:hover:text-white">
              <img src={kmuttLogo} alt="KMUTT Logo" />
            </button>

            <button className="inline-flex items-center px-8 py-3 gap-4 flex-shrink-0 justify-center hover:text-gray-900 dark:hover:text-white">
              <img src={cpeLogo} alt="CPE Logo" />
            </button>
          </div>
        </div>
      </section>

      <section className="h-50 py-20"></section>
    </div>
  );
};

export default Registration;
