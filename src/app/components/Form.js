"use client";

import React, { useState } from "react";

export default function TeamMemberForm({ index, onChange }) {
  const memberNum = index + 1;
  const [fileName, setFileName] = useState("ยังไม่ได้เลือกไฟล์");
  const [certFileName, setCertFileName] = useState("ยังไม่ได้เลือกไฟล์");
  const [advisorLetterName, setAdvisorLetterName] =
    useState("ยังไม่ได้เลือกไฟล์");
  const [resumeFileName, setResumeFileName] = useState("ยังไม่ได้เลือกไฟล์");

  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes

  const handleChange = (field, value) => {
    onChange(index, { [field]: value });
  };

  const handleFileSizeCheck = (file) => {
    if (file && file.size > MAX_FILE_SIZE) {
      alert("ขนาดไฟล์ไม่สามารถเกิน 2MB ได้");
      return false;
    }
    return true;
  };

  const handleAdvisorLetterChange = (e) => {
    const file = e.target.files?.[0] || null;
    if (file && handleFileSizeCheck(file)) {
      setAdvisorLetterName(file.name);
      handleChange("advisorLetterFile", file);
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0] || null;
    if (file && handleFileSizeCheck(file)) {
      setResumeFileName(file.name);
      handleChange("resumeFile", file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    if (file && handleFileSizeCheck(file)) {
      setFileName(file.name);
      handleChange("studentIdFile", file);
    }
  };

  const handleCertFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    if (file && handleFileSizeCheck(file)) {
      setCertFileName(file.name);
      handleChange("studentCertFile", file);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 pb-4">
        สมาชิกคนที่ {memberNum}
      </h3>

      <div className="border border-gray-300 p-6 rounded-xl space-y-4">
        {/* Personal Info */}
        <div className="grid md:grid-cols-12 gap-4">
          <div className="col-span-2">
            <label className="block mb-2 text-lg font-medium text-gray-900">
              คำนำหน้า
              <span className="text-red-500"> * {""}</span>
            </label>

            <select
              className="w-full border text-black border-gray-300 text-lg rounded-lg p-2.5"
              onChange={(e) => handleChange("prefix", e.target.value)}
              defaultValue=""
              required
            >
              <option value="" disabled>
                เลือก
              </option>
              <option value="mr">นาย</option>
              <option value="ms">นางสาว</option>
            </select>
          </div>
          <div className="col-span-5">
            <label className="block mb-2 text-lg font-medium text-gray-900">
              ชื่อ
              <span className="text-red-500"> * {""}</span>
            </label>
            <input
              type="text"
              className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 px-4 py-2.5"
              placeholder="กรอกชื่อ"
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>
          <div className="col-span-5">
            <label className="block mb-2 text-lg font-medium text-gray-900">
              นามสกุล
              <span className="text-red-500"> * {""}</span>
            </label>
            <input
              type="text"
              className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 px-4 py-2.5"
              placeholder="กรอกนามสกุล"
              onChange={(e) => handleChange("surname", e.target.value)}
              required
            />
          </div>
        </div>

        {/* Education */}
        <div className="grid md:grid-cols-12 gap-4">
          <div className="col-span-4">
            <label className="block mb-2 text-lg font-medium text-gray-900">
              ระดับการศึกษาปัจจุบัน
              <span className="text-red-500"> * {""}</span>
            </label>
            <select
              className="w-full text-black border border-gray-300 text-lg rounded-lg p-2.5"
              onChange={(e) => handleChange("education", e.target.value)}
              defaultValue=""
              required
            >
              <option value="" disabled>
                เลือก
              </option>
              <option value="bachelor">ปริญญาตรี</option>
              <option value="master">ปริญญาโท</option>
            </select>
          </div>
          <div className="col-span-8">
            <label className="block mb-2 text-lg font-medium text-gray-900">
              สาขาวิชา
              <span className="text-red-500"> * {""}</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
              placeholder="เช่น วิทยาการคอมพิวเตอร์"
              onChange={(e) => handleChange("major", e.target.value)}
              required
            />
          </div>
        </div>

        {/* Organization */}
        <div>
          <label className="block mb-2 text-lg font-medium text-gray-900">
            ชื่อหน่วยงาน/องค์กร/หรือสถาบันการศึกษา
            <span className="text-red-500"> * {""}</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
            onChange={(e) => handleChange("organization", e.target.value)}
            required
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900">
              E-mail
              <span className="text-red-500"> * {""}</span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
              placeholder="example@email.com"
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900">
              เบอร์โทรติดต่อ
              <span className="text-red-500"> * {""}</span>
            </label>
            <input
              type="tel"
              inputMode="numeric"
              pattern="\d{10}"
              maxLength={10}
              className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
              placeholder="08xxxxxxxx"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10); // only digits, max 10
                handleChange("phone", e.target.value);
              }}
              required
            />
          </div>
        </div>

        {/* File Upload */}
        <div className="p-4 space-y-5">
          <h3 className="text-lg font-semibold text-gray-700">
            เอกสารประกอบการสมัคร
          </h3>
          {/* สำเนา  */}
          <div>
            <label
              htmlFor={`studentId-${index}`}
              className="block mb-2 text-md font-medium text-gray-900"
            >
              สำเนาบัตร Student ID
              <span className="text-red-500"> * {""}</span>
              <span className="text-gray-500 text-sm">
                (ไฟล์ภาพ .jpg, .png หรือ ไฟล์ PDF ขนาดไม่เกิน 2MB)
              </span>
            </label>
            <div className="flex items-center gap-4">
              <div className="flex-[5]">
                <input
                  type="file"
                  accept="image/*, .pdf"
                  onChange={handleFileChange}
                  id={`studentId-${index}`}
                  className="hidden"
                  required
                />
                <div
                  id={`fileName-studentId-${index}`}
                  className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 px-4 py-2.5"
                >
                  {fileName && fileName.length > 20
                    ? fileName.slice(0, 20) + "..." // Limit to 20 characters and add ellipsis
                    : fileName}
                </div>
              </div>

              <div className="flex-[1]">
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById(`studentId-${index}`).click()
                  }
                  className="flex w-full px-4 py-2 justify-center items-center gap-2 rounded-[12px] border-2 text-blue-700 text-md font-bold border-blue-700"
                >
                  Browse
                </button>
              </div>
            </div>
          </div>

          {/* Student Certificate Upload */}
          <label
            htmlFor={`studentId-${index}`}
            className="block mb-2 text-md font-medium text-gray-900"
          >
            เอกสารรับรองสถานะนักศึกษา (สำหรับผู้สมัครที่ไม่ใช่นิสิต/นักศึกษา)
            <span className="text-red-500"> * {""}</span>
            <span className="text-gray-500 text-sm">
              (ไฟล์ภาพ .jpg, .png หรือ ไฟล์ PDF ขนาดไม่เกิน 2MB)
            </span>
          </label>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex-[5]">
              <input
                type="file"
                accept="image/*, .pdf"
                onChange={handleCertFileChange}
                id={`studentCert-${index}`}
                className="hidden"
                required
              />
              <div
                id={`fileName-studentCert-${index}`}
                className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 px-4 py-2.5"
              >
                {certFileName}
              </div>
            </div>
            <div className="flex-[1]">
              <button
                type="button"
                onClick={() =>
                  document.getElementById(`studentCert-${index}`).click()
                }
                className="flex w-full px-4 py-2 justify-center items-center gap-2 rounded-[12px] border-2 text-blue-700 text-md font-bold border-blue-700"
              >
                Browse
              </button>
            </div>
          </div>

          {/* Advisor Upload  */}
          <label
            htmlFor={`studentId-${index}`}
            className="block mb-2 text-md font-medium text-gray-900"
          >
            หนังสือยินยอมจากอาจารย์ที่ปรึกษา
            <span className="text-gray-500 text-sm">{""} (optional)</span>
          </label>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex-[5]">
              <input
                type="file"
                accept="image/*"
                onChange={handleResumeChange}
                id={`resume-${index}`}
                className="hidden"
              />
              <div
                id={`fileName-resume-${index}`}
                className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 px-4 py-2.5"
              >
                {resumeFileName}
              </div>
            </div>
            <div className="flex-[1]">
              <button
                type="button"
                onClick={() =>
                  document.getElementById(`resume-${index}`).click()
                }
                className="flex w-full px-4 py-2 justify-center items-center gap-2 rounded-[12px] border-2 text-blue-700 text-md font-bold border-blue-700"
              >
                Browse
              </button>
            </div>
          </div>

          {/* Github  */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-md font-medium text-gray-900">
                กรุณาแนบ GitHub/Resume/ผลงานที่เกี่ยวข้อง
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
                onChange={(e) => handleChange("github", e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor={`studentId-${index}`}
                className="block  text-md font-medium text-gray-900"
              >
                หรือ แนบไฟล์ Resume
                <span className="text-gray-500 text-sm">
                  {""} (PDF ขนาดไม่เกิน 2MB)
                </span>
              </label>
              <div className="flex gap-4">
                <div className="flex-[5]">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleAdvisorLetterChange}
                    id={`advisorLetter-${index}`}
                    className="hidden"
                  />
                  <div
                    id={`fileName-advisorLetter-${index}`}
                    className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 px-4 py-2.5"
                  >
                    {advisorLetterName}
                  </div>
                </div>
                <div className="flex-[1]">
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById(`advisorLetter-${index}`).click()
                    }
                    className="flex w-full px-4 py-2 justify-center items-center gap-2 rounded-[12px] border-2 text-blue-700 text-md font-bold border-blue-700"
                  >
                    Browse
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* End  */}
        </div>
      </div>
    </div>
  );
}
