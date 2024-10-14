import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const ScheduleCampusVisit = () => {
  const [date, setDate] = useState('')
  const [visitType, setVisitType] = useState('individual')
  const [groupSize, setGroupSize] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { date, visitType, groupSize, name, email, interests })
  }

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Schedule Your Campus Visit
        </motion.h1>

        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="visit-type" className="block text-lg font-semibold text-indigo-800 mb-2">Visit Type</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    name="visit-type"
                    value="individual"
                    checked={visitType === 'individual'}
                    onChange={() => setVisitType('individual')}
                  />
                  <span className="ml-2">Individual</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    name="visit-type"
                    value="group"
                    checked={visitType === 'group'}
                    onChange={() => setVisitType('group')}
                  />
                  <span className="ml-2">Group</span>
                </label>
              </div>
            </div>

            {visitType === 'group' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="group-size" className="block text-lg font-semibold text-indigo-800 mb-2">Group Size</label>
                <select
                  id="group-size"
                  value={groupSize}
                  onChange={(e) => setGroupSize(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select group size</option>
                  <option value="5-10">5-10 people</option>
                  <option value="11-20">11-20 people</option>
                  <option value="21+">21+ people</option>
                </select>
              </motion.div>
            )}

            <div>
              <label htmlFor="visit-date" className="block text-lg font-semibold text-indigo-800 mb-2">Select Visit Date</label>
              <input
                type="date"
                id="visit-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-indigo-800 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-indigo-800 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interests" className="block text-lg font-semibold text-indigo-800 mb-2">Areas of Interest</label>
              <select
                id="interests"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select your interests</option>
                <option value="academics">Academics</option>
                <option value="athletics">Athletics</option>
                <option value="arts">Arts & Culture</option>
                <option value="campus-life">Campus Life</option>
                <option value="research">Research Opportunities</option>
              </select>
            </div>

            <motion.div 
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="submit"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Schedule My Visit
              </button>
            </motion.div>
          </form>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">What to Expect During Your Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <i className="material-symbols-outlined">map</i>, title: 'Campus Tour', description: 'Explore our beautiful campus with a student guide.' },
              { icon: <i className="material-symbols-outlined">school</i>, title: 'Information Session', description: 'Learn about admissions, academics, and student life.' },
              { icon: <i className="material-symbols-outlined">people</i>, title: 'Meet Faculty & Students', description: 'Interact with our community and ask questions.' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <span className="material-icons text-4xl text-indigo-600 mb-2">{item.icon}</span>
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xl text-gray-700 mb-4">
            Can't visit in person? Take our virtual tour!
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300">
          <Link to={"/VirtualTour"}></Link>  Start Virtual Tour
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default ScheduleCampusVisit