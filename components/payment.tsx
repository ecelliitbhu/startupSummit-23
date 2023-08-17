"use client";
import React, { useEffect } from "react";

export const EventEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://insider.in/scripts/insider-embed/dist/scripts/insider_embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Use type assertion to tell TypeScript that insiderEmbed is available on window
      const insiderEmbed = (window as any).insiderEmbed;
      if (insiderEmbed) {
        insiderEmbed.init({
          mountId: "insider-embed",
          eventSlug: "digital-startup-summit-iit-bhu-oct28-2023",
          frameHeight: 400,
          frameWidth: 800,
          merchantId: "64d74d70466b3c00080b3e1c",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="insider-embed"></div>
    </>
  );
};
