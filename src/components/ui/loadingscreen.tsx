"use client";

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
      <div className="relative w-40 h-40 rounded-full animate-spin">
        <div className="absolute top-0 left-0 w-full h-full border-t-8 border-black rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-r-8 border-blue-900 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-b-8 border-cyan-500 rounded-full"></div>
      </div>
    </div>
  );
}