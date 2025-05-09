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
  const [teamName, setTeamName] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [expectation, setExpectation] = useState("");

  // Section: หัวข้อที่สนใจ
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [otherInterest, setOtherInterest] = useState("");
  const [otherExpertise, setOtherExpertise] = useState("");

  const interestItems = [
    {
      id: 1,
      label: "ระบบตรวจสอบธุรกรรมต้องสงสัย",
      value: "ระบบตรวจสอบธุรกรรมต้องสงสัย",
    },
    {
      id: 2,
      label: "ระบบเตือนภัยบัญชีม้า",
      value: "ระบบเตือนภัยบัญชีม้า",
    },
    {
      id: 3,
      label: "Dashboard วิเคราะห์ความผิดปกติในเครือข่าย",
      value: "Dashboard วิเคราะห์ความผิดปกติในเครือข่าย",
    },
    {
      id: 4,
      label: "OSINT investigation tools",
      value: "OSINT investigation tools",
    },
    {
      id: 5,
      label: "อื่น ๆ",
      value: "อื่น ๆ",
    },
  ];

  // Section: ความเชี่ยวชาญ
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const expertiseItems = [
    { id: 1, label: "Cybersecurity", value: "Cybersecurity" },
    {
      id: 2,
      label: "Ethical Hacking / Penetration Testing",
      value: "Ethical Hacking / Penetration Testing",
    },
    {
      id: 3,
      label: "Programming (Python, JS, etc.)",
      value: "Programming (Python, JS, etc.)",
    },
    { id: 4, label: "AI / Machine Learning", value: "AI / Machine Learning" },
    { id: 5, label: "Blockchain / Web3", value: "Blockchain / Web3" },
    { id: 6, label: "Cloud / DevOps", value: "Cloud / DevOps" },
    { id: 7, label: "อื่นๆ", value: "อื่นๆ" },
  ];

  // const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // Validate required fields
  //   if (
  //     !teamName ||
  //     !inspiration ||
  //     !expectation ||
  //     selectedInterest.length === 0 ||
  //     selectedExpertise.length === 0
  //   ) {
  //     alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  //     return;
  //   }

  //   // ✅ Format interest before submission
  // const formattedInterests = selectedInterest.map((item) =>
  //   item === "อื่น ๆ" ? otherInterest.trim() : item
  // );

  //   // Validate required fields for each team member
  //   const memberErrors = members.some((member) => {
  //     return (
  //       !member.name ||
  //       !member.studentId ||
  //       !member.studentCert ||
  //       !member.email ||
  //       !member.phone
  //     );
  //   });

  //   if (memberErrors) {
  //     alert("กรุณากรอกข้อมูลสมาชิกทีมให้ครบถ้วน"); // "Please complete the team member details."
  //     return;
  //   }

  //   const data = {
  //     data: {
  //       teamName,
  //       inspiration,
  //       expectation,
  //       interests: selectedInterest.join(",\n"),
  //       expertises: selectedExpertise.join(",\n"),
  //       members: members.map((member) => ({
  //         ...member,
  //         studentId: member.studentId?.id || null,
  //         studentCert: member.studentCert?.id || null,
  //         resume: member.resume?.id || null,
  //         advisorLetter: member.advisorLetter?.id || null,
  //       })),
  //     },
  //   };

  //   try {
  //     const response = await fetch(
  //       "https://cyberwarrior2025.io/api/forms?&populate=members.studentId&populate=members.studentCert&populate=members.resume&populate=members.advisorLetter",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );

  //     const result = await response.json();
  //     console.log("✅ Submitted:", result);
  //     alert("ส่งข้อมูลเรียบร้อยแล้ว");

  //     // Show "Thank You" modal after successful form submission
  //     setShowModal(false); // Close the main form modal
  //     setShowThankYouModal(true); // Show the "Thank You" modal
  //   } catch (error) {
  //     console.error("❌ Error submitting:", error);
  //     alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
  //   }
  // };

  //     data: {
  //       teamName,
  //       inspiration,
  //       expectation,
  //       interests: selectedInterest.join(","),
  //       expertises: selectedExpertise.join(","),
  //       members: members.map((member) => ({
  //         ...member,
  //         studentId: member.studentId?.id || null,
  //         studentCert: member.studentCert?.id || null,
  //         resume: member.resume?.id || null,
  //         advisorLetter: member.advisorLetter?.id || null,
  //       })),
  //     },
  //   };

  //   try {
  //     const response = await fetch(
  //       "https://cyberwarrior2025.io/api/forms?&populate=members.studentId&populate=members.studentCert&populate=members.resume&populate=members.advisorLetter",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );

  //     const result = await response.json();
  //     console.log("✅ Submitted:", result);
  //     alert("ส่งข้อมูลเรียบร้อยแล้ว");
  //   } catch (error) {
  //     console.error("❌ Error submitting:", error);
  //     alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
  //   }
  // };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (
      !teamName ||
      !inspiration ||
      !expectation ||
      selectedInterest.length === 0 ||
      selectedExpertise.length === 0
    ) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // Validate members
    const memberErrors = members.some((member) => {
      return (
        !member.name ||
        !member.studentId ||
        !member.studentCert ||
        !member.email ||
        !member.phone
      );
    });

    if (memberErrors) {
      alert("กรุณากรอกข้อมูลสมาชิกทีมให้ครบถ้วน");
      return;
    }

    // ✅ Replace "อื่น ๆ" with user input
    const formattedInterests = selectedInterest.map((item) =>
      item === "อื่น ๆ" ? otherInterest.trim() : item
    );

    const formattedExpertises = selectedExpertise.map((item) =>
      item === "อื่นๆ" ? otherExpertise.trim() : item
    );

    const data = {
      data: {
        teamName,
        inspiration,
        expectation,
        interests: formattedInterests.join(",\n"),
        expertises: selectedExpertise.join(",\n"),
        members: members.map((member) => ({
          ...member,
          studentId: member.studentId?.id || null,
          studentCert: member.studentCert?.id || null,
          resume: member.resume?.id || null,
          advisorLetter: member.advisorLetter?.id || null,
        })),
      },
    };

    try {
      const response = await fetch(
        "https://cyberwarrior2025.io/api/forms?...",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      alert("ส่งข้อมูลเรียบร้อยแล้ว");
      setShowModal(false);
      setShowThankYouModal(true);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
    }
  };

  const [members, setMembers] = useState([
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ]);

  const handleMemberChange = (index: number, data: any) => {
    const updated = [...members];

    const uploadFile = async (file: File) => {
      const formData = new FormData();
      formData.append("files", file);
      const res = await fetch("https://cyberwarrior2025.io/api/upload", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      return result[0];
    };

    const updateMember = async () => {
      if (data.studentIdFile) {
        const studentIdUploaded = await uploadFile(data.studentIdFile);
        updated[index] = { ...updated[index], studentId: studentIdUploaded };
      }
      if (data.studentCertFile) {
        const studentCertUploaded = await uploadFile(data.studentCertFile);
        updated[index] = {
          ...updated[index],
          studentCert: studentCertUploaded,
        };
      }
      if (data.resumeFile) {
        const resumeUploaded = await uploadFile(data.resumeFile);
        updated[index] = {
          ...updated[index],
          resume: resumeUploaded,
        };
      }
      if (data.advisorLetterFile) {
        const advisorLetterUploaded = await uploadFile(data.advisorLetterFile);
        updated[index] = {
          ...updated[index],
          advisorLetter: advisorLetterUploaded,
        };
      }

      // Update other fields
      updated[index] = { ...updated[index], ...data };
      setMembers(updated);
    };

    updateMember().catch((error) => console.error("❌ Upload error:", error));
  };

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

  const handleToggle = (
    value: string,
    selectedList: string[],
    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((item) => item !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  // 300 คำ หรือ 2000 ตัวอักษร

  const maxWords = 2000;
  const maxChars = 2000;

  // Function to handle the input change and count words/characters
  const handleChange = (e) => {
    let text = e.target.value;

    // Count characters
    const charCount = text.length;

    // Count "words" as characters without spaces (for Thai language)
    const words = text.trim().replace(/\s+/g, "").length;

    // Limit to 300 words (characters for this approach)
    if (words > maxWords) {
      text = text.slice(0, maxWords);
    }

    // Limit to 1800 characters
    if (charCount > maxChars) {
      text = text.slice(0, maxChars);
    }

    setInspiration(text);
  };

  // Count words (characters without spaces) and characters
  const wordCount = inspiration.trim().replace(/\s+/g, "").length;
  const charCount = inspiration.length;

  const maxExpectationChars = 700;
  const maxExpectationWords = 700;
  // const maxExpectationChars = 700;

  const handleExpectationChange = (e) => {
    let text = e.target.value;

    const words = text.trim().replace(/\s+/g, "").length; // "Words" = non-space characters
    const chars = text.length;

    // Limit to 100 "words" (characters without spaces)
    if (words > maxExpectationWords) {
      text = text.replace(/\s+/g, "").slice(0, maxExpectationWords);
    }

    // Limit to 700 characters
    if (chars > maxExpectationChars) {
      text = text.slice(0, maxExpectationChars);
    }

    setExpectation(text);
  };

  const expectationWordCount = expectation.trim().replace(/\s+/g, "").length;
  const expectationCharCount = expectation.length;

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
                      ข้อกำหนดและเงื่อนไขในการแข่งขัน
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
                    <br></br>
                    <br></br>
                    1. เพื่อจัดทำฐานข้อมูลของผู้สมัครและผู้เข้าร่วมโครงการ
                    เพื่อวัตถุประสงค์ ดังต่อไปนี้
                    <br></br>
                    2.
                    เพื่อใช้ในการติดต่อสื่อสารทั้งในระหว่างและภายหลังจากการเข้าร่วมโครงการ
                    เพื่อวัตถุประสงค์ ดังต่อไปนี้
                    <br></br>
                    3. เพื่อแจ้งข้อมูลข่าวสารและเสนอสิทธิประโยชน์ต่างๆ
                    ของโครงการ เพื่อวัตถุประสงค์ ดังต่อไปนี้
                    <br></br>
                    4.
                    เพื่อวิเคราะห์และประมวลข้อมูลเชิงสถิติของผู้สมัครและผู้เข้าร่วมโครงการ
                    เพื่อวัตถุประสงค์ ดังต่อไปนี้
                    <br></br>
                    5. เพื่อใช้ในการเผยแพร่ โฆษณา/ประชาสัมพันธ์บนหนังสือ เอกสาร
                    เว็บไซต์ หรือ ช่องทางการสื่อสารต่าง ๆ ของผู้จัดงาน
                    องค์กรพันธมิตร สื่อมวลชน และ/หรือโซเชียลมีเดีย
                    ทั้งนี้รวมถึงขออนุญาตใช้ภาพ เสียง
                    และวิดิโอในการประชาสัมพันธ์ เพื่อวัตถุประสงค์ ดังต่อไปนี้
                    <br></br>
                    6. เพื่อใช้ข้อมูลติดต่อของผู้สมัครเพื่อลงทะเบียนในระบบสมาชิก
                    oneKMUTT ให้อัตโนมัติ
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
                          className={`cursor-pointer px-6 py-2 font-bold ${
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

            <div className="max-w-screen-sm mx-[4rem] md:mx-auto md:max-w-screen-md mt-[3rem] p-[2rem]  md:pt-[2rem]  bg-white rounded-3xl grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-4 text-gray-500 dark:text-gray-400 ">
              {/* Logo 1 */}
              <button
                className="inline-flex items-center justify-center w-full hover:text-gray-900 dark:hover:text-white"
                style={{
                  backgroundImage: `url(${policeLogo2.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "40px", // Adjust as needed
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
                  height: "40px", // Adjust as needed
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
                  height: "40px", // Adjust as needed
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
                  height: "40px", // Adjust as needed
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
                  height: "40px", // Adjust as needed
                }}
              >
                <span className="sr-only">CPE Logo</span>{" "}
                {/* Hidden for accessibility */}
              </button>
            </div>
          </section>
          <section className="h-20 md:h-60 py-20"></section>
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
                <div className="flex items-center pt-2">
                  <label className="text-lg font-normal text-gray-900 whitespace-nowrap mr-4 flex-shrink-0">
                    This question is required.
                    <span className="text-red-500"> * {""}</span>
                  </label>
                </div>

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
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="กรอกชื่อทีม"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-700">
                  สมาชิกในทีม
                </h3>
                {/* Member  */}
                <div className="mb-0">
                  {members.map((member, index) => (
                    <TeamMemberForm
                      key={index}
                      index={index}
                      onChange={handleMemberChange}
                    />
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

                {/* Interest  */}
                <div>
                  <label className="block mb-2 text-lg font-bold text-gray-900">
                    หัวข้อที่สนใจ (เลือกได้มากกว่า 1 ข้อ)
                  </label>
                  <div className="space-y-2 pt-2">
                    {interestItems.map((item) => (
                      <div
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

                        {item.value === "อื่น ๆ" &&
                          selectedInterest.includes("อื่น ๆ") && (
                            <input
                              type="text"
                              placeholder="โปรดระบุ"
                              value={otherInterest}
                              onChange={(e) => setOtherInterest(e.target.value)}
                              className="ml-2 border border-gray-300 rounded px-2 py-1 text-md w-140 md:ml-10 text-gray-900"
                            />
                          )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* แรงบันดาลใจ  */}
                <div>
                  <label className="block mb-2 text-lg font-bold text-gray-900">
                    แรงบันดาลใจและเป้าหมายในการเข้าร่วมการแข่งขัน
                  </label>
                  <p className="text-md text-gray-500 mb-2">
                    (ความยาวไม่เกิน 300 คำ หรือ 2000 ตัวอักษร)
                  </p>

                  <div
                    className="flex flex-col items-start w-full"
                    style={{ maxHeight: "300px" }}
                  >
                    <textarea
                      name="inspiration"
                      value={inspiration}
                      onChange={handleChange}
                      rows={10}
                      className="w-full text-black border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 p-4"
                    />
                  </div>

                  <p className="text-md text-red-500 mt-4">
                    คำที่เหลือ: {Math.max(maxWords - wordCount, 0)} คำ
                  </p>
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
                          className="w-4 h-4"
                        />
                        <span className="text-lg text-black">{item.label}</span>

                        {/* ✅ Show input next to "อื่นๆ" */}
                        {item.value === "อื่นๆ" &&
                          selectedExpertise.includes("อื่นๆ") && (
                            <input
                              type="text"
                              placeholder="โปรดระบุ"
                              value={otherExpertise}
                              onChange={(e) =>
                                setOtherExpertise(e.target.value)
                              }
                              className="ml-2 border border-gray-300 rounded px-2 py-1 text-md w-140 md:ml-10 text-gray-900"
                            />
                          )}
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
                    อยากพัฒนาเป็นโปรดักต์จริง
                  </p>
                  <span className="text-gray-500 text-md">
                    {" "}
                    (ความยาวไม่เกิน 100 คำ หรือ 700 ตัวอักษร)
                  </span>
                  <div
                    className="flex flex-col items-start w-full mt-2"
                    style={{ maxHeight: "200px" }}
                  >
                    <textarea
                      name="expectation"
                      value={expectation}
                      onChange={handleExpectationChange}
                      rows={10}
                      className="w-full text-black border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 p-4"
                    />
                  </div>

                  <p className="text-md text-red-500 mt-4">
                    คำที่เหลือ:{" "}
                    {Math.max(maxExpectationWords - expectationWordCount, 0)} คำ
                  </p>
                </div>

                {/* Submit Button  */}
                <div className="grid md:grid-cols-3 items-center mb-6 pt-8">
                  <div className="flex items-center space-x-2 justify-start"></div>
                  <div className="col-span-1 text-center">
                    <span className="text-black text-xl md:text-xl font-bold font-thai pt-[1.5rem] border-t-3 border-orange-500">
                      <div className="pt-6 border-t-4 border-orange-500">
                        <button
                          type="submit"
                          onClick={handleSubmitForm}
                          className="px-6 py-2 font-bold text-transparent border-2 border-blue-700 bg-clip-text bg-gradient-to-r from-[#0032D2] to-[#FF4C00] rounded-[12px] gradient-border cursor-pointer"
                        >
                          ส่งข้อมูลใบสมัคร
                        </button>
                      </div>
                    </span>
                  </div>
                  <div></div>
                </div>
                {/* End Submit button  */}
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

          <section className="h-20 md:h-40 py-10"></section>
        </div>
      )}
    </>
  );
};

export default ApplyPage;
