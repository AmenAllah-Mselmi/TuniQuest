import React from 'react'

function Explore() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Explore Historical Sites</h1>
      <p className="mt-2 text-gray-600">
        Discover Tunisia's most remarkable historical locations through interactive 3D experiences.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Placeholder for 3D experiences */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold">Carthage</h2>
          <p className="mt-2 text-gray-600">Ancient Phoenician civilization</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold">Dougga</h2>
          <p className="mt-2 text-gray-600">Roman ruins and architecture</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold">Kairouan</h2>
          <p className="mt-2 text-gray-600">Islamic heritage and mosques</p>
        </div>
      </div>
    </div>
  )
}

export default Explore