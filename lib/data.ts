import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import beachspotterImg from "@/public/beachspotter.png";
import mtheatresImg from "@/public/mtheatres.png";
import projectworkImg from "@/public/projectwork.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "Full Stack Engineer",
    location: "Remote",
    description:
      "Working as a full-stack developer, utilizing TypeScript, Node.js, MySQL, React, and Next.js to build and maintain scalable web applications.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "ADS Rater",
    location: "TELUS International, Google Partner",
    description:
      "Analyzed user query data for Google and evaluated advertisements, ensuring high-quality ad placements and relevance. Developed independent work schedules and coordinated with teams.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },  
  {
    title: "Specialization Course",
    location: "Michigan State University - Scholarship",
    description:
      "Completed a specialization course in Journalism at Michigan State University, focusing on advanced topics and methodologies in the chosen field of study.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "Bachelor's degree in Political Science",
    location: "Università degli studi di Catania, Italy",
    description:
      "Obtained a Bachelor's degree in Political Science, providing a solid foundation in analytical and research skills, crucial for problem-solving and strategic thinking in software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Bartender",
    location: "Various Locations",
    description:
      "Gained extensive experience in teamwork, shift work, and public relations, honing communication and organizational skills in a fast-paced environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "BeachSpotter",
    description:
      "A web app built with React to monitor the weather on blue flag beaches.",
    tags: ["React", "Weather API", "Tailwind"],
    imageUrl: beachspotterImg,
  },
  {
    title: "MTheatres",
    description:
      "A website that allows users to see in which country movies are available on major streaming platforms (Netflix, Prime Video).",
    tags: ["React", "Next.js", "API Integration", "Tailwind"],
    imageUrl: mtheatresImg,
  },
  {
    title: "ProjectWork",
    description:
      "The final project for the Progetto CODE, showcasing full-stack development skills.",
    tags: ["React", "Node.js", "MySQL", "Tailwind"],
    imageUrl: projectworkImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "MySQL",
  "Git",
  "GitHub",
  "Online content evaluation",
  "Indexing",
  "Italian (native)",
  "English (C1)",
] as const;