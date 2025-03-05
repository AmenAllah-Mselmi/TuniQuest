import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icon.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800 fixed top-0 left-0 z-50 ">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none flex items-center">
            <img src={Logo} alt="Logo" className='w-9 h-9 mr-2' />
            TuniQuest
          </Link>
          <button
            className="md:hidden rounded-lg focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!open ? (
                <>
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                </>
              ) : (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
        <nav className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${open ? 'flex' : 'hidden'}`}>
          <Link to="/" className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 hover:bg-gray-200">
            Home
          </Link>
          <Link to="/offers" className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark:bg-transparent md:mt-0 md:ml-4 hover:bg-gray-200">
            Offers
          </Link>
          <Link to="/marketplace" className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark:bg-transparent md:mt-0 md:ml-4 hover:bg-gray-200">
            MarketPlace
          </Link>
          <Link to="/learn" className="px-1 py-2 mt-2 text-sm font-semibold rounded-lg dark:bg-transparent md:mt-0 md:ml-4 hover:bg-gray-200">
            try Demo
          </Link>
          <Link to="/auth" className="px-1 py-2 mt-2 text-sm font-semibold rounded-lg dark:bg-transparent md:mt-0 md:ml-4 hover:bg-gray-200">
            login
          </Link>
          <Link to="/contact" className="px-1 py-2 mt-2 text-sm font-semibold rounded-lg dark:bg-transparent md:mt-0 md:ml-4 hover:bg-gray-200">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
