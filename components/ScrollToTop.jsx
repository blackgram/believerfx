import React from 'react'
import { useInView } from 'react-intersection-observer';
import { FaArrowCircleUp } from 'react-icons/fa';


const ScrollToTop = ({scroll}) => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
      return (
        <div className={`fixed z-50 bottom-24 right-4 transition-all duration-1000 ${scroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <button
          onClick={scrollToTop}
            className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded-full shadow-lg opacity-100 transition-opacity duration-500"
          >
            <FaArrowCircleUp />
          </button>
        </div>
      );
}

export default ScrollToTop