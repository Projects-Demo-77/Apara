import React from 'react'
import {Link} from 'react-router-dom'
import image from "../../assets/home/regional-perspective.webp";

export default function Regional() {
    return (
        <section className="bg-gray-100 py-16 lg:py-24">
            {/* container */}
            <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

                {/* Left */}
                <div className="order-2 lg:order-1">
                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-text">
                        A Regional Perspective
                    </p>

                    {/* heading-2 */}
                    <h2 className="heading-2 mt-4">
                        Local understanding.
                        <span className="block italic">Connected thinking.</span>
                    </h2>

                    <p className="mt-6 max-w-[300px] text-[14px] leading-[1.9]">
                        Apara's Asia-Pacific focus connects hospitality decisions with the
                        markets in which assets operate.
                    </p>

                    {/* Cities */}
                    <div className="mt-8 flex items-center">
                        <span className="pr-6 font-heading text-[22px] text-primary">Singapore</span>
                        <span className="border-l border-gray-300 pl-6 font-heading text-[22px] text-primary">Hong Kong</span>
                    </div>
                    <p className="mt-3 text-[8px] text-text">Apara office locations</p>

                    {/* btn-third */}
                    <Link to="/destinations" className="btn-third text-[12px] mt-6 font-semibold">
                        Explore Destinations
                    </Link>
                </div>

                {/* Right: image*/}
                <div className="order-1 aspect-[495/434] overflow-hidden lg:order-2">
                    <img
                        src={image}
                        alt="City skyline at dusk"
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}