import React from 'react'
const ScrollTopBtn = () => {
    const scrollTop = () => { 
        window.scrollTo(0,0);
    }
    return (
        
        <button onClick={scrollTop} className=''>

        </button>
    )
}

export default ScrollTopBtn