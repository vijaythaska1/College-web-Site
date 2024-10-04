import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Undergraduate', 'Graduate', 'Online']

  const courses = [
    { id: 1, name: 'Computer Science', category: 'Undergraduate', icon: 'computer', color: 'blue' },
    { id: 2, name: 'Business Administration', category: 'Undergraduate', icon: 'business', color: 'green' },
    { id: 3, name: 'Mechanical Engineering', category: 'Undergraduate', icon: 'build', color: 'red' },
    { id: 4, name: 'Data Science', category: 'Graduate', icon: 'analytics', color: 'purple' },
    { id: 5, name: 'Digital Marketing', category: 'Graduate', icon: 'campaign', color: 'pink' },
    { id: 6, name: 'Artificial Intelligence', category: 'Graduate', icon: 'psychology', color: 'indigo' },
    { id: 7, name: 'Web Development', category: 'Online', icon: 'code', color: 'yellow' },
    { id: 8, name: 'Graphic Design', category: 'Online', icon: 'brush', color: 'orange' },
    { id: 9, name: 'Project Management', category: 'Online', icon: 'assignment', color: 'teal' },
  ]

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Courses
        </motion.h1>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 mx-2 rounded-full ${
                selectedCategory === category 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-indigo-600'
              } hover:bg-indigo-700 hover:text-white transition duration-300`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-${course.color}-500`}
              >
                <div className="flex items-center mb-4">
                  <span className={`material-icons text-4xl text-${course.color}-500 mr-4`}>
                    {course.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Discover the exciting world of {course.name} and unlock your potential in this cutting-edge field.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-indigo-600">{course.category}</span>
                  <Link href={`/courses/${course.id}`} passHref>
                    <motion.a
                      className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <span className="material-icons ml-1">arrow_forward</span>
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Explore our courses and take the first step towards your dream career.
          </p>
          <motion.button
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default CoursesPage