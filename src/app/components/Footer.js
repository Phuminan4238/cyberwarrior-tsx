"use client";

import React, { useState, useEffect } from "react";
import backgroundImg from "../assets/background.png";

const Footer = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-bottom flex items-center justify-center px-12 py-4 md:py-8"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <div className="absolute inset-0 bg-[rgba(10,29,58,0.1)] z-0" />
      <p className="text-white text-center z-10 text-sm md:text-lg font-thai">
        made in CPE KMUTT{" "}
        <span className="block md:inline">© 2025 All rights reserved</span>
      </p>
    </div>
  );
};

export default Footer;
