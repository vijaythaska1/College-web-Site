import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const SingleCourseView = () => {
  // This would typically come from a database or API
  const course = {
    name: "Introduction to Computer Science",
    code: "CS101",
    department: "Computer Science",
    credits: 4,
    description: "This course provides a comprehensive introduction to computer science, covering fundamental concepts such as algorithms, data structures, and programming paradigms. Students will gain hands-on experience with Python programming and explore the impact of computing on society.",
    prerequisites: ["None"],
    instructors: [
      { name: "Dr. Jane Smith", image: "/placeholder.svg" },
      { name: "Prof. John Doe", image: "/placeholder.svg" }
    ],
    schedule: [
      { day: "Monday", time: "10:00 AM - 11:30 AM" },
      { day: "Wednesday", time: "10:00 AM - 11:30 AM" },
      { day: "Friday", time: "2:00 PM - 3:30 PM (Lab)" }
    ],
    topics: [
      "Introduction to Programming",
      "Data Types and Variables",
      "Control Structures",
      "Functions and Modules",
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms and Complexity",
      "Web Development Basics"
    ],
    textbooks: [
      { title: "Introduction to Computer Science using Python", authors: "Charles Dierbach", link: "#" },
      { title: "Think Python: How to Think Like a Computer Scientist", authors: "Allen B. Downey", link: "#" }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {course.name}
        </motion.h1>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Course Details</h2>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Course Code:</span> {course.code}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Department:</span> {course.department}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Credits:</span> {course.credits}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Prerequisites:</span> {course.prerequisites.join(', ') || 'None'}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Course Schedule</h2>
              {course.schedule.map((session, index) => (
                <p key={index} className="text-gray-700 mb-2">
                  <span className="font-semibold">{session.day}:</span> {session.time}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Course Description</h2>
          <p className="text-gray-700">{course.description}</p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Course Topics</h2>
          <ul className="list-disc list-inside text-gray-700">
            {course.topics.map((topic, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {topic}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.instructors.map((instructor, index) => (
              <motion.div 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <img src={instructor.image} alt={instructor.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-800">{instructor.name}</h3>
                  <p className="text-gray-600">Instructor</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Required Textbooks</h2>
          <ul className="space-y-4">
            {course.textbooks.map((book, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <span className="material-icons text-indigo-600 mr-2">book</span>
                <div>
                  <h3 className="font-semibold text-gray-800">{book.title}</h3>
                  <p className="text-gray-600">by {book.authors}</p>
                  <Link href={book.link}>
                    <a className="text-indigo-600 hover:text-indigo-800 transition duration-300">View Details</a>
                  </Link>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link href="/courses">
            <motion.a 
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to All Courses
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default SingleCourseView