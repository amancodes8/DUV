import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import ChatBot from '../ChatBot';

function Contact() {
  return (
    <div className=' w-screen bg-white h-fit py-10 px-5 mt-20 sm:mt-40 flex flex-col gap-16 justify-center items-center overflow-x-hidden overflow-y-auto text-white'>

      {/* Hero Section */}
      <div className='mt-8 w-full h-[30vh] flex flex-col justify-center items-center bg-blue-900 px-4 rounded-md'>
        <h1 className='text-4xl font-bold text-white drop-shadow-lg'>Get In Touch With Us</h1>
        <p className='text-xl mt-4 text-center text-gray-200 drop-shadow-lg'>
          We're here to help and answer any questions you might have. We look forward to hearing from you!
        </p>
      </div>

      {/* Contact Form Section */}
      <div className='w-full lg:w-[60%] bg-blue-900 p-10  text-black rounded-lg shadow-2xl'>
        <h2 className='text-3xl mb-5 text-white'>Send Us a Message</h2>
        <form className='flex flex-col gap-5'>
          <input type="text" placeholder="Your Name" className='p-3 rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400' />
          <input type="email" placeholder="Your Email" className='p-3 rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400' />
          <textarea rows="5" placeholder="Your Message" className='p-3 rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400'></textarea>
          <button type="submit" className='px-5 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 font-bold'>Submit</button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className='w-full lg:w-[80%] text-white flex flex-col lg:flex-row justify-between items-start gap-10'>
        <div className='w-full lg:w-1/3 p-6 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg shadow-lg'>
          <h2 className='text-3xl mb-5 text-white'>Contact Information</h2>
          <p className='text-lg mb-4'><FaPhone className='inline mr-2 rotate-90 text-blue-400' /> Phone: <span className='text-blue-400'>+9196253 96652</span>, <span className='text-blue-400'>+9198911 80055</span></p>
          <p className='text-lg mb-4'><FaEnvelope className='inline mr-2 text-blue-400' /> Email: duvinternationalschool@gmail.com</p>
          <p className='text-lg mb-4 flex items-center'>
            <FaFacebook className='text-2xl text-blue-600' />
            <a className='ml-3 text-blue-400 hover:underline' href="https://www.facebook.com/profile.php?id=100065049139650&name=xhp_nt__fb__action__open_user" target="_blank" rel="noopener noreferrer">
              Follow us on Facebook
            </a>
          </p>
          <p className='text-lg'><FaMapMarkerAlt className='inline mr-2 text-blue-400' /> HCR6+M9W, Parthala Khanjarpur, Sector 123, Noida, Uttar Pradesh 201307</p>
        </div>

        {/* Office Hours Section */}
        <div className='w-full lg:w-1/3 text-white p-6 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg shadow-lg'>
          <h2 className='text-3xl mb-5 text-white'>Office Hours</h2>
          <p className='text-lg mb-3'>Monday - Friday: 9 AM - 6 PM</p>
          <p className='text-lg mb-3'>Saturday: 10 AM - 4 PM</p>
          <p className='text-lg'>Sunday: Closed</p>
        </div>
      </div>

      {/* FAQs Section */}
      <div className='w-full text-black lg:w-[80%]'>
        <h2 className='text-4xl mb-10 text-black'>Frequently Asked Questions (FAQs)</h2>
        <div className='space-y-5'>
          <div>
            <h3 className='text-2xl font-semibold text-black'>How can I reach customer support?</h3>
            <p className='text-gray-700'>You can reach us through the contact form above, or by calling us at +9196253 96652 during School hours.</p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold text-black'>What is the response time?</h3>
            <p className='text-gray-700'>We aim to respond to all inquiries within 24-48 hours.</p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold text-black'>Where are you located?</h3>
            <p className='text-gray-700'>We are located at HCR6+M9W, Parthala Khanjarpur, Sector 123, Noida, Uttar Pradesh 201307. Visit us during School hours!</p>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className='w-full lg:w-[80%] flex flex-col gap-5'>
        <h2 className='text-4xl text-black'>Additional Information</h2>
        <p className='text-lg text-gray-700'>
          Feel free to drop by our office or give us a call. Our friendly staff is always here to assist you with any questions or concerns. We look forward to helping you!
        </p>
      </div>

      {/* ChatBot Component */}
      <div className='w-full flex justify-center py-10'>
        <ChatBot />
      </div>
    </div>
  );
}

export default Contact;
