"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [showOnce, setShowOnce] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user already saw loading screen this session
    const hasSeenLoader = sessionStorage.getItem("sps-loader-seen");

    if (hasSeenLoader) {
      setVisible(false);
      return;
    }

    // Mark that we've shown the loader
    sessionStorage.setItem("sps-loader-seen", "true");
    setShowOnce(true);

    // Minimum display time (2 seconds)
    const minTimer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    // Optional: Listen for router events for more accurate detection
    // (Useful if you want to sync with actual page content load)
    const handleRouterStart = () => {
      // Router navigation started
    };

    const handleRouterEnd = () => {
      // After ~2s, hide loader anyway
      setTimeout(() => setVisible(false), 300);
    };

    return () => clearTimeout(minTimer);
  }, []);

  // Don't render if not showing
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-linear-to-b from-[#F4F8FC] to-[#E8F2FA]">
      <div className="relative flex flex-col items-center justify-center gap-6">
        {/* Animated gradient ring */}
        <div className="relative h-40 w-40">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#0057B8] border-r-[#0BB4D4]" />
          {/* Inner pulsing ring */}
          <div className="absolute inset-2 animate-pulse rounded-full border border-[#0057B8]/20" />

          {/* Logo in center */}
          <div className="absolute inset-6 flex items-center justify-center">
            <Image
              src="/logo/logo.png"
              alt="SPS Loading"
              width={100}
              height={100}
              quality={75}
              className="h-24 w-24 rounded-full object-cover shadow-lg shadow-[#0057B8]/20"
              priority
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold text-[#003e85]">SPS Digital</h2>
          <p className="text-sm text-[#0057B8]">Loading experience...</p>
        </div>

        {/* Animated dots */}
        <div className="flex gap-1.5">
          <span className="block h-1.5 w-1.5 rounded-full bg-[#0057B8] animate-bounce" style={{ animationDelay: "0s" }} />
          <span className="block h-1.5 w-1.5 rounded-full bg-[#0BB4D4] animate-bounce" style={{ animationDelay: "0.2s" }} />
          <span className="block h-1.5 w-1.5 rounded-full bg-[#0057B8] animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>

      {/* Prevent interaction during load */}
      <style jsx>{`
        @keyframes sps-gradient-shift {
          0% {
            border-top-color: #0057b8;
            border-right-color: #0bb4d4;
          }
          50% {
            border-top-color: #0bb4d4;
            border-right-color: #003e85;
          }
          100% {
            border-top-color: #0057b8;
            border-right-color: #0bb4d4;
          }
        }
      `}</style>
    </div>
  );
}