"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Copy, Check } from "lucide-react";
import dynamic from "next/dynamic";

import NavButtons from "../../ui/navButtons";

import contactImage from "./contact.json";

const Player = dynamic(() => import("react-lottie-player"), { ssr: false });
const ContactLeft: React.FC = () => {
  const [copied, setCopied] = useState<{ whatsapp: boolean; email: boolean }>({
    whatsapp: false,
    email: false,
  });

  const handleCopy = (value: string, field: "whatsapp" | "email") => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied({ ...copied, [field]: true });
      setTimeout(() => setCopied({ ...copied, [field]: false }), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="p-4 border border-default-200 rounded-md">
      {/* WhatsApp */}
      <div className="flex items-center space-x-2 mb-2">
        <FaWhatsapp className="text-green-500" size={22} />
        <p className="text-default-700">WhatsApp: +8801789094002</p>
        <button
          className="ml-2 text-gray-500 hover:text-green-500 transition-all"
          onClick={() => handleCopy("+8801789094002", "whatsapp")}
        >
          {copied.whatsapp ? (
            <Check className="text-green-500" size={20} />
          ) : (
            <Copy size={20} />
          )}
        </button>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-2">
        <Image
          alt="gmail"
          className="size-5"
          height={20}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
          }
          width={20}
        />
        <p className="text-default-700">Email: nsbd500@gmail.com</p>
        <button
          className="ml-2 text-gray-500 hover:text-blue-500 transition-all"
          onClick={() => handleCopy("nsbd500@gmail.com", "email")}
        >
          {copied.email ? (
            <Check className="text-blue-500" size={20} />
          ) : (
            <Copy size={20} />
          )}
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="my-5">
        <NavButtons />
      </div>

      {/* Animated Image */}
      <div className="flex items-center justify-center">
        <Player
          loop
          play
          animationData={contactImage}
          style={{ width: 300, height: 280 }}
        />
        {/* <Image
          className="w-full h-[268px] object-cover rounded-lg"
          src={
            "https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif"
          }
          width={500}
          height={500}
          alt="animation"
        /> */}
      </div>
    </div>
  );
};

export default ContactLeft;
