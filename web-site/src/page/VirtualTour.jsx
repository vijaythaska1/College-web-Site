import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const VirtualTour = () => {
    const [currentLocation, setCurrentLocation] = useState('campus-overview')
    const [isTourGuided, setIsTourGuided] = useState(false)

    const locations = [
        { id: 'campus-overview', name: 'Campus Overview', image: '/placeholder.svg' },
        { id: 'academic-buildings', name: 'Academic Buildings', image: '/placeholder.svg' },
        { id: 'student-center', name: 'Student Center', image: '/placeholder.svg' },
        { id: 'library', name: 'Library', image: '/placeholder.svg' },
        { id: 'dormitories', name: 'Dormitories', image: '/placeholder.svg' },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 py-16">
            <div className="container mx-auto px-4">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Virtual Campus Tour
                </motion.h1>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold text-indigo-700">
                            {locations.find(loc => loc.id === currentLocation)?.name}
                        </h2>
                        <button
                            className={`px-4 py-2 rounded-full ${isTourGuided ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => setIsTourGuided(!isTourGuided)}
                        >
                            {isTourGuided ? 'Guided Tour' : 'Self-Guided'}
                        </button>
                    </div>
                    <motion.div
                        className="aspect-w-16 aspect-h-9 mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={locations.find(loc => loc.id === currentLocation)?.image}
                            alt={locations.find(loc => loc.id === currentLocation)?.name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </motion.div>
                    {isTourGuided && (
                        <p className="text-gray-600 mb-4">
                            Welcome to {locations.find(loc => loc.id === currentLocation)?.name}.
                            This area is a key part of our campus, where students...
                        </p>
                    )}
                    <div className="flex flex-wrap gap-2">
                        {locations.map((location) => (
                            <motion.button
                                key={location.id}
                                className={`px-4 py-2 rounded-full ${currentLocation === location.id
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                    }`}
                                onClick={() => setCurrentLocation(location.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {location.name}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-white rounded-xl shadow-lg p-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Campus Facts</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Founded in 1965</li>
                            <li>200-acre campus</li>
                            <li>Over 100 buildings</li>
                            <li>State-of-the-art research facilities</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-xl shadow-lg p-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Student Testimonial</h3>
                        <blockquote className="italic text-gray-600">
                            "The campus is beautiful and has everything you need. I love studying in the library and hanging out in the student center!"
                        </blockquote>
                        <p className="mt-2 text-gray-700">- Sarah, Class of 2024</p>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <p className="text-xl text-gray-700 mb-4">
                        Want to experience our campus in person?
                    </p>
                    <motion.button
                        className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to={"/ScheduleCampusVisit"}>Schedule a Campus Visit</Link>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default VirtualTour