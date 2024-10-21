import React from 'react'
import HeroSection from '../components//Home/HeroSection'
import Creative from '../components/Home/Creative'
import OurServices from '../components/Home/OurServices'
import HowDoWeWork from '../components/Home/HowDoWeWork'
import Testmonials from '../components/Home/Testmonials'
import TeamD from "../components/TeamDC";

const Home = () => {
    return (
        <div className='mb-[60px] flex flex-col gap-20'>
            <HeroSection />
            <Creative />
            <OurServices />
            <HowDoWeWork />
            <Testmonials />
            {/* <TeamD /> */}
        </div>
    )
}

export default Home