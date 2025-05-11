import React, { useState, useEffect } from "react";
import backgroundImg from "../assets/background.png"; // Background image
import "../index.css";
import cpeLogo from "../assets/cpe-logo.png";
import kmuttLogo from "../assets/kmutt-logo.png";
import policeLogo from "../assets/police-logo.png";

// src/pages/Registration.js
const RegistrationForm = () => {
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
                <h1 className="max-w-2xl mb-4 text-2xl font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-5xl ">
                  Cyber
                </h1>
                <h1 className="max-w-2xl mb-4 text-2xl font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-5xl ">
                  Warrior
                </h1>
                <h1 className="max-w-2xl mb-4 text-2xl font-normal uppercase tracking-tight leading-none  md:text-5xl xl:text-4xl ">
                  Hackathon
                </h1>
                <h1 className="max-w-2xl mb-0 text-2xl text-right font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-5xl ">
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
                  ข้อมูลผู้สมัคร
                </h1>
              </div>
            </div>
          </div>

          {/* Centered Orange Line */}
          <div className="flex justify-center lg:col-span-12 pt-4">
            <span className="block w-[120px] h-[3px] bg-orange-500"></span>
          </div>

          <div className="w-full place-self-start lg:col-span-12 px-[3rem] py-[2rem]">
            <form className="">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-8 font-thai">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="country"
                      className="block text-md font-medium text-gray-900"
                    >
                      คำนำหน้า
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="border-2 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-lg"
                      >
                        <option>นาย</option>
                        <option>นางสาว</option>
                      </select>
                      {/* <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                /> */}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-md font-medium text-gray-900"
                    >
                      ชื่อ
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="border-2  block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-md font-medium text-gray-900"
                    >
                      นามสกุล
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="border-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-md font-medium text-gray-900"
                    >
                      คำนำหน้า
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="border-2 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-lg"
                      >
                        <option>นาย</option>
                        <option>นางสาว</option>
                      </select>
                      {/* <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                /> */}
                    </div>
                  </div>
                  <div className="col-span-5">
                    <label
                      htmlFor="last-name"
                      className="block text-md font-medium text-gray-900"
                    >
                      สถานศึกษา
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="border-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="col-span-8">
                    <label
                      htmlFor="last-name"
                      className="block text-md font-medium text-gray-900"
                    >
                      สังกัด : สังกัดปัจจุบันที่ทำงาน หรือ เรียนอยู่
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="border-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="col-span-5">
                    <label
                      htmlFor="last-name"
                      className="block text-md font-medium text-gray-900"
                    >
                      ที่อยู่
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="border-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-md font-medium text-gray-900"
                    >
                      ประเทศ
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="border-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="col-span-8">
                    <h2 className="text-base/7 font-semibold text-gray-900">
                      Personal Information
                    </h2>
                  </div>

                  <div className="col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-md font-medium text-gray-900"
                    >
                      เบอร์โทรศัพท์
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="border-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="col-span-5">
                    <h2 className="text-base/7 font-semibold text-gray-900"></h2>
                    <label
                      htmlFor="last-name"
                      className="block text-md font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="border-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
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
                  บันทึกข้อมูล
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mx-auto max-w-screen-sm px-4 py-8">
          <div className="bg-white rounded-3xl grid grid-cols-2 gap-8 text-gray-500 md:grid-cols-3 ">
            <button className="inline-flex items-center px-8 py-3 gap-4 flex-shrink-0 justify-center hover:text-gray-900 ">
              <img src={policeLogo} alt="Police Logo" />
            </button>

            <button className="inline-flex items-center px-8 py-3 gap-4 flex-shrink-0 justify-center hover:text-gray-900 ">
              <img src={kmuttLogo} alt="KMUTT Logo" />
            </button>

            <button className="inline-flex items-center px-8 py-3 gap-4 flex-shrink-0 justify-center hover:text-gray-900 ">
              <img src={cpeLogo} alt="CPE Logo" />
            </button>
          </div>
        </div>
      </section>

      <section className="h-50 py-20"></section>
    </div>
  );
};

export default RegistrationForm;
