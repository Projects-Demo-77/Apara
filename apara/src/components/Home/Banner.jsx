import React from 'react'
import {Link} from 'react-router-dom'
import banner from "../../assets/home/Apara-Banner.webp";

export default function Banner() {
    return (
    
        <section className="relative flex min-h-[650px] items-center overflow-hidden">

            {/* Background image */}
            <img
                src={banner}
                alt="Apara Banner"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay*/}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.64),rgba(17,17,17,0.25)_70%),linear-gradient(0deg,rgba(17,17,17,0.48),transparent_35%)]"></div>

            {/* Content*/}
            <div className="container relative z-10 py-20">

                {/* Small label on top */}
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                    An ownership mindset. An integrated perspective.
                </p>

                {/* Heading */}
                <h1 className="mt-5 text-[46px] text-white md:text-[64px] lg:text-[84px]">
                    Unlocking Potential
                    <span className="block italic">for Exceptional Results.</span>
                </h1>

                {/* Paragraph*/}
                <p className="mt-6 max-w-[460px] text-[14px] tracking-[0.07em] text-white">
                    From investment strategy to hotel operations.
                    <br />
                    One integrated platform. An ownership perspective.
                </p>

                {/* Buttons*/}
                <div className="mt-8 flex flex-wrap items-center gap-8">
                    {/*btn-secondary*/}
                    <Link to="/services" className="btn-secondary">
                        Explore Our Services
                    </Link>

                    {/*btn-third */}
                    <Link
                        to="/about-us"
                        className="btn-third text-white border-white hover:border-secondary hover:text-secondary"
                    >
                        Discover Apara
                    </Link>
                </div>
            </div>

            {/* Bottom labels*/}
            <div className="absolute inset-x-0 bottom-6 z-10">
                <div className="container flex items-center justify-between text-[8px] font-semibold uppercase tracking-[0.12em] text-white">
                    <span>Hospitality Advisory &amp; Management</span>
                    <span>Asia-Pacific</span>
                </div>
            </div>
        </section>
    );
}