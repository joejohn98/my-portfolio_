"use client";

import { useEffect } from "react";
import { initEmailJS } from "@/utils/emailjs";
import { EMAILJS_CONFIG } from "@/utils/constants";

export default function EmailJsInit() {
  useEffect(() => {
    initEmailJS(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);
  return null;
}
