// News.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';
import CalendarPage from '../CalendarPage';

const articles = [
  {
    title: "New Sports Complex Inauguration",
    date: "2024-09-10",
    content: "We are excited to announce the inauguration of our new sports complex, which includes state-of-the-art facilities for various sports and physical activities."
  },
  {
    title: "Annual Cultural Fest 2024",
    date: "2024-08-20",
    content: "Our Annual Cultural Fest was a resounding success, showcasing the incredible talents of our students in music, dance, and drama."
  },
  {
    title: "Community Service Initiative",
    date: "2024-07-15",
    content: "Our students participated in a community service initiative aimed at environmental conservation, planting trees in local parks."
  },
  {
    title: "Technology Integration Workshop",
    date: "2024-06-30",
    content: "We held a workshop on integrating technology into education, helping our teachers enhance their teaching methodologies."
  },
  {
    title: "Student Exchange Program",
    date: "2024-05-25",
    content: "We are proud to announce our first international student exchange program with a school in Europe, enhancing global learning opportunities."
  },
];

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-5 mt-40">
      <h1 className="text-4xl text-center text-white mb-8">Latest News at DUV International School</h1>

      <nav className="text-center mb-5">
        {articles.map((article, index) => (
          <Link
            key={index}
            to={`article-${index}`}
            smooth={true}
            duration={500}
            className="text-white mx-2 hover:underline"
          >
            {article.title}
          </Link>
        ))}
      </nav>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {articles.map((article, index) => (
          <Element key={index} name={`article-${index}`}>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105"
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <h2 className="text-xl text-gray-800 mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.date}</p>
              <p className="text-gray-700 text-lg">{article.content}</p>
            </motion.div>
          </Element>
        ))}
      </div>
      <CalendarPage events={articles} />
    </div>
  );
}

export default News;
