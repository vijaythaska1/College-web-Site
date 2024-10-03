import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const socialIcons = ['facebook', 'twitter', 'instagram', 'linkedin']
  const quickLinks = ['About Us', 'Programs', 'Admissions', 'Research', 'Campus Life', 'Alumni']

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dream College</h3>
            <p className="mb-4">Empowering minds, shaping futures, and inspiring innovation since 1950.</p>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <Link key={index} href="#" className="hover:text-indigo-400 transition duration-300">
                  <span className="material-icons">{icon}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-indigo-400 transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">123 College Street, Dreamville, DC 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@dreamcollege.edu</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="mb-4">Subscribe to our newsletter for updates and events</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-2/3 bg-gray-800 text-white px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full sm:w-1/3 bg-indigo-600 text-white px-4 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-indigo-700 transition duration-300 mt-2 sm:mt-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 Dream College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer