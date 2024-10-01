import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    // const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => setScrollY(window.scrollY);
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    const features = [
        { icon: <i class="material-symbols-outlined">devices</i>, title: 'World-Class Education', description: 'Learn from renowned faculty and gain cutting-edge skills for the future job market' },
        { icon: <i class="material-symbols-outlined">devices</i>, title: 'Diverse Community', description: 'Join a vibrant, inclusive campus with students from over 100 countries' },
        { icon: <i class="material-symbols-outlined">devices</i>, title: 'Innovation Hub', description: 'Access state-of-the-art facilities and collaborate on groundbreaking projects' }
    ];

    const courses = [
        { title: 'Computer Science & AI', icon:<i class="material-symbols-outlined">devices</i>, color: 'indigo' },
        { title: 'Business & Entrepreneurship', icon: <i class="material-symbols-outlined">devices</i>, color: 'purple' },
        { title: 'Creative Arts & Design', icon:  <i class="material-symbols-outlined">devices</i>,  color: 'green' },
        { title: 'Environmental Science', icon: <i class="material-symbols-outlined">devices</i>, color: 'green' },
        { title: 'Biomedical Engineering', icon: <i class="material-symbols-outlined">devices</i>, color: 'blue' },
        { title: 'Global Studies', icon: <i class="material-symbols-outlined">devices</i>,  color: 'green' }
    ];

    const campusActivities = [
        { title: 'Student Clubs', icon: <i class="material-symbols-outlined">devices</i> },
        { title: 'Sports & Fitness', icon: <i class="material-symbols-outlined">devices</i> },
        { title: 'Arts & Culture', icon: <i class="material-symbols-outlined">devices</i> },
        { title: 'Research Opportunities', icon: <i class="material-symbols-outlined">devices</i>}
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100">
            <motion.section
                className="relative h-screen flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 z-0">
                    <img src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY" alt="College campus" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 opacity-70"></div>
                </div>
                <motion.div
                    className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Unlock Your Potential at Dream College</h2>
                    <p className="text-xl md:text-2xl mb-8">Empowering minds, inspiring innovation, and shaping future leaders</p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <motion.button
                            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Programs
                        </motion.button>
                        <motion.button
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Virtual Tour
                        </motion.button>
                    </div>
                </motion.div>
            </motion.section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-12 text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Why Choose Dream College?
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="material-icons text-6xl text-indigo-600 mb-4">{feature.icon}</span>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-12 text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Discover Our Programs
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-${course.color}-500`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className={`material-icons text-5xl text-${course.color}-500 mb-4`}>{course.icon}</span>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                                <p className="text-gray-600 mb-4">Explore innovative curricula and hands-on learning experiences in {course.title.toLowerCase()}.</p>
                                <Link href="#" className={`text-${course.color}-600 hover:text-${course.color}-700 font-semibold flex items-center`}>
                                    Learn More <span className="material-icons ml-1">arrow_forward</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section
                className="py-20 bg-indigo-600 text-white "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Experience Campus Life</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {campusActivities.map((activity, index) => (
                            <motion.div
                                key={index}
                                className="bg-white bg-opacity-10 p-6 rounded-xl text-center hover:bg-opacity-20 transition duration-300 "
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="material-icons text-5xl mb-4">{activity.icon}</span>
                                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                                <p className='text-ellipsis'>Engage in exciting {activity.title.toLowerCase()} and create unforgettable memories.</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-12 text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        What Our Students Say
                    </motion.h2>
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center mb-6">
                                <img src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY" alt="Student" width={64} height={64} className="rounded-full mr-4" />
                                <div>
                                    <h4 className="font-semibold text-xl">Priya Sharma</h4>
                                    <p className="text-gray-600">Computer Science, Class of 2024</p>
                                </div>
                            </div>
                            <p className="text-xl italic mb-4">"Dream College has been a transformative experience for me. The supportive faculty, cutting-edge resources, and diverse student community have helped me grow both academically and personally. I've discovered my passion for AI and have already started working on exciting projects that I believe will make a real impact."</p>
                            <div className="flex justify-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="material-icons text-yellow-400"><i class="material-symbols-outlined">star</i></span>
                                ))}
                            </div>
                        </div>
                        
                       
                    </motion.div>
                </div>
            </section>

            <motion.section
                className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Shape Your Future?</h2>
                    <p className="text-xl mb-8">Join our community of innovators, leaders, and changemakers today!</p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <motion.button
                            className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Apply Now
                        </motion.button>
                        <motion.button
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Request Information
                        </motion.button>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

export default Home;