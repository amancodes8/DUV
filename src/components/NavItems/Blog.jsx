import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "How to Prepare Your Child for School",
    author: "John Doe",
    date: "September 15, 2024",
    description: "Tips and tricks to help your child get ready for their first day of school. Learn how to create a comfortable and motivating environment for learning.",
    content: "In addition to the tips above, it's important to maintain open communication with your child's teachers. Set a routine early on, ensuring your child gets enough sleep, eats a nutritious breakfast, and has all the supplies they need for the day. Encourage them to be independent but also reassure them that it's okay to ask for help when needed."
  },
  {
    title: "The Benefits of a Strong School-Parent Partnership",
    author: "Jane Smith",
    date: "August 20, 2024",
    description: "Discover how a close relationship between schools and parents can improve your child's education and personal development.",
    content: "A strong school-parent partnership ensures that your child receives the best support both in school and at home. Regularly attend parent-teacher conferences, volunteer for school activities, and always stay updated on school policies. Collaborating with educators helps to identify any challenges your child may face, allowing you to address them early on."
  },
  {
    title: "Understanding the Admissions Process",
    author: "Michael Lee",
    date: "July 5, 2024",
    description: "A complete guide to navigating the admissions process at DUV International School, from application to acceptance.",
    content: "The admissions process may seem overwhelming, but preparation is key. Start by gathering all required documents, and make sure your application is completed before the deadline. Attend open houses, talk to current parents, and research the school's curriculum. Once accepted, ensure your child is ready for the academic and social transition."
  },
  {
    title: "The Importance of Extracurricular Activities",
    author: "Emily White",
    date: "June 12, 2024",
    description: "Explore how extracurricular activities can enhance your child's academic performance and social skills.",
    content: "Extracurricular activities not only provide children with a break from academics but also help them develop important life skills such as time management, teamwork, and leadership. Encourage your child to try different activities until they find one they enjoy. This can lead to better academic performance and a more well-rounded education."
  }
];

const Blog = () => {
  // State to manage the expanded posts
  const [expandedPosts, setExpandedPosts] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Toggle the expanded state of each post
  const toggleReadMore = (index) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-slate-800 p-5 mt-40">
      <h1 className="text-4xl text-center text-white mb-8">Our Blog</h1>

      {/* Blog Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-slate-900 p-6 rounded-lg shadow-lg text-white"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 text-sm mb-1">By {post.author} | {post.date}</p>
            <p className="text-gray-300 mb-4">{post.description}</p>

            {/* Conditionally render full content if expanded */}
            {expandedPosts[index] && (
              <p className="text-gray-300 mb-4">{post.content}</p>
            )}

            {/* Read More / Show Less Button */}
            <button
              onClick={() => toggleReadMore(index)}
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              {expandedPosts[index] ? 'Show Less' : 'Read More'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
