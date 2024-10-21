import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
const ScrollTopBtn = () => {
    const scrollTop = () => { 
        window.scrollTo(0,0);
    }
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY); 
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 
    return (    
        <button onClick={scrollTop} className={`bg-white shadow-md w-[40px] h-[40px] flex items-center justify-center rounded-full fixed border z-40 bottom-5 ${scrollY > screen.height ? "right-2 sm:right-5" : "-right-20"}  trans hover:scale-110`}>
            <FaArrowUp className='text-lg text-main-color trans ' />
        </button>
    )
}

export default ScrollTopBtn