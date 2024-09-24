import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';
import { FaSchool, FaUsers, FaStar, FaCode, FaGlobe, FaBullseye } from 'react-icons/fa';

const sections = [
  {
    title: "About Us",
    icon: <FaSchool />,
    content: "DUV International School, established in 2020, has quickly emerged as a beacon of excellence in education in Noida. Our school is committed to nurturing well-rounded individuals through a combination of modern infrastructure, highly qualified faculty, innovative teaching methods, and a diverse range of extracurricular activities."
  },
  {
    title: "Our Vision",
    icon: <FaStar />,
    content: "At DUV International, we believe that education is the key to unlocking potential and shaping the leaders of tomorrow. Our vision is to provide a dynamic learning environment that fosters academic excellence, creativity, and character development, empowering students to become global citizens who can thrive in an ever-changing world."
  },
  {
    title: "Our Mission", // New Mission Section
    icon: <FaBullseye />,
    content: "Our mission is to create an inclusive, compassionate, and innovative learning environment where every student feels valued and is encouraged to pursue their full potential. We strive to build responsible and confident individuals with the skills, knowledge, and attitudes to succeed in their personal and professional lives."
  },
  {
    title: "Technology-Driven Education",
    icon: <FaCode />,
    content: "In this digital era, we integrate technology seamlessly into our educational framework. Our smart classrooms, online learning platforms, and virtual labs enable students to access the latest information and enhance their learning experience."
  },
  {
    title: "Global Perspectives",
    icon: <FaGlobe />,
    content: "We offer our students a global education through international exchange programs and collaborations with foreign institutions. This prepares them to develop a global mindset and thrive in a multicultural world."
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 mt-40 min-h-screen">
      <h1 className="sm:text-5xl text-center text-white mb-12 font-extrabold text-xl">About DUV International School</h1>

      {/* Navigation Links */}
      <nav className="text-center mb-10">
        {sections.map((section, index) => (
          <Link
            key={index}
            to={`section-${index}`}
            smooth={true}
            duration={800} // Smooth scroll duration
            className="text-white mx-3 p-2 transition-all hover:text-yellow-400 hover:underline"
          >
            {section.title}
          </Link>
        ))}
      </nav>

      {/* Content Sections */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {sections.map((section, index) => (
          <Element key={index} name={`section-${index}`}>
            <motion.div
              className="bg-gradient-to-r from-gray-900 to-gray-700 p-8 rounded-lg shadow-xl transition-transform hover:scale-105"
              initial={{ opacity: 0, translateY: 30 }} // Start slightly below
              whileInView={{ opacity: 1, translateY: 0 }} // End position
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }} // Smooth transition
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl text-yellow-400 mr-3">
                  {section.icon}
                </div>
                <h2 className="text-3xl text-white">{section.title}</h2>
              </div>
              <p className="text-lg text-gray-300">{section.content}</p>
            </motion.div>
          </Element>
        ))}
      </div>
    </div>
  );
};

export default About;
