import React from "react";
import discovery from "../assets/values/discovery.png";
import preservation from "../assets/values/preservation.png";
import engagement from "../assets/values/engagement.png";
import education from "../assets/values/education.png";

const Principles = () => {
  const values = [
    {
      name: "Discovery",
      description: "We inspire curiosity and exploration of Tunisia’s rich cultural heritage.",
      imgSrc: discovery,
      bgColor: "bg-blue-500",
    },
    {
      name: "Preservation",
      description: "We are committed to safeguarding and promoting Tunisia’s traditions and history.",
      imgSrc: preservation,
      bgColor: "bg-blue-400",
    },
    {
      name: "Engagement",
      description: "We create interactive experiences that connect people with their heritage.",
      imgSrc: engagement,
      bgColor: "bg-blue-500",
    },
    {
      name: "Education",
      description: "We provide gamified learning experiences to make history accessible and enjoyable.",
      imgSrc: education,
      bgColor: "bg-blue-400",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mb-12 flex items-center justify-center gap-3">
        <h2 className="text-center text-4xl font-bold">Our Principles & Values</h2>
      </div>
      <div className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none">
        {values.map((value, index) => (
          <div key={index} className="transition hover:scale-105 max-w-xs text-center">
            <div className={`rounded-2xl ${value.bgColor} p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800`}>
              <img
                className="mx-auto h-24 w-24 object-contain"
                src={value.imgSrc}
                alt={value.name}
                loading="lazy"
              />
            </div>
            <h1 className="mt-4 text-lg font-extrabold">{value.name}</h1>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
