import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[200px] mt-24 bg-secondary text-white flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row justify-center items-center gap-6">
        <Instagram className="w-7 h-7 hover:text-gray-500 cursor-pointer" />
        <Twitter className="w-7 h-7 hover:text-gray-500 cursor-pointer" />
        <Facebook className="w-7 h-7 hover:text-gray-500 cursor-pointer" />
      </div>
      <div className="flex flex-col justify-center items-center font-medium">
        <div>
          <span className="hover:text-gray-500 cursor-pointer">About</span> ·{" "}
          <span className="hover:text-gray-500 cursor-pointer"> Support</span>
        </div>
        <div className="text-sm">
          <span className="hover:text-gray-500 cursor-pointer">
            Terms of Use
          </span>{" "}
          ·{" "}
          <span className="hover:text-gray-500 cursor-pointer">
            Privacy Policy
          </span>
        </div>
      </div>
      <div>© HAY HAUL 2024</div>
    </div>
  );
};

export { Footer };
