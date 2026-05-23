import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { words } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className={`w-full sm:w-[360px] flex ${live_link ? "cursor-pointer" : ""}`}
      onClick={() => live_link && window.open(live_link, "_blank")}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="black-glass p-5 rounded-2xl w-full purple-glow flex flex-col"
      >
        <div className="relative w-full h-[200px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#111111] border border-[#915EFF]/10">
          {live_link && (
            <div className="absolute top-2 left-2 z-10 bg-[#915EFF]/90 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <span>Live Site</span>
              <span>↗</span>
            </div>
          )}
          {image ? (
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : null}

          <div
            className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c0c0c] to-[#161616] text-[#915EFF]/60 text-xs font-semibold select-none transition-all duration-300"
            style={{ display: image ? "none" : "flex" }}
          >
            <div className="w-12 h-12 rounded-full bg-[#915EFF]/10 flex items-center justify-center text-[#915EFF] mb-2 shadow-[0_0_15px_rgba(145,94,255,0.25)] hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
              </svg>
            </div>
            <span className="tracking-wider uppercase text-[10px] text-gray-400">Project Preview</span>
            <span className="text-[9px] text-[#915EFF]/40 mt-0.5">Replace in constants/index.js</span>
          </div>

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex-1 flex flex-col">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-gray-300 text-[14px] leading-[22px] flex-grow">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0 }}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>
        <div className="hero-text">
          <motion.span
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            className="mt-3 text-gray-300 text-[30px] max-w-3xl leading-[50px]"
          >
            <h1>
              Shaping
              <span className="slide pl-3">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center text-3xl md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="icon"
                        className=" md:p-2 p-1 rounded-full bg-[#915EFF]"
                      />
                      <span 
                        className="font-extrabold text-white" 
                        style={{ 
                          fontFamily: word.font, 
                          textShadow: '0 0 4px #915EFF, 0 0 6px white' 
                        }}
                      >
                        {word.text}
                      </span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real Projects that Deliver Results</h1>
          </motion.span>
        </div>

        <div className="mt-6 md:mt-20 flex flex-wrap gap-7 justify-center items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
