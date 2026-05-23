import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const typedItems = [
    "Full Stack Developer",
    "Java Full Stack Developer",
    "React JS Developer",
    "Frontend Developer",
    "Software Engineer",
    "Java Developer",
    "Spring Boot Developer",
    "Associate Software Engineer"
  ];
  const [itemIndex, setItemIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeItem = () => {
      if (charIndex < typedItems[itemIndex].length) {
        setTypedText((prevText) => prevText + typedItems[itemIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setItemIndex((itemIndex + 1) % typedItems.length);
          setCharIndex(0);
          setTypedText("");
        }, 1000); // Delay before typing the next item
      }
    };

    const typingInterval = setInterval(typeItem, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [charIndex, itemIndex]);

  return (
    <section className={`relative w-full min-h-screen lg:min-h-[120vh] mx-auto`} id="hero" >
      <div
        className={`pt-[120px] lg:absolute lg:inset-0 lg:pt-0 lg:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5 pointer-events-auto">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1 flex flex-col lg:flex-row justify-between items-start w-full gap-6 lg:gap-10">
          <div className="pointer-events-auto flex-1 max-w-2xl">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Vaishnavi Bharambe</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}>
              I'm{" "}
              <span
                className="typed"
                aria-hidden="true"
                style={{
                  backgroundImage: "linear-gradient(to bottom, rgba(145, 94, 255, 0.2), rgba(145, 94, 255, 0.2))",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 8px",
                  backgroundPosition: "0 100%",
                  color: "#915EFF",
                  display: "inline-block",
                  fontWeight: "bold",
                  textShadow: "0 0 10px rgba(145, 94, 255, 0.5)"
                }}
              >
                {typedText}
              </span>
              <span
                className="typed-cursor"
                aria-hidden="true"
              >
                |
              </span>
              <br />
              <br />
              <span className="text-[16px] sm:text-[20px] font-normal leading-relaxed text-gray-300">
                Passionate Full Stack Developer focused on building scalable web applications with modern frontend experiences and powerful backend architecture. I enjoy transforming ideas into responsive, user-friendly and production-ready digital solutions.
              </span>
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-8">
              <a href="https://www.linkedin.com/in/vaishnavi-bharambe-b61303343/" target="_blank" rel="noreferrer" className="text-white hover:text-[#915EFF] text-[30px] transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Vaish8989" target="_blank" rel="noreferrer" className="text-white hover:text-[#915EFF] text-[30px] transition-colors">
                <FaGithub />
              </a>
              <a href="mailto:vaishnavibharambe88@gmail.com" className="text-white hover:text-[#915EFF] text-[30px] transition-colors">
                <FaEnvelope />
              </a>
              <a href="tel:9309775906" className="text-white hover:text-[#915EFF] text-[30px] transition-colors">
                <FaPhone />
              </a>
            </div>
          </div>

          <div className="flex flex-1 justify-center lg:justify-end items-start pointer-events-auto">
            <div className="relative rounded-2xl shadow-[0_0_30px_rgba(145,94,255,0.5)] overflow-hidden">
              <img
                src="/Images/ProfessionalPhoto12.png"
                alt="profile"
                className="w-auto max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[460px] h-auto object-contain"
                style={{
                  maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
