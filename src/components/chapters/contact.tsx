"use client";

/**
 * Contact chapter — "Get in Touch"
 * Email CTA and social links.
 */

import { useState } from "react";
import { Chapter } from "@/components/layout";
import { CHAPTER_ASSETS } from "@/lib/assets";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "luandaniel966@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Chapter
      id="contact"
      bgSrc={CHAPTER_ASSETS.contact.bg}
      density="loose"
      className="flex items-center justify-center"
    >
      <div className="text-center max-w-xl mx-auto">
        <p className="text-white/70 mb-8">
          I'm open to senior frontend roles at product-driven teams.
        </p>

        <button
          onClick={handleCopy}
          className="text-2xl md:text-3xl font-medium text-white hover:text-white/80 transition-colors underline underline-offset-8 decoration-white/30 hover:decoration-white/60"
        >
          {copied ? "Copied" : "Email me"}
        </button>

        <div className="mt-12 flex justify-center gap-8">
          <a
            href="https://linkedin.com/in/luannzin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/luannzin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        <p className="mt-16 text-xs text-white/30">
          Based in Brazil (UTC-3). I typically respond within 24 hours.
        </p>
      </div>
    </Chapter>
  );
}
