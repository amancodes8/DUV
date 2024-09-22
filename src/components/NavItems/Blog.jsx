import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "How to Prepare Your Child for School",
    author: "John Doe",
    date: "September 15, 2024",
    description: "Tips and tricks to help your child get ready for their first day of school. Learn how to create a comfortable and motivating environment for learning."
  },
  {
    title: "The Benefits of a Strong School-Parent Partnership",
    author: "Jane Smith",
    date: "August 20, 2024",
    description: "Discover how a close relationship between schools and parents can improve your child's education and personal development."
  },
  {
    title: "Understanding the Admissions Process",
    author: "Michael Lee",
    date: "July 5, 2024",
    description: "A complete guide to navigating the admissions process at DUV International School, from application to acceptance."
  },
  {
    title: "The Importance of Extracurricular Activities",
    author: "Emily White",
    date: "June 12, 2024",
    description: "Explore how extracurricular activities can enhance your child's academic performance and social skills."
  }
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          // viewport={{ once: false }}
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 text-sm mb-1">By {post.author} | {post.date}</p>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <a href="#" className="text-blue-500 hover:text-blue-700">Read More</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
