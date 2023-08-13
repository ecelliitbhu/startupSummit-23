import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Menubar } from "@/components/ui/menubar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GoLocation } from "react-icons/go";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{
        width: "100%",
        height: "100vh ",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        {/* Place the mp4 video under "video" folder of public directory */}
        <source
          src={require("../../public/video/normal_video.mp4")}
          type="video/mp4"
        />
      </video>

      {/* Event Card */}
      <Card
        className="event-card"
        style={{
          width: "25%",
          backgroundColor: "transparent",
          border: "0",
          paddingLeft: "3.5rem",
          paddingBottom: "2.5rem",
        }}
      >
        <div style={{ display: "flex", width: "100%", color: "white" }}>
          <div style={{ flex: "20%", display: "flex", alignItems: "center" }}>
            <GoLocation size="3.2rem" />
          </div>
          <div style={{ flex: "80%", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "2rem" }}>New Delhi</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            color: "white",
            paddingTop: "1.4rem",
          }}
        >
          <div style={{ flex: "20%", display: "flex", alignItems: "center" }}>
            <BsFillCalendarCheckFill size="3.2rem" />
          </div>
          <div style={{ flex: "80%", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "2rem" }}>15th August, 2023</span>
          </div>
        </div>
      </Card>

      {/* Call-to-Action Button */}
      <div style={{ paddingBottom: "2.5rem", paddingRight: "3.5rem" }}>
        <Button
          style={{
            fontSize: "2.3rem",
            paddingTop: "2.2rem",
            paddingBottom: "2.2rem",
          }}
        >
          Call To Action
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
