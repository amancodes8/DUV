import React from 'react';
import { motion } from 'framer-motion';

const PrePrimary = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
  };

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
   <div className='mt-24 sm:mt-40'>
     <motion.div
      className="p-6 bg-white min-h-screen mt-30"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-green-700"
        variants={containerVariants}
      >
        Pre-Primary Curriculum
      </motion.h1>

      <motion.p className="text-lg text-gray-800 mb-6" variants={containerVariants}>
        The Child Centric Curriculum in Pre-Primary is in accordance with the Play-way method with activity-based learning. The curriculum is designed to cater to each child’s potential and interests.
      </motion.p>

      <motion.p className="text-lg text-gray-800 mb-6" variants={containerVariants}>
        Activities like Painting, Singing, Dancing, Moral Values, Sports, Storytelling, Karate, and various Competitions and Celebrations provide ample opportunities to develop and showcase creativity.
      </motion.p>

      <motion.p className="text-lg text-gray-800 mb-6" variants={containerVariants}>
        A variety of hands-on activities promote first-hand experiences that support learning. Montessori education recognizes that children learn in different ways, accommodating all learning styles.
      </motion.p>

      <motion.h2
        className="text-3xl font-semibold mb-4 text-green-600"
        variants={containerVariants}
      >
        Following are the Activities Included in the Curriculum:
      </motion.h2>

      <motion.ul
        className="list-disc pl-6 mb-8 space-y-3 text-gray-900"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={itemVariants}>Morning Assembly</motion.li>
        <motion.li variants={itemVariants}>Swings, Climbers, Slides</motion.li>
        <motion.li variants={itemVariants}>Nature Walk</motion.li>
        <motion.li variants={itemVariants}>
          Activity Room: Ball Pool, Puzzles, Role Play, Flash Cards, Clay Zone, Projector, Story Books, etc.
        </motion.li>
        <motion.li variants={itemVariants}>Computer Literacy Programme</motion.li>
        <motion.li variants={itemVariants}>Interactive Boards and Speakers in Classrooms</motion.li>
        <motion.li variants={itemVariants}>Art and Craft</motion.li>
        <motion.li variants={itemVariants}>Festivals, Special Programmes, Birthday Celebrations</motion.li>
        <motion.li variants={itemVariants}>Winter Carnival, Sports Day, and Annual Day</motion.li>
        <motion.li variants={itemVariants}>Annual Exhibition of Art and Craft</motion.li>
        <motion.li variants={itemVariants}>Excursions, Outings, and Picnics</motion.li>
        <motion.li variants={itemVariants}>Annual Concert with 100% participation</motion.li>
        <motion.li variants={itemVariants}>Sports Activities</motion.li>
      </motion.ul>

      <motion.p className="text-lg text-gray-800" variants={containerVariants}>
        Children learn through the play-way method, where learning is fun, interactive, and personalized to each child's growth and development.
      </motion.p>
    </motion.div>
   </div>
  );
};

export default PrePrimary;
