import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import { Award, Calendar, BookOpen, Trophy } from "lucide-react";
import { motion } from "framer-motion";
const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Inderprastha Engineering College",
      duration: "2023 – 2026",
      location: "Ghaziabad, Uttar Pradesh",
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "Govt Boys Sr. Sec. School, Chander Nagar",
      year: "2023",
      location: "Krishna Nagar, Delhi",
    },
    {
      degree: "Secondary (Class X)",
      institution: "Biglow's Public School",
      year: "2021",
      location: "Krishna Nagar, Delhi",
    },
  ];
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="min-h-fit relative overflow-hidden py-40 bg-[#04081A]">
      {}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-6 transition-all duration-300 bg-gray-900/60 backdrop-blur-sm ${hoveredIndex === index ? "border-teal-500 scale-[1.02]" : "border-blue-400/20"}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm">{edu.institution}</p>

                {edu.location && (
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    📍 {edu.location}
                  </p>
                )}

                <p className="text-gray-400 text-sm flex items-center gap-2">
                  📅 {edu.duration || edu.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default EducationSection;
