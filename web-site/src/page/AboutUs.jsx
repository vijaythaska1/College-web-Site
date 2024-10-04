import React from 'react'
// import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Dream College
        </motion.h1>

        {/* Mission Statement */}
        <motion.section 
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At Dream College, our mission is to empower students with knowledge, skills, and values to excel in their chosen fields and make a positive impact on society. We strive to create a diverse and inclusive learning environment that fosters innovation, critical thinking, and personal growth.
          </p>
        </motion.section>

        {/* History */}
        <motion.section 
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Our History</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-4">
                Founded in 1965, Dream College has a rich history of academic excellence and innovation. From our humble beginnings with just 100 students, we have grown into a world-renowned institution with over 20,000 students from 100+ countries.
              </p>
              <p className="text-lg text-gray-700">
                Our journey has been marked by continuous growth, groundbreaking research, and a commitment to preparing students for the challenges of tomorrow.
              </p>
            </div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/placeholder.svg"
                alt="Dream College in 1965"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section 
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Top 50 Global Universities", icon: "school" },
              { title: "100+ Research Patents", icon: "biotech" },
              { title: "95% Graduate Employment Rate", icon: "work" },
              { title: "200+ Industry Partnerships", icon: "handshake" },
              { title: "$100M+ in Research Grants", icon: "paid" },
              { title: "50+ Nationally Ranked Programs", icon: "star" }
            ].map((achievement, index) => (
              <motion.div 
                key={index}
                className="bg-indigo-50 rounded-lg p-6 flex items-center"
                variants={fadeInUp}
              >
                <span className="material-icons text-4xl text-indigo-600 mr-4">{achievement.icon}</span>
                <h3 className="text-xl font-semibold text-indigo-800">{achievement.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Faculty */}
        <motion.section 
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Our Faculty</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our world-class faculty comprises leading experts, researchers, and industry professionals dedicated to providing an exceptional educational experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Emily Chen", role: "Dean of Computer Science", image: "/placeholder.svg" },
              { name: "Prof. Michael Johnson", role: "Head of Business School", image: "/placeholder.svg" },
              { name: "Dr. Sarah Patel", role: "Director of Research", image: "/placeholder.svg" }
            ].map((faculty, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-indigo-800">{faculty.name}</h3>
                <p className="text-gray-600">{faculty.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Campus Life */}
        <motion.section 
          className="bg-white rounded-lg shadow-lg p-8"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Campus Life</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Dream College, we believe in providing a holistic educational experience. Our vibrant campus life offers numerous opportunities for personal growth, cultural exchange, and unforgettable memories.
          </p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={staggerChildren}
          >
            {[
              { title: "State-of-the-art Libraries", image: "/placeholder.svg" },
              { title: "Modern Sports Facilities", image: "/placeholder.svg" },
              { title: "Cultural Events", image: "/placeholder.svg" },
              { title: "Student Clubs", image: "/placeholder.svg" },
              { title: "Innovation Labs", image: "/placeholder.svg" },
              { title: "Green Campus Initiatives", image: "/placeholder.svg" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md"
                variants={fadeInUp}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

export default AboutUs