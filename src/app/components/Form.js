"use client";

import React, { useState } from "react";
import { useRouter } from "next/router"; // Import Next.js router
import Link from "next/link"; //

// components/TeamMemberForm.js
export default function TeamMemberForm({ index }) {
  const memberNum = index + 1;

  const handleFileChange = (e, targetId) => {
    const fileName = e.target.files[0]?.name || "ยังไม่ได้เลือกไฟล์";
    document.getElementById(targetId).textContent = fileName;
  };

  const FileUpload = ({ label, id, optional }) => (
    <div>
      <label className="block mb-2 text-lg font-medium text-gray-900">
        {label}
        {optional && <span className="text-gray-500"> (optional)</span>}
        {!optional && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center gap-4">
        <div className="flex-[4]">
          <input
            id={`fileInput-${id}-${memberNum}`}
            type="file"
            className="hidden"
            onChange={(e) => handleFileChange(e, `fileName-${id}-${memberNum}`)}
          />
          <div
            id={`fileName-${id}-${memberNum}`}
            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 px-4 py-2.5"
          >
            ยังไม่ได้เลือกไฟล์
          </div>
        </div>
        <div className="flex-[1]">
          <button
            type="button"
            onClick={() =>
              document.getElementById(`fileInput-${id}-${memberNum}`).click()
            }
            className="flex w-full px-4 py-2 justify-center items-center gap-2 rounded-[12px] border-2 text-blue-500 text-md font-bold border-blue-500"
          >
            Browse
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 pb-4">
        สมาชิกคนที่ {memberNum}
      </h3>

      <div className="border border-gray-300 p-6 rounded-xl space-y-4">
        {/* Personal Info */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2">
            <label className="block mb-2 text-lg font-medium text-gray-900">
              คำนำหน้า
            </label>
            <select className="w-full border text-black border-gray-300 text-lg rounded-lg p-2.5">
              <option>นาย</option>
              <option>นางสาว</option>
            </select>
          </div>
          <div className="col-span-5">
            <label className="block mb-2 text-lg font-medium text-gray-900">
              ชื่อ
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
              placeholder="ชื่อ"
            />
          </div>
          <div className="col-span-5">
            <label className="block mb-2 text-lg font-medium text-gray-900">
              นามสกุล
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
              placeholder="นามสกุล"
            />
          </div>
        </div>

        {/* Education */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <label className="block mb-2 text-lg font-medium text-gray-900">
              ระดับการศึกษาปัจจุบัน
            </label>
            <select className="w-full text-black border border-gray-300 text-lg rounded-lg p-2.5">
              <option>ปริญญาตรี</option>
              <option>ปริญญาโท</option>
            </select>
          </div>
          <div className="col-span-8">
            <label className="block mb-2 text-lg font-medium text-gray-900">
              สาขาวิชา
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
              placeholder="เช่น วิทยาการคอมพิวเตอร์"
            />
          </div>
        </div>

        {/* Org */}
        <div>
          <label className="block mb-2 text-lg font-medium text-gray-900">
            ชื่อหน่วยงาน/องค์กร/หรือสถาบันการศึกษา
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900">
              E-mail
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900">
              เบอร์โทรติดต่อ
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
              placeholder="08xxxxxxxx"
            />
          </div>
        </div>

        {/* Files Section */}
        <div className="p-4 space-y-5">
          <h3 className="text-lg font-semibold text-gray-700">
            เอกสารประกอบการสมัคร
          </h3>
          <FileUpload id="studentId" label="สำเนาบัตร Student ID" />
          <FileUpload
            id="studentCert"
            label="เอกสารรับรองสถานะนักศึกษา (สำหรับผู้สมัครที่ไม่ใช่นิสิต/นักศึกษา)"
          />
          <FileUpload
            id="advisorLetter"
            label="หนังสือยินยอมจากอาจารย์ที่ปรึกษา"
            optional
          />
          <h3 className="text-lg font-semibold text-gray-700">
            กรุณาแนบ GitHub/Resume/ผลงานที่เกี่ยวข้อง
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900">
                GitHub
              </label>
              <input
                type="url"
                className="w-full border border-gray-300 text-lg rounded-lg p-2.5"
                placeholder="https://github.com/..."
              />
            </div>
            <FileUpload id="resume" label="Resume / ผลงาน (อัปโหลดไฟล์)" />
          </div>
        </div>
      </div>
    </div>
  );
}
