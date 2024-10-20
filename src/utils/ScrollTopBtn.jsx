import React from 'react'
import { FaArrowUp } from "react-icons/fa";
const ScrollTopBtn = () => {
    const scrollTop = () => { 
        window.scrollTo(0,0);
    }
    return (
        
        <button onClick={scrollTop} className='bg-white p-3 absolute bottom-5 right-5 rounded-md trans  group'>
            <FaArrowUp className='text-xl text-main-color trans group-hover:animate-bounce' />
        </button>
    )
}

export default ScrollTopBtn