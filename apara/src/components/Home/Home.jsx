import React from 'react'
import Banner from './Banner.jsx'
import BrandStrip from './BrandStrip.jsx'
import Intro from './Intro.jsx'
import Services from './Services.jsx'
import Advantage from './Advantage.jsx'
import Projects from './Projects.jsx'
import Regional from './Regional.jsx'
import People from './People.jsx'
import CallToAction from './CallToAction.jsx'

export default function Home() {
    return (
        <>
            <Banner />
            <BrandStrip />
            <Intro />
            <Services />
            <Advantage />
            <Projects />
            <Regional />
            <People />
            <CallToAction />
        </>
    )
}