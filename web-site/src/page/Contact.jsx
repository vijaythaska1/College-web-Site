import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     const { name, value } = e.target
  //     setFormData(prevState => ({ ...prevState, [name]: value }))
  //   }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Form submitted:', formData)
      setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: <i class="material-symbols-outlined">location_on</i>, text: '123 Dream College Way, Education City, ST 12345' },
    { icon: <i class="material-symbols-outlined">phone</i>, text: '+1 (555) 123-4567' },
    { icon:<i class="material-symbols-outlined">email</i> , text: 'info@dreamcollege.edu' },
  ]
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-center text-indigo-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-indigo-800 mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  //   onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  //   onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  //   onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  //   onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-indigo-800 text-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <span className="material-icons text-3xl mr-4">{info.icon}</span>
                  <p className="text-lg">{info.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                  <motion.a
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-indigo-800 p-3 rounded-full hover:bg-indigo-100 transition duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="material-icons">{social}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Interactive Map */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Find Us</h3>
              <div className="w-full h-64 bg-indigo-200 rounded-lg overflow-hidden">
                {/* Replace this div with an actual map component */}
                <div className="w-full h-full flex items-center justify-center text-indigo-800">
                  Interactive Map Placeholder
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How can I apply to Dream College?", a: "You can apply online through our admissions portal. Visit our Admissions page for more information." },
              { q: "What financial aid options are available?", a: "We offer various scholarships, grants, and loan options. Our Financial Aid office can provide detailed information." },
              { q: "Are campus tours available?", a: "Yes, we offer both in-person and virtual campus tours. You can schedule a tour through our website." }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact