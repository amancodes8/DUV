import React from 'react';
import { FaComputer } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { FaCampground } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdOutlineScience } from "react-icons/md";
import { FaMusic } from "react-icons/fa";

const facilities = [
  {
    title: "Computer Labs",
    icon: <FaComputer />,
    content: "The school is equipped with state-of-the-art computer labs, providing students with hands-on experience in technology. The labs are furnished with the latest desktop computers, high-speed internet access, and a variety of software tools to support learning in subjects like coding, digital literacy, and graphic design. These labs are managed by qualified instructors to guide students in using technology effectively for both educational and personal growth.",
    bgColor: "bg-blue-500"
  },
  {
    title: "Classrooms",
    icon: <SiGoogleclassroom />,
    content: "Spacious and well-ventilated classrooms provide a comfortable learning environment for students. Each classroom is equipped with modern teaching aids such as smart boards, projectors, and ergonomic furniture to promote engagement and effective learning. The seating arrangements are designed to encourage interactive teaching methods, ensuring every student can participate actively in discussions and activities.",
    bgColor: "bg-green-500"
  },
  {
    title: "Playground and Outdoor Areas",
    icon: <FaCampground />,
    content: "The school offers spacious playgrounds and outdoor areas where students can engage in physical activities and recreational games. These spaces are designed to promote physical well-being and social interaction among students of all age groups.",
    bgColor: "bg-yellow-500"
  },
  {
    title: "Library",
    icon: <IoLibrary />,
    content: "Our library is a treasure trove of knowledge, stocked with a wide range of books, magazines, and digital resources. Students can explore literature across various genres, conduct research, and participate in reading programs. The library also hosts workshops and events to promote a culture of reading and learning.",
    bgColor: "bg-purple-500"
  },
  {
    title: "Science Labs",
    icon: <MdOutlineScience />,
    content: "The school features well-equipped science labs for physics, chemistry, and biology, allowing students to conduct experiments and gain practical knowledge. These labs are designed to foster curiosity and innovation, enabling students to explore scientific concepts in a hands-on manner under the supervision of experienced faculty.",
    bgColor: "bg-red-500"
  },
  {
    title: "Art and Music Rooms",
    icon: <FaMusic />,
    content: "Creativity flourishes in our dedicated art and music rooms, equipped with supplies and instruments to nurture artistic talents. Students have the opportunity to engage in various art forms, including painting, sculpture, and music production.",
    bgColor: "bg-orange-500"
  }
];

const Facilities = () => {

  return (
    <div className="min-h-screen mt-8 overflow-x-hidden overflow-y-auto px-4 no-scrollbar bg-white">
      <h1 className="text-4xl text-center text-black mb-8 mt-4">Facilities at DUV International School</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg p-6 text-white ${facility.bgColor}`}
          >
            <h2 className="text-2xl flex items-center gap-4 mb-4 font-semibold">{facility.title} <div className='text-3xl text-blue-800'>{facility.icon}</div></h2>
            <p>{facility.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
