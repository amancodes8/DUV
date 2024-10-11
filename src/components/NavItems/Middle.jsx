import { motion } from 'framer-motion';

const Middle = () => {
  return (
    <div className='mt-40'>
      <motion.div
        className="min-h-screen bg-gradient-to-r from-green-100 to-yellow-100 p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-700">
            Middle Wing Curriculum
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            The middle wing strives to maintain excellence in academics and co-curricular activities.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            The curriculum is designed to challenge students to ask questions, enhance skills, conduct in-depth research, and build conceptual understanding. Each child is supported in fulfilling their unique potential with a balanced student-friendly environment.
          </p>

          <p className="text-lg text-gray-600">
            The curriculum is broadly designed on the guidelines issued by the Central Board of Secondary Education (CBSE), following the C.C.E (Continuous and Comprehensive Evaluation) pattern.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Subjects and Activities
            </h2>

            <p className="text-lg text-gray-600">
              The curriculum includes a combination of scholastic and co-scholastic activities:
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Scholastic: English, Hindi, Mathematics, Science, Social Science, AI, Moral Values, General Knowledge, Art & Craft.</li>
              <li>Co-Scholastic: Life Skills, Environment Awareness, Value Education, Performing Arts, Visual Arts, Competitions (Drawing, Painting, Sculpture).</li>
              <li>Health & Physical Education: Athletics, Yoga, Meditation, Sports (Cricket, Football, Kho-Kho, Indoor Games).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Extracurricular and Enrichment
            </h2>

            <p className="text-lg text-gray-600">
              Various extracurricular activities are conducted to provide a holistic educational experience, such as:
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Class Debates and Essay Writing</li>
              <li>Inter-School Competitions</li>
              <li>Excursions and Educational Tours (Local and Outstation)</li>
              <li>Sports Day and Science Olympiads</li>
              <li>Annual School Concert and Science Exhibitions</li>
            </ul>
          </div>

          <p className="text-lg text-gray-600">
            The middle wing ensures that students have numerous opportunities to explore their interests and excel in academics, co-curricular, and extracurricular activities, preparing them for the challenges of the competitive world.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Middle;
