import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CampusLife = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    { id: 'All', icon: <i class="material-symbols-outlined">dashboard</i> },
    { id: 'Academics', icon: <i class="material-symbols-outlined">school</i> },
    { id: 'Sports', icon: <i class="material-symbols-outlined">sports_soccer</i> },
    { id: 'Arts', icon: <i class="material-symbols-outlined">palette</i> },
    { id: 'Community', icon: <i class="material-symbols-outlined">people</i> },
  ]

  const campusActivities = [
    { id: 1, title: 'State-of-the-art Libraries', category: 'Academics', image: 'https://www.gstatic.com/webp/gallery/1.jpg', description: 'Access to vast knowledge resources and quiet study spaces.' },
    { id: 2, title: 'Football Stadium', category: 'Sports', image: 'https://www.gstatic.com/webp/gallery/1.jpg', description: 'Home to our champion football team and exciting matches.' },
    { id: 3, title: 'Art Galleries', category: 'Arts', image: 'https://www.gstatic.com/webp/gallery/1.jpg', description: 'Showcasing student artworks and visiting exhibitions.' },
    { id: 4, title: 'Student Clubs', category: 'Community', image: 'https://www.gstatic.com/webp/gallery/1.jpg', description: 'Join diverse clubs and make lifelong friendships.' },
    { id: 5, title: 'Research Labs', category: 'Academics', image: 'https://www.gstatic.com/webp/gallery/1.jpg', description: 'Cutting-edge facilities for groundbreaking research.' },
    { id: 6, title: 'Fitness Center', category: 'Sports', image: 'https://www.gstatic.com/webp/gallery/1.jpg', description: 'Stay fit with our modern gym and fitness classes.' },
    { id: 7, title: 'Theater', category: 'Arts', image: 'https://www.gstatic.com/webp/gallery/1.jpg', description: 'Stage for drama productions and cultural events.' },
    { id: 8, title: 'Community Garden', category: 'Community', image: 'https://www.gstatic.com/webp/gallery/1.jpg', description: 'Grow organic produce and learn about sustainability.' },
  ]

  const filteredActivities = selectedCategory === 'All'
    ? campusActivities
    : campusActivities.filter(activity => activity.category === selectedCategory);

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
          Campus Life at Dream College
        </motion.h1>

        {/* Interactive 3D Rotating Globe */}
        <motion.div
          className="w-64 h-64 mx-auto mb-12"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full bg-indigo-600 shadow-lg flex items-center justify-center">
            <span className="text-white text-6xl">🌍</span>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 mx-2 rounded-full flex items-center ${selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-indigo-600'
                } hover:bg-indigo-700 hover:text-white transition duration-300`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-icons mr-2">{category.icon}</span>
              {category.id}
            </motion.button>
          ))}
        </motion.div>

        {/* Campus Activities Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredActivities.map((activity) => (
              <motion.div
                key={activity.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <motion.div
                  className="relative h-48"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {activity.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Student Testimonial */}
        <motion.div
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Student Spotlight</h2>
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="w-32 h-32 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-8"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://www.gstatic.com/webp/gallery/1.jpg"
                alt="Student"
                width={128}
                height={128}
                className="object-cover"
              />
            </motion.div>
            <div>
              <p className="text-gray-600 italic mb-4">
                "The vibrant campus life at Dream College has truly transformed my college experience. From joining diverse clubs to participating in cultural events, every day brings new opportunities for growth and friendship."
              </p>
              <p className="text-indigo-800 font-semibold">- Sarah Johnson, Class of 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Experience Dream College Life</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join our vibrant community and create unforgettable memories.
          </p>
          <motion.button
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Campus Tour
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default CampusLife