"use client";

import { useRef } from "react";
import { PhoneCallIcon, type PhoneCallIconHandle } from "@/components/ui/phone-call";

export default function RequestQuoteButton({ onClick }: { onClick?: () => void } = {}) {
  const iconRef = useRef<PhoneCallIconHandle>(null);

  return (
    <div className="relative w-[314px] h-[68px] flex items-start justify-center">
      {/* Background SVG Cutout Notch - Perfectly hugs the button with uniform ~10px spacing */}
      <svg
        viewBox="0 0 314 68"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <path
          d="M 0 48 C 18 48, 34 42, 42 26 A 34 34 0 0 1 76 0 L 238 0 A 34 34 0 0 1 272 26 C 280 42, 296 48, 314 48 L 314 68 L 0 68 Z"
          fill="#FFFFFF"
        />
      </svg>

      {/* Cyan Button - exactly centered inside the 10px white contour */}
      <div className="relative z-10 pt-[10px]">
        <button
          type="button"
          onClick={onClick}
          onMouseEnter={() => iconRef.current?.startAnimation()}
          onMouseLeave={() => iconRef.current?.stopAnimation()}
          className="group flex items-center w-[210px] h-[48px] bg-[#00a7e1] hover:bg-[#0092c4] text-white pl-1.5 pr-4 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-sm"
        >
          {/* White circle containing the dark navy phone icon */}
          <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center text-[#031B3D] shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-105">
            <PhoneCallIcon ref={iconRef} size={18} className="flex items-center justify-center" />
          </div>
          <span className="flex-1 text-center text-[15px] font-semibold tracking-wide whitespace-nowrap text-white">
            Request a Quote
          </span>
        </button>
      </div>
    </div>
  );
}
