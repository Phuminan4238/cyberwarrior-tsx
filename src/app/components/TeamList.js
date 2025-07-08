"use client";

import React, { useState } from "react";

const teams = [
  {
    teamnumber: "T004",
    team: "404 Not Found",
    university:
      "มหาวิทยาลัยเกษตรศาสตร์, มหาวิทยาลัยธรรมศาสตร์, มหาวิทยาลัยเชียงใหม่, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    teamnumber: "T007",
    team: "ARROW SLAYER",
    university: "โรงเรียนนายร้อยตำรวจ",
  },
  {
    teamnumber: "T008",
    team: "ASHURA81",
    university: "โรงเรียนนายร้อยตำรวจ",
  },
  {
    teamnumber: "T012",
    team: "Brute Force",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    teamnumber: "T014",
    team: "Bugไม่ใช่แมลง",
    university: "EASTERN TECHNOLOGICAL COLLEGE (E.TECH)",
  },
  {
    teamnumber: "T016",
    team: "CODEBREAKER",
    university: "โรงเรียนนายเรือ",
  },
  {
    teamnumber: "T017",
    team: "Council of Elrond",
    university:
      "มหาวิทยาลัยรังสิต, จุฬาลงกรณ์มหาวิทยาลัย, มหาวิทยาลัยมหิดล, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
  },
  {
    teamnumber: "T018",
    team: "CVE-1999-0000",
    university: "มหาวิทยาลัยกรุงเทพ",
  },
  {
    teamnumber: "T019",
    team: "Cyber ลั่น!!",
    university: "มหาวิทยาลัยขอนแก่น",
  },
  {
    teamnumber: "T022",
    team: "Exodia",
    university:
      "สถาบันเทคโนโลยีนานาชาติสิรินธร มหาวิทยาลัยธรรมศาสตร์, โรงเรียนนายร้อยตำรวจ, มหาวิทยาลัยมหิดล",
  },
  {
    teamnumber: "T023",
    team: "fight for นายช",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
  },
  {
    teamnumber: "T024",
    team: "Game of Throws",
    university: "มหาวิทยาลัยกรุงเทพ",
  },
  {
    teamnumber: "T026",
    team: "Hackio",
    university: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
  },
  {
    teamnumber: "T029",
    team: "I'm in",
    university:
      "มหาวิทยาลัยเกษตรศาสตร์ (กองบังคับการตำรวจสืบสวนสอบสวนอาชญากรรมทางเทคโนโลยี 1)",
  },
  {
    teamnumber: "T033",
    team: "KAIKAO",
    university:
      "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, มหาวิทยาลัยธรรมศาสตร์, สถาบันเทคโนโลยีนานาชาติสิรินธร มหาวิทยาลัยธรรมศาสตร์, มหาวิทยาลัยเกษตรศาสตร์",
  },
  {
    teamnumber: "T034",
    team: "LazyToPatch",
    university: "มหาวิทยาลัยสุโขทัยธรรมาธิราช, มหาวิทยาลัยสงขลานครินทร์",
  },
  {
    teamnumber: "T047",
    team: "Push And Pray",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    teamnumber: "T052",
    team: "Safety First",
    university:
      "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    teamnumber: "T053",
    team: "Scamtify",
    university:
      "มหาวิทยาลัยรามคำแหง, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง, มหาวิทยาลัยธรรมศาสตร์",
  },
  {
    teamnumber: "T058",
    team: "Shield of cyber",
    university: "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน",
  },
  {
    teamnumber: "T063",
    team: "SoftShells",
    university: "มหาวิทยาลัยสงขลานครินทร์",
  },
  {
    teamnumber: "T064",
    team: "sudo rm -rf us",
    university: "มหาวิทยาลัยเชียงใหม่, จุฬาลงกรณ์มหาวิทยาลัย",
  },
  {
    teamnumber: "T073",
    team: "YamKaiKrop",
    university: "มหาวิทยาลัยขอนแก่น",
  },
  {
    teamnumber: "T075",
    team: "Zyrox",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    teamnumber: "T083",
    team: "ใครจะรู้ทีมอื่นอาจจะชื่อหนักกว่าเรา",
    university: "วิทยาลัยคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น, มหาวิทยาลัยมหิดล",
  },
  {
    teamnumber: "T085",
    team: "เต่ามีไฟ",
    university: "มหาวิทยาลัยขอนแก่น",
  },
  {
    teamnumber: "T086",
    team: "น้องใหม่บ้านนายอั๋น",
    university: "วิทยาลัยคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น",
  },
  {
    teamnumber: "T090",
    team: "ฝันร้ายไซเบอร์",
    university:
      "มหาวิทยาลัยรามคำแหง, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, มหาวิทยาลัยศรีปทุม",
  },
  {
    teamnumber: "T097",
    team: "เมื่อไหร่สองโทนจะเปิด",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    teamnumber: "T102",
    team: "อย่าซีเคียวเดี๋ยวซีเล็ง",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
];

export default function TeamList() {
  const [search, setSearch] = useState("");

  const filteredTeams = teams.filter(({ team, university }) => {
    const query = search.toLowerCase();
    return (
      team.toLowerCase().includes(query) ||
      university.toLowerCase().includes(query)
    );
  });

  return (
    <div className="p-5">
      <div className="flex flex-col sm:flex-row font-bold mb-3 text-lg">
        <div className="w-full sm:w-1/4 text-left sm:text-center">🕹️</div>
        <div className="w-full sm:w-2/4 text-left sm:text-center">ทีม</div>
        <div className="hidden sm:block w-full sm:w-4/4 text-left">
          สถาบันการศึกษา
        </div>
      </div>
      <ul className="list-none p-0">
        {filteredTeams.map(({ teamnumber, team, university }, i) => (
          <li key={i} className="flex flex-col sm:flex-row mb-2 pb-2">
            <div className="w-full sm:w-1/4 text-left sm:text-center font-bold text-base sm:text-lg">
              {teamnumber}
            </div>
            <div className="w-full sm:w-2/4 text-left sm:text-center font-bold text-base sm:text-lg">
              {team}
            </div>
            <div className="w-full sm:w-4/4 text-left">{university}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
