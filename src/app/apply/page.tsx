"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // App Router

import backgroundImg from "../assets/background.png";
import cpeLogo from "../assets/cpe-logo.png";
import kmuttLogo from "../assets/kmutt-logo.png";
import kmuttLogo2 from "../assets/kmutt-logo-02.png";
import policeLogo from "../assets/police-logo.png";
import policeLogo2 from "../assets/police-logo-02.png";
import sponsorlogo from "../assets/sponsor-logo.png";
import cyberlogo from "../assets/cyber-logo.png";

import TeamMemberForm from "../components/Form";

const ApplyPage: React.FC = () => {
  // Modal visibility state
  const [showModal, setShowModal] = useState(true); // Main form modal
  const [showThankYouModal, setShowThankYouModal] = useState(false); // "Thank You" modal
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAccept = () => {
    setAcceptedTerms(true);
    setShowModal(false); // Close modal when user accepts
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // After successful form submission, show the "Thank You" modal
    setSubmitted(true); // Track submission
    setShowModal(false); // Hide the main form modal
    setShowThankYouModal(true); // Show the "Thank You" modal
  };

  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  const memberCount = 5;

  // Section: หัวข้อที่สนใจ
  const interestItems = [
    {
      id: 1,
      label: "ระบบตรวจสอบธุรกรรมต้องสงสัย",
      value: "suspicious_transactions",
    },
    { id: 2, label: "ระบบเตือนภัยบัญชีม้า", value: "mule_alert_system" },
    {
      id: 3,
      label: "Dashboard วิเคราะห์ความผิดปกติในเครือข่าย",
      value: "network_anomaly_dashboard",
    },
    { id: 4, label: "OSINT investigation tools", value: "osint_tools" },
    { id: 5, label: "อื่น ๆ", value: "others_interest" },
  ];

  // Section: ความเชี่ยวชาญ
  const expertiseItems = [
    { id: 1, label: "Cybersecurity", value: "cybersecurity" },
    {
      id: 2,
      label: "Ethical Hacking / Penetration Testing",
      value: "ethical_hacking",
    },
    { id: 3, label: "Programming (Python, JS, etc.)", value: "programming" },
    { id: 4, label: "AI / Machine Learning", value: "ai_ml" },
    { id: 5, label: "Blockchain / Web3", value: "blockchain" },
    { id: 6, label: "Cloud / DevOps", value: "cloud_devops" },
    { id: 7, label: "อื่นๆ", value: "others_expertise" },
  ];

  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

  const handleToggle = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  return (
    <>
      {/* Modal Popup */}
      {showModal && (
        <div
          className="w-full min-h-screen bg-cover bg-initial bg-no-repeat "
          style={{
            backgroundImage: `url(${backgroundImg.src})`,
          }}
        >
          <section className="text-white">
            <div className="grid w-full justify-center md:max-w-screen-xl px-8 md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[2rem]">
              <div className=" place-self-center ">
                <div className="grid gap-8" style={{ fontFamily: "Gabarito" }}>
                  <div>
                    <button
                      className="inline-flex items-center justify-center hover:text-gray-900 dark:hover:text-white"
                      style={{
                        backgroundImage: `url(${cyberlogo.src})`, // Using sponsorlogo.src for background image
                        backgroundSize: "contain", // Ensures the image fits within the container
                        backgroundRepeat: "no-repeat", // Prevents image repetition
                        backgroundPosition: "center", // Centers the image
                        height: "240px", // Adjust the height as needed
                        width: "240px", // Adjust the width as needed
                      }}
                    >
                      {/* You can keep the button content if needed, otherwise just leave the background image */}
                      <span className="sr-only">Sponsor Logo</span>{" "}
                      {/* Hidden text for accessibility */}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="max-w-2xl text-[1.6rem] mb-4 font-thai text-center font-bold uppercase tracking-tight leading-none md:text-3xl xl:text-3xl">
                  สมัครเข้าร่วมการแข่งขัน
                </h4>
              </div>
            </div>
          </section>

          <section className="text-white  md:m-0">
            <form className="mgrid w-full justify-center md:max-w-screen-xl p-[2rem] md:p-[3rem] md:pt-[2rem] mx-auto lg:gap-8  bg-white rounded-2xl shadow-lg">
              <div className="grid items-center mb-6">
                <div className="grid grid-cols-3 items-center mb-6">
                  {/* Left Column */}
                  <div className="flex items-center space-x-2 justify-start"></div>

                  {/* Center Column */}
                  <div className="col-span-1 text-center">
                    <span className="text-black text-xl md:text-2xl font-bold font-thai pb-2 border-b-3 border-orange-500">
                      ข้อมูลผู้สมัคร
                    </span>
                  </div>

                  {/* Right Column (Empty for spacing) */}
                  <div></div>
                </div>
                <div className="text-black space-y-5 pt-4 md:pt-8">
                  <p className="text-lg mb-4">
                    ผู้สมัครและผู้เข้าร่วมโครงการตกลงและรับทราบว่าการเก็บรวบรวม
                    ใช้ และเปิดเผยข้อมูลส่วนบุคคลดังกล่าวข้างต้นเป็นไป
                    เพื่อวัตถุประสงค์ ดังต่อไปนี้
                    <br />
                    <br></br>
                    ก. เพื่อจัดทำฐานข้อมูลของผู้สมัครและผู้เข้าร่วมโครงการ
                    <br />
                    ข.
                    เพื่อใช้ในการติดต่อสื่อสารทั้งในระหว่างและภายหลังจากการเข้าร่วมโครงการ
                    <br />
                    ค. เพื่อแจ้งข้อมูลข่าวสารและเสนอสิทธิประโยชน์ต่างๆ
                    ของโครงการ
                    <br />
                    ง.
                    เพื่อวิเคราะห์และประมวลข้อมูลเชิงสถิติของผู้สมัครและผู้เข้าร่วมโครงการ
                    <br />
                    จ. เพื่อใช้ในการเผยแพร่ โฆษณา/ประชาสัมพันธ์บนหนังสือ เอกสาร
                    เว็บไซต์ หรือ ช่องทางการสื่อสารต่าง ๆ ของบริษัท ผู้จัดงาน
                    องค์กรพันธมิตร สื่อมวลชน และ/หรือโซเชียลมีเดีย
                  </p>
                  <br></br>
                  <div className="flex justify-center">
                    <label className="flex items-center text-lg font-thai text-black">
                      <input
                        type="checkbox"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="peer hidden"
                      />
                      <span className="w-6 h-6 border border-[#0032D2] rounded-sm mr-3 flex items-center justify-center text-[#0032D2] text-sm peer-checked:before:content-['✓'] peer-checked:before:text-[#0032D2] peer-checked:before:font-bold"></span>
                      ข้าพเจ้าขอยินยอมปฏิบัติตามเงื่อนไขการแข่งขัน
                    </label>
                  </div>

                  <div className="col-span-1 text-center mt-[2rem]">
                    {/* Orange border line */}
                    <div className="mx-auto w-[120px] border-t-3 border-orange-500 mb-4"></div>

                    {/* Button */}
                    <span className="text-black text-xl md:text-xl font-bold font-thai">
                      <div className="flex justify-center mt-4">
                        <button
                          onClick={handleAccept}
                          className={`px-6 py-2 font-bold ${
                            acceptedTerms ? "text-orange-500" : "text-gray-400"
                          } font-bold border-2 ${
                            acceptedTerms
                              ? "border-orange-500"
                              : "border-gray-400"
                          } rounded-[2rem]`}
                          disabled={!acceptedTerms}
                        >
                          สมัครเข้าร่วมกิจกรรม
                        </button>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      )}

      {!showModal && !showThankYouModal && (
        <div
          className="w-full min-h-screen bg-cover bg-initial bg-no-repeat "
          style={{
            backgroundImage: `url(${backgroundImg.src})`,
          }}
        >
          <section className="text-white">
            <div className="grid w-full justify-center md:max-w-screen-xl px-8 md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[2rem]">
              <div className=" place-self-center ">
                <div className="grid gap-8" style={{ fontFamily: "Gabarito" }}>
                  <div>
                    <button
                      className="inline-flex items-center justify-center hover:text-gray-900 dark:hover:text-white"
                      style={{
                        backgroundImage: `url(${cyberlogo.src})`, // Using sponsorlogo.src for background image
                        backgroundSize: "contain", // Ensures the image fits within the container
                        backgroundRepeat: "no-repeat", // Prevents image repetition
                        backgroundPosition: "center", // Centers the image
                        height: "240px", // Adjust the height as needed
                        width: "240px", // Adjust the width as needed
                      }}
                    >
                      {/* You can keep the button content if needed, otherwise just leave the background image */}
                      <span className="sr-only">Sponsor Logo</span>{" "}
                      {/* Hidden text for accessibility */}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="max-w-2xl text-[1.6rem] mb-4 font-thai text-center font-bold uppercase tracking-tight leading-none md:text-3xl xl:text-3xl">
                  สมัครเข้าร่วมการแข่งขัน
                </h4>
              </div>
            </div>
          </section>

          <section className="text-white  md:m-0">
            <form className="mgrid w-full justify-center md:max-w-screen-xl p-[2rem] md:p-[3rem] md:pt-[2rem] mx-auto lg:gap-8  bg-white rounded-2xl shadow-lg">
              <div className="grid grid-cols-3 items-center mb-6">
                {/* Left Column */}
                <div
                  className="flex items-center space-x-2 justify-start cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#FF4C00"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="text-[#FF4C00] text-lg font-medium font-thai">
                    เงื่อนไขการสมัคร
                  </span>
                </div>

                {/* Center Column */}
                <div className="col-span-1 text-center">
                  <span className="text-black text-xl md:text-2xl font-bold font-thai pb-2 border-b-3 border-orange-500">
                    ข้อมูลผู้สมัคร
                  </span>
                </div>

                {/* Right Column (Empty for spacing) */}
                <div></div>
              </div>

              <div className="space-y-5 pt-4 md:pt-8">
                {/* ข้อมูลทีม */}
                <div className="flex items-center pt-2">
                  <label className="text-lg font-bold text-gray-900 whitespace-nowrap mr-4 flex-shrink-0">
                    ข้อมูลทีม
                  </label>
                  <div className="flex-grow h-px bg-blue-600" />
                </div>

                {/* Team Name */}
                <div>
                  <label className="block mb-2 text-lg font-medium text-gray-900">
                    ชื่อทีม
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="กรอกชื่อทีม"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-700">
                  สมาชิกในทีม
                </h3>
                {/* Member  */}
                <div className="mb-0">
                  {[...Array(memberCount)].map((_, idx) => (
                    <TeamMemberForm key={idx} index={idx} />
                  ))}
                </div>

                {/*   ข้อมูลโครงการ */}
                {/*  ข้อมูลความเชี่ยวชาญ */}
                <div className="flex items-center pt-2">
                  <label className="text-lg font-bold text-gray-900 whitespace-nowrap mr-4 flex-shrink-0">
                    ข้อมูลโครงการ
                  </label>
                  <div className="flex-grow h-px bg-blue-600" />
                </div>

                <div>
                  <label className="block mb-2 text-lg font-bold text-gray-900">
                    หัวข้อที่สนใจ (เลือกได้มากกว่า 1 ข้อ)
                  </label>
                  <div className="space-y-2 pt-2">
                    {interestItems.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          value={item.value}
                          checked={selectedInterest.includes(item.value)}
                          onChange={() =>
                            handleToggle(
                              item.value,
                              selectedInterest,
                              setSelectedInterest
                            )
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-lg text-black">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* แรงบันดาลใจ  */}
                <div>
                  <label className="block mb-2 text-lg font-bold text-gray-900">
                    แรงบันดาลใจและเป้าหมายในการเข้าร่วมการแข่งขัน
                  </label>
                  <p className="text-lg text-gray-500 mb-2">
                    (ความยาวไม่เกิน 300 คำ)
                  </p>
                  <div
                    className="flex flex-col items-start w-full"
                    style={{ maxHeight: "300px" }}
                  >
                    <textarea
                      name="inspiration"
                      rows={10}
                      maxLength={300 * 6} // approx. 300 Thai words ~1800 characters
                      className="w-full border border-gray-300 rounded-xl  resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="เขียนแรงบันดาลใจของคุณที่นี่..."
                    />
                  </div>
                </div>

                {/*  ข้อมูลความเชี่ยวชาญ */}
                <div className="flex items-center pt-2">
                  <label className="text-lg font-bold text-gray-900 whitespace-nowrap mr-4 flex-shrink-0">
                    ข้อมูลความเชี่ยวชาญ
                  </label>
                  <div className="flex-grow h-px bg-blue-600" />
                </div>

                <div>
                  <label className="block mb-2 text-lg font-bold text-gray-900">
                    ความเชี่ยวชาญหรือประสบการณ์ความสามารถทางด้านไซเบอร์หรือเทคโนโลยี
                  </label>
                  <div className="space-y-2 pt-2">
                    {expertiseItems.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          value={item.value}
                          checked={selectedExpertise.includes(item.value)}
                          onChange={() =>
                            handleToggle(
                              item.value,
                              selectedExpertise,
                              setSelectedExpertise
                            )
                          }
                          className="w-4 h-4 pr-4"
                        />
                        <span className="text-lg text-black">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* ความคาดหวัง */}
                <div>
                  <div className="flex items-center mb-4">
                    <label className="text-lg font-bold text-gray-900 whitespace-nowrap mr-4 flex-shrink-0">
                      ความคาดหวังจากกิจกรรมนี้
                    </label>
                    <div className="flex-grow h-px bg-blue-600" />
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    เช่น: อยากได้เครือข่าย / อยากพัฒนาทักษะ /
                    อยากทำงานร่วมกับหน่วยงานด้านความมั่นคง /
                    อยากพัฒนาเป็นโปรดักต์จริง (ความยาวไม่เกิน 100 คำ)
                  </p>
                  <div
                    className="flex flex-col items-start w-full"
                    style={{ maxHeight: "200px" }}
                  >
                    <textarea
                      name="inspiration"
                      rows={10}
                      maxLength={100 * 6}
                      className="w-full border border-gray-300 rounded-xl  resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="เขียนแรงบันดาลใจของคุณที่นี่..."
                    />
                  </div>
                </div>

                {/* Submit Button  */}
                <div className="grid grid-cols-3 items-center mb-6 pt-8">
                  {/* Left Column */}
                  <div className="flex items-center space-x-2 justify-start"></div>

                  <div className="col-span-1 text-center">
                    <span className="text-black text-xl md:text-xl font-bold font-thai pt-[1.5rem] border-t-3 border-orange-500">
                      {/* Ensure that form is only once here */}
                      <div className="pt-6 border-t-4 border-orange-500">
                        <button
                          type="submit"
                          onClick={handleSubmit} // Ensuring the submit logic is handled on button click
                          className="px-6 py-2 font-bold text-transparent border-2 border-blue-700 bg-clip-text bg-gradient-to-r from-[#0032D2] to-[#FF4C00] rounded-[12px] gradient-border"
                        >
                          ส่งใบสมัคร
                        </button>
                      </div>
                    </span>
                  </div>

                  {/* Right Column (Empty for spacing) */}
                  <div></div>
                </div>
              </div>
            </form>

            <div className="max-w-screen-sm mx-[4rem] md:mx-auto md:max-w-screen-md mt-[3rem] p-[2rem]  md:pt-[2rem]  bg-white rounded-3xl grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-4 text-gray-500 dark:text-gray-400 ">
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
          </section>

          <section className="h-20 md:h-50 py-10"></section>
        </div>
      )}

      {/* Thank you modal */}
      {showThankYouModal && (
        <div
          className="w-full min-h-screen bg-cover bg-initial bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImg.src})`,
          }}
        >
          <section className="text-white">
            <div className="grid w-full justify-center md:max-w-screen-xl px-8 md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[2rem]">
              <div className="place-self-center">
                <div className="grid gap-8" style={{ fontFamily: "Gabarito" }}>
                  <div>
                    <button
                      className="inline-flex items-center justify-center hover:text-gray-900 dark:hover:text-white"
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
                <h4 className="max-w-2xl text-[1.6rem] mb-4 font-thai text-center font-bold uppercase tracking-tight leading-none md:text-3xl xl:text-3xl">
                  ขอบคุณที่เข้าร่วมการแข่งขัน
                </h4>
              </div>
            </div>
          </section>

          <section className="text-white md:m-0">
            <form className="mgrid w-full justify-center md:max-w-screen-xl p-[2rem] md:p-[3rem] md:pt-[2rem] mx-auto lg:gap-8 bg-white rounded-2xl shadow-lg">
              <div className="grid items-center mb-6">
                <div className="grid grid-cols-3 items-center mb-6">
                  <div className="flex items-center space-x-2 justify-start"></div>
                  <div className="col-span-1 text-center">
                    <span className="text-black text-xl md:text-2xl font-bold font-thai pb-2 border-b-3 border-orange-500">
                      เราได้รับแบบฟอร์มของคุณแล้ว
                    </span>
                  </div>
                  <div></div>
                </div>
                <section
                  className="text-white pt-8 md:pt-12 px-10 md:px-4"
                  id="contact"
                >
                  <div className="grid max-w-screen-xl py-2 mx-auto lg:gap-4 justify-center md:justify-start">
                    <div className="relative rounded-xl border-l-2 border-r-2 border-white  gap-2 max-w-fit px-4 md:px-4 py-4 ml-0 md:gap-8">
                      {/* Left Column */}
                      <div className="flex flex-col items-start justify-start gap-4 text-black">
                        <h4 className="text-md font-thai text-start font-bold uppercase tracking-tight leading-none md:text-xl">
                          สอบถามข้อมูลเพิ่มเติม
                        </h4>
                        <h4 className="text-md md:font-bold tracking-tight leading-none md:text-xl">
                          E-mail:
                          <a
                            href="mailto:cyberwarrior2025@kmutt.ac.th"
                            className="text-blue-400 pl-2 pt-2 hover:underline"
                          >
                            cyberwarrior2025@kmutt.ac.th
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="text-black space-y-5 pt-4 md:pt-8">
                  <div className="col-span-1 text-center mt-[2rem]">
                    <div className="mx-auto w-[120px] border-t-[3px] border-orange-500 mb-4"></div>

                    <div className="flex justify-center mt-4">
                      <button
                        onClick={handleGoHome}
                        className={`px-6 py-2 font-bold ${
                          acceptedTerms ? "text-orange-500" : "text-gray-400"
                        } border-2 ${
                          acceptedTerms
                            ? "border-orange-500"
                            : "border-gray-400"
                        } rounded-[2rem]`}
                        disabled={!acceptedTerms}
                      >
                        กลับหน้าหลัก
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default ApplyPage;
