import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { RiBriefcase4Fill } from "react-icons/ri";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { ComputersCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[255px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-[#111111] p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#000000] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>


      <div className="flex flex-col lg:flex-row items-center gap-10 w-full mt-0">
        <div className="flex-1 flex flex-col items-start justify-center">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About Me.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
          >
            I’m a Full Stack Developer with experience in React JS, Java Spring Boot, PostgreSQL and cloud integrations. I enjoy creating scalable web applications with clean UI and efficient backend systems. My focus is always on building real-world applications that provide excellent user experience and performance.
          </motion.p>
          <a
            href="https://drive.google.com/uc?export=download&id=1iA_2axk6eOa6Ah0bPIqWDOngC2I3wYBj"
            download="Vaishnavi_Bharambe_Resume.pdf"
            className="mt-10 px-6 py-3 text-[#915EFF] border border-[#915EFF] rounded-md shadow-md hover:bg-[#915EFF] hover:text-black focus:outline-none transition-all duration-300 w-fit inline-flex items-center"
          >
            <span className="font-semibold flex gap-1.5 items-center"><RiBriefcase4Fill />Download Resume</span>
          </a>
        </div>

        <motion.div 
          variants={fadeIn("left", "spring", 0.5, 0.75)} 
          className="hidden lg:block flex-1 w-full h-[450px] overflow-visible"
        >
          <ComputersCanvas isAbout={true} />
        </motion.div>
      </div>
      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
