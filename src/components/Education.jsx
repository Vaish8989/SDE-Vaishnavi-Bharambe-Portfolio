import { motion } from "framer-motion";
import React from "react";

import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ edu, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="black-glass p-6 rounded-2xl w-full sm:w-[350px] purple-glow flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-[#111] flex justify-center items-center shadow-[0_0_10px_rgba(145, 94, 255,0.4)]">
             <img src={edu.icon} alt={edu.company_name} className="w-8 h-8 object-contain rounded-full" />
          </div>
          <p className="text-[#915EFF] text-[12px] font-semibold">{edu.date}</p>
        </div>
        <h3 className="purple-text-gradient text-[20px] font-bold mb-2">
          {edu.title}
        </h3>
        <p className="text-gray-300 text-[14px] font-medium mb-4">{edu.company_name}</p>
        <ul className="list-disc ml-5 space-y-1">
          {edu.points.map((point, idx) => (
            <li key={idx} className="text-gray-400 text-[13px] tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Academic Background
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {education.map((edu, index) => (
          <EducationCard
            key={`education-${index}`}
            edu={edu}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
