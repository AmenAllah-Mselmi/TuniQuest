import React from 'react';

function PricingPlans() {
  const offers = [
    {
      id: 1,
      title: "Explorer",
      price: 19,
      features: [
        "Access to basic cultural quests",
        "Monthly heritage newsletter",
        "Exclusive history articles",
        "Community forum access",
      ],
      bestValue: false,
    },
    {
      id: 2,
      title: "Adventurer",
      price: 49,
      features: [
        "Access to premium cultural quests",
        "Early access to new experiences",
        "Interactive learning modules",
        "10% discount on cultural events",
        "Priority customer support",
      ],
      bestValue: true,
    },
    {
      id: 3,
      title: "Guardian",
      price: 79,
      features: [
        "Full access to all TuniQuest experiences",
        "VIP invitations to cultural events",
        "Personalized guided tours",
        "20% discount on heritage merchandise",
        "24/7 dedicated support",
      ],
      bestValue: false,
    },
  ];

  return (
    <div className="bg-blue-600 py-12 mt-20 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Choose Your Quest Plan
        </h1>
        <p className="text-lg text-center text-white mb-8">
          Join TuniQuest and explore Tunisia’s cultural heritage in a whole new way.
        </p>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                offer.bestValue ? "border-2 border-yellow-500" : "border border-gray-200"
              }`}
            >
              <div className="p-6">
                {offer.bestValue && (
                  <div className="bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h2>
                <p className="text-gray-600 mb-6">
                  <span className="text-4xl font-bold">${offer.price}</span>
                  <span className="text-gray-500">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full px-4 py-2 rounded-lg font-semibold ${
                    offer.bestValue
                      ? "bg-yellow-500 text-white hover:bg-yellow-600"
                      : "bg-gray-900 text-white hover:bg-gray-700"
                  } transition-colors duration-300`}
                >
                  Start Your Quest
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;
