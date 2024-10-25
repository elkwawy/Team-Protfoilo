import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const useScrollY = () => {
    const [scrollY, setScrollY] = useState(window.scrollY);
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                setScrollY(window.scrollY);
                ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return scrollY;
};

const ScrollTopBtn = () => {
    const screenHeight = window.screen.height;
    const scrollY = useScrollY();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <button onClick={scrollToTop} className={`fixed  ${scrollY > screenHeight ? "right-5 sm:right-8" : "-right-96"}  bottom-5 bg-white rounded-full w-[40px] h-[40px] border-[1px] flex items-center justify-center trans hover:scale-105`}>
            <FaArrowUp className="text-xl text-main-color" />
        </button>
    )
}

export default ScrollTopBtn