import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const admissionDetails = {
  keyDates: [
    { event: "Application Start Date", date: "October 1, 2024" },
    { event: "Application Deadline", date: "December 15, 2024" },
    { event: "Entrance Exam Date", date: "January 10, 2025" },
    { event: "Interview Date", date: "January 20, 2025" },
    { event: "Admission Notification", date: "February 5, 2025" },
  ],
  details: "At DUV International School, we aim to provide a comprehensive admissions process to ensure that every applicant is given due consideration. We welcome applications from students of all backgrounds, and we encourage you to visit our campus to learn more about our programs and facilities."
};



const admissionProcess = [
  "Submit the online application form available on our website.",
  "Attend the entrance exam on the specified date.",
  "After passing the entrance exam, attend an interview with school officials.",
  "Upon successful interview and document verification, you will receive an admission offer.",
  "Complete the fee payment and other formalities to secure your seat."
];

const Admission = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', enquiryType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.enquiryType) newErrors.enquiryType = "Enquiry type is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', enquiryType: '', message: '' }); // Reset form
  };

  return (
    <div className="bg-white text-black p-5 mt-20 sm:mt-40">
      <h1 className="text-4xl text-center text-black mt-8 mb-8">Admissions at DUV International School</h1>

      {/* Key Dates Section */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl text-white">Key Dates</h2>
        <ul className="text-black mt-4">
          {admissionDetails.keyDates.map((item, index) => (
            <li key={index} className="mb-2">{item.event}: <span className="text-gray-400">{item.date}</span></li>
          ))}
        </ul>
      </div>

      {/* Admission Process Section */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl text-black">Admission Process</h2>
        <ol className="text-black mt-4 list-decimal list-inside">
          {admissionProcess.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>

      <div className="mb-10 text-center">
        <h2 className="text-xl text-white">Fee Structure</h2>
        <h1 className='text-black text-2xl opacity-80'>Please Contact Us to get Fee details</h1>
      </div>

      {/* Admission Enquiry Form */}
      <motion.div
        className="bg-slate-900 p-6 rounded-lg shadow-lg max-w-md mx-auto"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h2 className="text-xl text-white mb-4">Admission Enquiry Form</h2>
        {submitted && <p className="text-green-500 mb-4">Your enquiry has been submitted successfully!</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 mb-4 rounded-md ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 mb-4 rounded-md ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 mb-2">{errors.email}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-2 mb-4 rounded-md ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && <p className="text-red-500 mb-2">{errors.phone}</p>}

          <select
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className={`w-full p-2 mb-4 rounded-md ${errors.enquiryType ? 'border-red-500' : ''}`}
          >
            <option value="">Select Enquiry Type</option>
            <option value="New Admission">New Admission</option>
            <option value="Fee Related Query">Fee Related Query</option>
            <option value="Request Call Back">Request Call Back</option>
          </select>
          {errors.enquiryType && <p className="text-red-500 mb-2">{errors.enquiryType}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`w-full p-2 mb-4 rounded-md ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && <p className="text-red-500 mb-2">{errors.message}</p>}

          <button type="submit" className="w-full bg-blue-600 text-black p-2 rounded-md">Submit</button>
        </form>
      </motion.div>


      <div className="mt-10 text-center">
        <h2 className="text-2xl text-black">Admission Details</h2>
        <p className="text-black mt-4">{admissionDetails.details}</p>
      </div>
    </div>
  );
}

export default Admission;
