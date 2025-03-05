import React from 'react';
import pottery from '../assets/marketplace/pottery.png';
import textile from '../assets/marketplace/jewelry.jpg';
import metlawork from '../assets/marketplace/metalwork.webp';
import leather from '../assets/marketplace/leathergoods.jfif';
import wood from '../assets/marketplace/woodcarving.jpg';
import jewelry from '../assets/marketplace/jewelry.jpg';
function Marketplace() {
  const items = [
    {
      id: 1,
      title: "Traditional Pottery",
      description: "Handcrafted ceramic pieces inspired by Tunisian heritage.",
      image: pottery, 
      points: 120,
    },
    {
      id: 2,
      title: "Textile Arts",
      description: "Exquisite woven carpets and textiles made by local artisans.",
      image: textile, 
      points: 95,
    },
    {
      id: 3,
      title: "Metalwork",
      description: "Traditional metal crafts showcasing intricate designs.",
      image: metlawork, 
      points: 80,
    },
    {
      id: 4,
      title: "Leather Goods",
      description: "High-quality leather products crafted with precision.",
      image: leather, 
      points: 110,
    },
    {
      id: 5,
      title: "Wood Carving",
      description: "Beautifully carved wooden artifacts and furniture.",
      image: wood, 
      points: 75,
    },
    {
      id: 6,
      title: "Jewelry",
      description: "Unique jewelry pieces inspired by Tunisian culture.",
      image: jewelry,
      points: 150,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
      <h1 className="text-3xl font-bold text-gray-900">Artisan Marketplace</h1>
      <p className="mt-2 text-gray-600">
        Support local artisans and discover authentic Tunisian crafts
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-indigo-600">
                  {item.points} Points
                </span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;