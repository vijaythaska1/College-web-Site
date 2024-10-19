import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <ul>
          <li className="mb-2">
            <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-700">Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link href="/users" className="block p-2 rounded hover:bg-gray-700">Users</Link>
          </li>
          <li className="mb-2">
            <Link href="/products" className="block p-2 rounded hover:bg-gray-700">Products</Link>
          </li>
          <li className="mb-2">
            <Link href="/orders" className="block p-2 rounded hover:bg-gray-700">Orders</Link>
          </li>
          <li className="mb-2">
            <Link href="/settings" className="block p-2 rounded hover:bg-gray-700">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar