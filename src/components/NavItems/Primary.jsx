import { motion } from 'framer-motion';

const Primary = () => {
  return (
   <div className='mt-40'>
 <motion.div
      className="min-h-screen bg-gradient-to-r from-blue-100 to-pink-100 p-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-700">
          Primary Classes Curriculum
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          We at the Primary Wing believe that the mind, like a parachute, works best when opened.
        </p>
      </div>

      <div className="space-y-6">
        <p className="text-lg text-gray-600">
          Keeping this initiative in mind, the scholastic and co-scholastic aspects of the curriculum and the evaluation procedure are developed to build the student's knowledge, potential & talents to the optimum level. Classes are colorful, joyful, well-ventilated rooms, with a friendly environment, and a theme-based curriculum.
        </p>

        <p className="text-lg text-gray-600">
          The curriculum includes English, Hindi, Math, Environmental Studies, Moral Values, Art and Craft, General Knowledge, Computer Literacy Programme, and co-curricular activities.
        </p>

        <p className="text-lg text-gray-600">
          Students pursue their hobbies and interests in classroom activities. The following exposures are given to the students:
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Morning Assemblies</li>
          <li>English Club</li>
          <li>Math Club</li>
          <li>Computer Laboratories</li>
          <li>Handicraft</li>
          <li>Puppet Making</li>
          <li>Painting, Sketching, and Paper Folding</li>
          <li>Rangoli & Floral Designing</li>
          <li>Sports - Indoor & Outdoor Games</li>
          <li>Story Telling</li>
          <li>Debate Club</li>
        </ul>

        <p className="text-lg text-gray-600">
          A number of celebrations, school functions, including the Annual Concert, Annual School Social Science Exhibition, Annual School Science Exhibition, Child Fair with Parents, Annual School Sports Day, Mathematics and Science Olympiads, Special Assemblies, and various competitions provide ample opportunities for our students to develop and showcase their creativity and talent.
        </p>
      </div>
    </motion.div>
   </div>
  );
};

export default Primary;
