"use client";

/**
 * Hook to detect if viewport is below mobile breakpoint.
 * Used to disable mid-layer and reduce parallax intensity on mobile.
 */

import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/lib/constants";

export function useIsMobile(): boolean {
  // Default to true (mobile) on server to ensure we don't ship heavy effects
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.mobile);
    };

    // Set initial value on client
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
