import React, { useState, useEffect } from 'react';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const content = [
  {
    image: "./images/bg2.jpeg",
    text: 'WELCOME TO DUV INTERNATIONAL SCHOOL',
  },
  {
    image: './images/2nd.jpeg',
    text: "Empowering students to discover their potential and achieve greatness through holistic education",
  },
];

const missionVisionContent = [
  {
    text: 'TO INSPIRE AND NURTURE THE FUTURE GENERATION OF LEADERS BY',
    text2: 'PROVIDING A QUALITY EDUCATION THAT FOSTERS CREATIVITY AND CRITICAL THINKING.'
  },
  {
    text: 'TO BE RECOGNIZED GLOBALLY AS AN INSTITUTION THAT DEVELOPS WELL-ROUNDED',
    text2: 'INDIVIDUALS WHO ARE PREPARED TO TACKLE THE CHALLENGES OF TOMORROW.'
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [currentMissionVisionIndex, setCurrentMissionVisionIndex] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      setFade(true);
    }, 500);
  };

  const prevContent = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
      setFade(true);
    }, 100);
  };

  useEffect(() => {
    setFade(true);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(nextContent, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const missionVisionInterval = setInterval(() => {
      setCurrentMissionVisionIndex((prevIndex) => (prevIndex + 1) % missionVisionContent.length);
    }, 2000);
    return () => clearInterval(missionVisionInterval);
  }, []);

  const handleAdmissionClick = () => {
    navigate('/admission');
  };

  return (
    <div className='w-screen h-fit py-10 mt-20 sm:mt-32 flex flex-col gap-10 px-10 justify-center overflow-x-hidden overflow-y-auto items-center bg-white'>
      {/* Hero Section */}
      <div className='relative w-screen h-[70vh] sm:h-screen flex flex-col items-center justify-center'>
        <img
          src={content[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className={`w-full h-full rounded-md object-cover transition-opacity duration-500 ${fade ? 'fade-in' : 'fade'}`}
          style={{ opacity: 0.8 }}
        />
        <p className={`absolute leading-[60px] font-serif text-center  transition-opacity duration-500 uppercase  text-shadow text-white shadow-black  ${fade ? 'fade-in' : 'fade'}`}>
          {currentIndex === 1 ? (
            <span className="text-2xl sm:text-4xl">{content[currentIndex].text}</span>
          ) : (
            <span className="text-4xl sm:text-[10vh]">{content[currentIndex].text}</span>
          )}
        </p>

        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between gap-2 w-full px-10'>
          <button onClick={prevContent} className='px-2 py-2 rounded-full bg-white bg-opacity-80 text-lg sm:text-4xl shadow-lg'>
            <FcPrevious />
          </button>
          <button onClick={handleAdmissionClick} className='text-xl sm:text-4xl bg-sky-700 rounded-[30px] text-white px-4 py-2 flex justify-center items-center hover:bg-sky-800 transition duration-300 shadow-lg'>
            Admission Open
          </button>
          <button onClick={nextContent} className='px-2 py-2 rounded-full bg-white bg-opacity-80 text-lg sm:text-4xl shadow-lg'>
            <FcNext />
          </button>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className='w-full text-center py-10'>
        <h2 className='sm:text-5xl text-3xl mb-6 font-serif text-black drop-shadow-md'>OUR MISSION <span className='sm:text-[60px] text-[40px]'>&</span> VISION</h2>
        <div className='bg-blue-900  p-6 rounded-xl shadow-lg'>
          <p className='text-white text-2xl uppercase'>{missionVisionContent[currentMissionVisionIndex].text}</p>
          <p className='text-white text-2xl uppercase'>{missionVisionContent[currentMissionVisionIndex].text2}</p>
        </div>
      </div>

      {/* Principal's and Director's Message Section */}
      <div className='w-full flex flex-col lg:flex-row justify-between items-center py-10 gap-4'>
        {/* Principal's Message */}
        <div className='flex flex-col lg:flex-row bg-blue-900 justify-center items-center px-2 border border-black p-2 rounded-lg shadow-xl'>
          <img
            src='./images/principal.jpeg'
            alt="Principal"
            className='min-w-60 h-60 object-cover rounded-full mb-6 lg:mb-0 lg:mr-6 shadow-lg flex items-center justify-center'
          />
          <div>
            <h3 className='text-3xl mb-4 text-center text-white font-semibold'>Principal's Message</h3>
            <p className='text-lg text-center text-white mb-4'>
              "At DUV International School, we strive to create a nurturing environment that empowers students to grow academically and personally."
            </p>
            <p className='text-lg text-white text-center '>
              "We believe in fostering creativity, critical thinking, and a love for learning in all our students."
            </p>
          </div>
        </div>

        {/* Director's Message */}
        <div className='bg-blue-900 flex flex-col lg:flex-row justify-center items-center px-2 border border-black p-2 rounded-lg shadow-xl'>
          <div className='lg:mr-6 lg:order-2'>
            <img
              src="./images/director.png"
              alt="Director"
              className='min-w-60 h-60 object-cover rounded-full mb-6 lg:mb-0 shadow-lg'
            />
          </div>
          <div className='lg:order-1'>
            <h3 className='text-3xl mb-4 text-center text-white font-semibold'>Director's Message</h3>
            <p className='text-lg text-white mb-4 text-center'>
              "Our mission is to inspire and guide the next generation of leaders through holistic education."
            </p>
            <p className='text-lg text-white text-center'>
              "We aim to be globally recognized as an institution that nurtures well-rounded individuals prepared for the challenges of tomorrow."
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='w-full  py-10'>
        <h2 className='text-5xl mb-6 font-serif text-black text-center drop-shadow-md'>WHY CHOOSE US?</h2>
        <div className='bg-blue-900 p-6 rounded-xl shadow-lg'>
          <p className='text-lg text-white mb-4'>
            AT DUV INTERNATIONAL SCHOOL, WE FOCUS ON HOLISTIC DEVELOPMENT, BLENDING ACADEMICS WITH EXTRACURRICULAR ACTIVITIES.
          </p>
          <ul className='list-disc list-inside text-lg text-white w-full'>
            <li>EXPERIENCED FACULTY</li>
            <li>MODERN INFRASTRUCTURE</li>
            <li>DIVERSE EXTRACURRICULAR ACTIVITIES</li>
            <li>PERSONALIZED LEARNING APPROACH</li>
            <li>STRONG COMMUNITY ENGAGEMENT</li>
          </ul>
        </div>
      </div>

      {/* Parent Testimonials Section */}
      <div className='w-full text-center py-10'>
        <h2 className='sm:text-5xl text-3xl mb-6 font-serif text-black drop-shadow-md'>PARENT TESTIMONIALS</h2>
        <div className='bg-blue-900  p-6 rounded-xl shadow-lg'>
          <p className='text-lg text-gray-300 mb-4'>
            "DUV INTERNATIONAL SCHOOL HAS TRANSFORMED OUR CHILD'S LEARNING EXPERIENCE!"
          </p>
          <p className='text-lg text-gray-300 mb-4'>
            "THE FACULTY IS DEDICATED AND TRULY CARES ABOUT THE STUDENTS' SUCCESS."
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className='w-full text-center py-10'>
        <h2 className='text-5xl mb-6 font-serif text-black drop-shadow-md'>CONTACT US</h2>
        <p className='text-lg text-gray-600'>
          For admission inquiries, please contact us at: <span className='text-sky-700'>duvinternationalschool@gmail.com</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
