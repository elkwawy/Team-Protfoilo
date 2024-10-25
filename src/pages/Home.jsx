import React, { useEffect } from 'react'
import HeroSection from '../components//Home/HeroSection'
import Creative from '../components/Home/Creative'
import OurServices from '../components/Home/OurServices'
import HowDoWeWork from '../components/Home/HowDoWeWork'
import Testmonials from '../components/Home/Testmonials'
import TeamD from "../components/TeamDC";
import { useLocation } from 'react-router-dom'

const Home = () => {
    const loc = useLocation();
    useEffect(() => { 
        window.scroll(0,0);
    }, [loc])
    return (
        <div className='mb-[60px] flex flex-col gap-32'>
            <HeroSection />
            <Creative />
            <OurServices />
            <HowDoWeWork />
            <Testmonials />
            <TeamD />
        </div>
    )
}

export default Home