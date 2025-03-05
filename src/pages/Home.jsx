import React from 'react'
import { Link } from 'react-router-dom'
import FindUs from '../components/FindUs'
import Principles from '../components/Principles'
import TuniQuest from '../components/TuniQuest'

function Home() {
  return (
    <div className="hero-pattern mt-14">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Discover Tunisia's</span>
            <span className="block text-blue-600">Rich Cultural Heritage</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Embark on an interactive journey through Tunisia's history, traditions, and cultural landmarks.
            Learn, explore, and connect with our heritage in a fun and engaging way.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/explore"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Start Exploring
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to="/learn"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <TuniQuest/>
      <Principles/>
      <FindUs/>
    </div>
  )
}

export default Home