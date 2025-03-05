import React from "react";
import tuniquestLogo from '../../public/icon.png';
const TuniQuest = () => {
  return (
      <>
      <section id='about' className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28 container mx-auto sm:mx-5 w-11/12 h-fit">
        <div className="col-span-6 mx-auto">
          <img 
            src={tuniquestLogo}
            className="mx-auto h-56 rounded-2xl lg:h-80 md:h-96 w-9/12" 
            alt="TuniQuest" 
            loading="lazy" 
          />
        </div>
        <div className="col-span-6 container mx-auto">
          <h1 className="mb-4 text-4xl text-blue-600  font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
            About TuniQuest.
          </h1>
          <p className="mb-4 text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal text-justify">
          TuniQuest is an innovative platform dedicated to preserving and promoting Tunisia’s rich cultural heritage through technology. By integrating gamification, interactive learning experiences, and digital storytelling, TuniQuest makes history accessible and engaging for all. Our mission is to inspire discovery, ensure the preservation of traditions, and foster educational experiences that connect people with their heritage in meaningful ways.
          </p>
          <div>
            <a
              href="#" 
              rel="noreferrer" 
              className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800" 
              target="_blank"
            >
              <span>Learn more about TuniQuest</span>
            </a>
          </div>
        </div>
      </section>
      </>
  );
}

export default TuniQuest;
