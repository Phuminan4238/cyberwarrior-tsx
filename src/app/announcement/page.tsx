"use client";

import React, { useState } from "react";
import backgroundImg from "../assets/background.png";
import cpeLogo from "../assets/cpe-logo.png";
import kmuttLogo from "../assets/kmutt-logo.png";
import kmuttLogo2 from "../assets/kmutt-logo-02.png";
import policeLogo from "../assets/police-logo.png";
import policeLogo2 from "../assets/police-logo-02.png";
import cyberlogo from "../assets/cyber-logo.png";
import TeamList from "../components/TeamList";

const Announcement: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const logos = [policeLogo2, policeLogo, kmuttLogo, kmuttLogo2, cpeLogo];

  return (
    <>
      {showModal && (
        <div
          className="w-full min-h-screen bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImg.src})` }}
        >
          {/* Header Section */}
          <section className="text-white">
            <div className="grid justify-center w-full md:max-w-screen-xl px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[2rem]">
              <div className="place-self-center">
                <div className="grid gap-8" style={{ fontFamily: "Gabarito" }}>
                  <div>
                    <button
                      className="inline-flex items-center justify-center hover:text-gray-900"
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
                <h4 className="max-w-2xl text-[1.4rem] mb-4 font-thai text-center font-bold uppercase tracking-tight leading-none md:text-3xl">
                  รายชื่อผู้มีสิทธิ์เข้าแข่งขัน
                </h4>
              </div>
            </div>
          </section>

          {/* Team List Section */}
          <section className="text-white">
            <div className="max-w-screen-xl mx-auto p-6 bg-white text-black rounded-3xl">
              <div className="mx-auto w-[120px] border-t-3 border-orange-500 mt-4"></div>
              <TeamList />
              <div className="mx-auto w-[120px] border-t-3 border-orange-500 mt-4"></div>
            </div>

            {/* Sponsor Logos */}
            <div className="max-w-screen-sm mx-[4rem] md:mx-auto md:max-w-screen-md mt-[3rem] p-[2rem] md:pt-[2rem] bg-white rounded-3xl grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-4 text-gray-500">
              {logos.map((logo, index) => (
                <button
                  key={index}
                  className="inline-flex items-center justify-center w-full hover:text-gray-900"
                  style={{
                    backgroundImage: `url(${logo.src})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "40px",
                  }}
                >
                  <span className="sr-only">Logo</span>
                </button>
              ))}
            </div>
          </section>

          {/* Spacer */}
          <section className="h-20 md:h-20 py-20"></section>
        </div>
      )}
    </>
  );
};

export default Announcement;
