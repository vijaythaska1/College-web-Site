import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };


  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Logo at the top */}
        <div className="text-center pt-8">
          <img src="/path/to/your/logo.png" alt="Your Company Logo" className="mx-auto h-12 w-auto" />
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 pl-11"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="w-5 h-5 text-gray-400 absolute left-3 top-3.5 material-symbols-outlined">
                  mail
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 pl-11 pr-11"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span className="w-5 h-5 text-gray-400 absolute left-3 top-3.5 material-symbols-outlined">
                  lock
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700 transition duration-200"
                >
                  {showPassword ? <i className="material-symbols-outlined w-5 h-5">visibility_off</i> : <i className="material-symbols-outlined w-5 h-5" >visibility</i>}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
            </div>
            <button   onClick={() => navigate("/Dashboard")}
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md shadow-sm text-sm font-medium transition duration-200">
                <div className="h-5 w-5 mr-2">
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </div>
                <span>GitHub</span>
              </a>
              <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md shadow-sm text-sm font-medium transition duration-200">
                <div className="h-5 w-5 mr-2">
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#3157c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                </div>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 bg-gray-50">
          <p className="text-xs leading-5 text-center text-gray-500">
            By signing in, you agree to our
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500"> Terms </a>
            and
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500"> Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;