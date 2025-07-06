"use client";

import React, { useState } from "react";

const teams = [
  {
    team: "2bNO1a",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    team: "2bNO1b",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    team: "404 Brain Not Found",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "404 Not Found",
    university:
      "มหาวิทยาลัยเกษตรศาสตร์, มหาวิทยาลัยธรรมศาสตร์, มหาวิทยาลัยเชียงใหม่, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  { team: "404NotFound", university: "มหาวิทยาลัยหอการค้าไทย" },
  { team: "5 Bits", university: "มหาวิทยาลัยมหิดล" },
  { team: "500 บาท", university: "มหาวิทยาลัยเกษตรศาสตร์" },
  { team: "ARROW SLAYER", university: "โรงเรียนนายร้อยตำรวจ" },
  { team: "ASHURA81", university: "โรงเรียนนายร้อยตำรวจ" },
  { team: "BID", university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง" },
  { team: "bigbughugbad", university: "มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี" },
  {
    team: "BRAINROT101",
    university:
      "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  { team: "Brute Force", university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี" },
  { team: "BuBukagu", university: "มหาวิทยาลัยกรุงเทพ" },
  {
    team: "Bugไม่ใช่แมลง",
    university: "EASTERN TECHNOLOGICAL COLLEGE (E.TECH)",
  },
  {
    team: "ByteRaiders ",
    university: "มหาวิทยาลัยเกษตรศาสตร์, มหาวิทยาลัยรังสิต",
  },
  { team: "CODEBREAKER", university: "โรงเรียนนายเรือ" },
  {
    team: "Council of Elrond",
    university:
      "มหาวิทยาลัยรังสิต, จุฬาลงกรณ์มหาวิทยาลัย, มหาวิทยาลัยมหิดล, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
  },
  { team: "CVE-1999-0000", university: "มหาวิทยาลัยกรุงเทพ" },
  { team: "Cyber ลั่น!!", university: "มหาวิทยาลัยขอนแก่น" },
  { team: "Cypher", university: "มหาวิทยาลัยเทคโนโลยีสุรนารี" },
  { team: "dek C-Y", university: "วิทยาลัยคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น" },
  {
    team: "Exodia",
    university:
      "สถาบันเทคโนโลยีนานาชาติสิรินธร มหาวิทยาลัยธรรมศาสตร์, โรงเรียนนายร้อยตำรวจ, มหาวิทยาลัยมหิดล",
  },
  { team: "fight for นายช", university: "จุฬาลงกรณ์มหาวิทยาลัย" },
  { team: "Game of Throws ", university: "มหาวิทยาลัยกรุงเทพ" },
  { team: "GrowAGarden", university: "มหาวิทยาลัยขอนแก่น" },
  { team: "Hackio", university: "มหาวิทยาลัยเทคโนโลยีสุรนารี" },
  {
    team: "Hackstop",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, มหาวิทยาลัยเกษตรศาสตร์",
  },
  {
    team: "Herld De Vack",
    university: "สถาบันเทคโนโลยีนานาชาติสิรินธร มหาวิทยาลัยธรรมศาสตร์",
  },
  {
    team: "I'm in",
    university: "กองบังคับการตำรวจสืบสวนสอบสวนอาชญากรรมทางเทคโนโลยี 1",
  },
  {
    team: "James kap phong puean",
    university:
      "ราชวิทยาลัยจุฬาภรณ์, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, จุฬาลงกรณ์มหาวิทยาลัย",
  },
  {
    team: "JOC business revenger",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  { team: "JoinjoinKrubPee", university: "มหาลัยศรีนครินทรวิโรฒ" },
  {
    team: "KAIKAO",
    university:
      "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, มหาวิทยาลัยธรรมศาสตร์, สถาบันเทคโนโลยีนานาชาติสิรินธร มหาวิทยาลัยธรรมศาสตร์, มหาวิทยาลัยเกษตรศาสตร์",
  },
  {
    team: "LazyToPatch",
    university: "มหาวิทยาลัยสุโขทัยธรรมาธิราช, มหาวิทยาลัยสงขลานครินทร์",
  },
  {
    team: "LocationName",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
  },
  {
    team: "LotteryKitchen",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "Maeowat",
    university: "มหาวิทยาลัยขอนแก่น, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "Make me wet",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  { team: "MaNoI", university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี" },
  {
    team: "MFAPN",
    university: "ราชวิทยาลัยจุฬาภรณ์, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "Monkey the hacker",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  { team: "Mootu", university: "มหาวิทยาลัยเกษตรศาสตร์" },
  { team: "NextStep", university: "มหาวิทยาลัยธรรมศาสตร์" },
  {
    team: "NoLoveJustGuG",
    university: "วิทยาลัยพยาบาลทหารอากาศ กรมแพทย์ทหารอากาศ",
  },
  { team: "Phish & chipz", university: "มหาวิทยาลัยเชียงใหม่" },
  {
    team: "Power Tubby Team",
    university: "วิทยาลัยพยาบาลทหารอากาศ กรมแพทย์ทหารอากาศ",
  },
  {
    team: "Push And Pray",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  { team: "PYU-SE 1", university: "มหาวิทยาลัยพายัพ" },
  { team: "PYU-SE 2", university: "มหาวิทยาลัยพายัพ" },
  { team: "RamRaider", university: "มหาวิทยาลัยเชียงใหม่" },
  {
    team: "Safe The Best For Last",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "Safety First",
    university:
      "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "Scamtify",
    university:
      "มหาวิทยาลัยรามคำแหง, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง, มหาวิทยาลัยธรรมศาสตร์",
  },
  { team: "Script Bunny", university: "มหาวิทยาลัยเทคโนโลยีสุรนารี" },
  { team: "SecurMaiPen", university: "มหาวิทยาลัยธรรมศาสตร์" },
  {
    team: "Sentinel-5",
    university:
      "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง, จุฬาลงกรณ์มหาวิทยาลัย, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "shabuchill",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },

  {
    team: "Shield of cyber",
    university: "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน",
  },

  {
    team: "Shutdown",
    university:
      "มหาวิทยาลัยเทคโนโลยีราชมงคล, มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี",
  },

  {
    team: "SKID",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },

  {
    team: "SkillSync",
    university: "Asia Pacific International University",
  },
  {
    team: "Slytherin",
    university: "มหาวิทยาลัยสงขลานครินทร์",
  },
  {
    team: "SoftShells",
    university: "มหาวิทยาลัยสงขลานครินทร์",
  },
  {
    team: "sudo rm -rf us",
    university: "มหาวิทยาลัยเชียงใหม่, จุฬาลงกรณ์มหาวิทยาลัย",
  },
  {
    team: "SutinX3",
    university:
      "มหาวิทยาลัยศิลปากร, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    team: "Talalelo Talala",
    university: "มหาวิทยาลัยมหิดล",
  },
  {
    team: "ThaiShield",
    university: "CMKL",
  },
  {
    team: "The Lost Star Team",
    university: "มหาวิทยาลัยธรรมศาสตร์",
  },
  {
    team: "TikPopTV and friends",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "Timeless",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "Vanguard Protocol",
    university: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
  },
  {
    team: "YamKaiKrop",
    university: "มหาวิทยาลัยขอนแก่น",
  },
  {
    team: "YESCODELnw",
    university:
      "มหาวิทยาลัยเกษตรศาสตร์, จุฬาลงกรณ์มหาวิทยาลัย, มหาวิทยาลัยมหิดล, มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ",
  },
  {
    team: "Zyrox",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "กรอกชื่อทีม",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "กรอกชื่อทีม",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    team: "แก๊งลูกเจี๊ยบพาเพลิน",
    university:
      "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    team: "ขอแค่ได้ลงมือ",
    university: "มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี",
  },
  {
    team: "ขุนแผนแดนโคราช",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "ครีมบูส บูส นาราบูส บูส",
    university:
      "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง, มหาวิทยาลัยศรีปทุม, มหาวิทยาลัยสงขลานครินทร์, จุฬาลงกรณ์มหาวิทยาลัย",
  },
  {
    team: "แคนคะนวยคงรวยคงทวยแทน",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    team: "ใครจะรู้ทีมอื่นอาจจะชื่อหนักกว่าเรา",
    university: "วิทยาลัยคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น, มหาวิทยาลัยมหิดล",
  },
  {
    team: "ใครที่ล้อเลียนผม ระวังโดนแฮกนะครับ",
    university: "สถาบันเทคโนโลยีนานาชาติสิรินธร มหาวิทยาลัยธรรมศาสตร์",
  },
  {
    team: "เต่ามีไฟ",
    university: "มหาวิทยาลัยขอนแก่น",
  },
  {
    team: "น้องใหม่บ้านนายอั๋น",
    university: "วิทยาลัยคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น",
  },
  {
    team: "นอนดีกว่า",
    university: "มหาวิทยาลัยนเรศวร",
  },
  {
    team: "บั๊กจนชิน",
    university: "มหาวิทยาลัยธรรมศาสตร์",
  },
  {
    team: "ฝันร้าย Hackathon",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    team: "ฝันร้ายไซเบอร์",
    university:
      "มหาวิทยาลัยรามคำแหง, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, มหาวิทยาลัยศรีปทุม",
  },
  {
    team: "พญาคลื่นคลั่ง",
    university: "สถาบันเทคโนโลยีไทยญี่ปุ่น",
  },
  {
    team: "พี่ระยองมาแฮ็กใจ",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    team: "มดน้อยสุดมหัศจรรย์ ผจญภัย",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "มดศึก",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, มหาวิทยาลัยนเรศวร",
  },
  {
    team: "มาเอาสังคม",
    university: "โรงเรียนนายร้อยพระจุลจอมเกล้า",
  },
  {
    team: "มือใหม่หัดทำ",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "เมื่อไหร่สองโทนจะเปิด",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    team: "ยืนงงในดงบั๊ก",
    university: "โรงเรียนนายร้อยพระจุลจอมเกล้า",
  },
  {
    team: "ลิงกังกู",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  },
  {
    team: "ลีฟเอง",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "เลิกรักแล้วกั๊กก่อน",
    university:
      "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, จุฬาลงกรณ์มหาวิทยาลัย",
  },
  {
    team: "อย่าซีเคียวเดี๋ยวซีเล็ง",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    team: "อีฟยูชูสมี ยูไม้บีพราว",
    university:
      "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี, มหาวิทยาลัยเกษตรศาสตร์",
  },
  {
    team: "ไอทีจอมปลอม",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
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
        <div className="w-full sm:w-1/4 text-left sm:text-center">ทีม</div>
        <div className="hidden sm:block w-full sm:w-3/4 text-left">
          สถาบันการศึกษา
        </div>
      </div>
      <ul className="list-none p-0">
        {filteredTeams.map(({ team, university }, i) => (
          <li key={i} className="flex flex-col sm:flex-row mb-2 pb-2">
            <div className="w-full sm:w-1/4 text-left sm:text-center font-bold text-base sm:text-lg">
              {team}
            </div>
            <div className="w-full sm:w-3/4 text-left">{university}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
