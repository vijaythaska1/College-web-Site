import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    const [newsIndex, setNewsIndex] = useState(0);
    // const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => setScrollY(window.scrollY);
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    const features = [
        { icon: <i className="material-symbols-outlined">devices</i>, title: 'World-Class Education', description: 'Learn from renowned faculty and gain cutting-edge skills for the future job market' },
        { icon: <i className="material-symbols-outlined">devices</i>, title: 'Diverse Community', description: 'Join a vibrant, inclusive campus with students from over 100 countries' },
        { icon: <i className="material-symbols-outlined">devices</i>, title: 'Innovation Hub', description: 'Access state-of-the-art facilities and collaborate on groundbreaking projects' },
    ];

    const courses = [
        { title: 'Computer Science & AI', icon: <i className="material-symbols-outlined">devices</i>, color: 'indigo' },
        { title: 'Business & Entrepreneurship', icon: <i className="material-symbols-outlined">devices</i>, color: 'purple' },
        { title: 'Creative Arts & Design', icon: <i className="material-symbols-outlined">devices</i>, color: 'green' },
        { title: 'Environmental Science', icon: <i className="material-symbols-outlined">devices</i>, color: 'green' },
        { title: 'Biomedical Engineering', icon: <i className="material-symbols-outlined">devices</i>, color: 'blue' },
        { title: 'Global Studies', icon: <i className="material-symbols-outlined">devices</i>, color: 'green' }
    ];

    const campusActivities = [
        { title: 'Student Clubs', icon: <i className="material-symbols-outlined">devices</i> },
        { title: 'Sports & Fitness', icon: <i className="material-symbols-outlined">devices</i> },
        { title: 'Arts & Culture', icon: <i className="material-symbols-outlined">devices</i> },
        { title: 'Research Opportunities', icon: <i className="material-symbols-outlined">devices</i> }
    ];


    const testimonials = [
        {
            id: 1,
            name: "Priya Sharma",
            program: "Computer Science",
            year: "Class of 2024",
            quote: "Dream College has been a transformative experience for me. The supportive faculty, cutting-edge resources, and diverse student community have helped me grow both academically and personally.",
            rating: 5
        },
        {
            id: 2,
            name: "Alex Thompson",
            program: "Data Science",
            year: "Class of 2024",
            quote: "The opportunities here are endless. From research projects to industry internships, I've gained practical experience that has prepared me for my future career.",
            rating: 5
        },
        {
            id: 3,
            name: "Maria Rodriguez",
            program: "Artificial Intelligence",
            year: "Class of 2023",
            quote: "The collaborative environment and mentorship from professors have been instrumental in helping me discover my true potential in the field of AI.",
            rating: 5
        }
    ];

    const news = [
        { title: "New AI Research Center Opens on Campus", date: "May 15, 2023" },
        { title: "Dream College Ranks #1 in Innovation", date: "April 30, 2023" },
        { title: "Student Startup Wins National Competition", date: "April 22, 2023" },
        { title: "Dream College Expands Global Partnership Program", date: "April 15, 2023" },
        { title: "Annual Tech Symposium Attracts Industry Leaders", date: "April 5, 2023" },
        { title: "New AI Research Center Opens on Campus", date: "May 15, 2023" },
        { title: "Dream College Ranks #1 in Innovation", date: "April 30, 2023" },
        { title: "Student Startup Wins National Competition", date: "April 22, 2023" },
        { title: "Dream College Expands Global Partnership Program", date: "April 15, 2023" },
        { title: "Annual Tech Symposium Attracts Industry Leaders", date: "April 5, 2023" },
        { title: "New AI Research Center Opens on Campus", date: "May 15, 2023" },
        { title: "Dream College Ranks #1 in Innovation", date: "April 30, 2023" },
        { title: "Student Startup Wins National Competition", date: "April 22, 2023" },
        { title: "Dream College Expands Global Partnership Program", date: "April 15, 2023" },
        { title: "Annual Tech Symposium Attracts Industry Leaders", date: "April 5, 2023" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100">
            <motion.section
                className="relative h-screen flex items-center justify-center overflow-hidden mb-11"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 z-0">
                    <video alt="College campus" className="w-full h-full object-cover" autoPlay muted loop >
                        <source src="https://bijnicollege.ac.in/wp-content/uploads/2024/06/Bijni-Video-1.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0  from-indigo-900 to-purple-900 opacity-70"></div>
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
                            <Link to={"/Courses"}>Explore Programs</Link>
                        </motion.button>
                        <motion.button
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to={"/VirtualTour"}>Virtual Tour</Link>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.section>


            <motion.section
                className="py-10 bg-white rounded-xl shadow-xl mb-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">Latest News</h2>
                    <div className="relative overflow-hidden h-96">
                        <motion.div
                            className="absolute w-full transition-all duration-500 ease-in-out"
                            animate={{ y: `-${newsIndex * 100}%` }}
                        >
                            {news.map((item, index) => (
                                <div key={index} className="h-16 flex items-center justify-between">
                                    <span className="font-semibold text-lg">{item.title}</span>
                                    <span className="text-sm text-gray-500">{item.date}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-12 text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Why Choose IPS College?
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
                                    <Link to={"/SingleCourseView"}>Learn More</Link>    <i className="material-symbols-outlined">arrow_forward</i>
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

            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Student Stories
                        </h2>


                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Discover how our students are transforming their dreams into reality
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                                            <img
                                                src="/api/placeholder/64/64"
                                                alt={testimonial.name}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            {testimonial.program}
                                        </p>
                                        <p className="text-xs text-blue-500 font-semibold">
                                            {testimonial.year}
                                        </p>
                                    </div>
                                </div>

                                <blockquote className="relative">
                                    <svg
                                        className="absolute -top-4 -left-2 w-8 h-8 text-gray-200 transform -rotate-180"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                    >
                                        <path d="M10 8c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zM28 8c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z" />
                                    </svg>
                                    <p className="relative text-gray-600 italic pl-8 leading-relaxed">
                                        {testimonial.quote}
                                    </p>
                                </blockquote>

                                <div className="flex gap-1 mt-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-shadow">
                            View More Stories
                        </button>
                    </div>
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