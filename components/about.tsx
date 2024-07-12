"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I completed a degree in{" "}
        <span className="font-medium">International Relations</span> at the
        University of Catania and furthered my English studies through a
        scholarship at Michigan State University. After graduating, I started
        learning coding first with Codecademy, earning a Full Stack Engineer
        diploma, and then with Progetto CODE for a backend focus. Programming
        allows me to create and bring my projects to life.
      </p>
      <p className="mb-3">
        My core stack is undoubtedly{" "}
        <span className="font-medium">TypeScript, Node.js, and MySQL</span>, but
        I also have good knowledge of the frontend with React and Next.js. Other
        languages I've used for my projects include C and Java Spring Boot Core,
        and I have experience with databases like Postgres and MongoDB.
        Currently, I am looking for a job as a{" "}
        <span className="font-medium">Full Stack Developer</span>.
      </p>
      <p>
        In my free time, I enjoy reading, listening to music, going to
        concerts, traveling, and cooking. I am keeping up with the study of{" "}
        <span className="font-medium">artificial intelligence and Python</span>.
      </p>
    </motion.section>
  );
}
