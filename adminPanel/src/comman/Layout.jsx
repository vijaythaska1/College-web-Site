import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'



const Layout =({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="md:hidden">
          {isSidebarOpen && <Sidebar />}
        </div>
        <main className="flex-1 p-4">
          <button 
            className="md:hidden mb-4 p-2 bg-gray-800 text-white rounded"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </button>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout