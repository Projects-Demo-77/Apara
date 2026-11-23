import React from 'react'
import {Link} from 'react-router-dom'

export default function Intro() {
    return (
        <section className="bg-white py-16 lg:pt-24 lg:pb-8">
            <div className="container">
                {/* Heading*/}
                <h2 className="heading-2">
                    Great hospitality assets deserve
                    <span className="block italic">a considered approach.</span>
                </h2>

                {/* Two columns*/}
                <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-2">

                    {/* Left column */}
                    <div>
                        <p className="max-w-[610px] text-[14px] leading-[1.9]">
                            Apara Hotel Advisers is an integrated, 360-degree hospitality advisory
                            and management group serving hotel owners, investors and developers
                            across Asia-Pacific.
                        </p>

                        {/* btn-third */}
                        <Link to="/about-us" className="btn-third mt-8 text-[11px] font-semibold">
                            An Introduction To Apara
                        </Link>
                    </div>

                    {/* Right column: paragraph */}
                    <p className="max-w-[560px] text-[14px] leading-[1.9]">
                        Four connected disciplines — Hotel Advisory, Hotel Design and Project
                        Management, Hotel Management, and Hotel Asset Management — support your
                        asset from investment strategy to development, operations and long-term
                        performance.
                    </p>
                </div>
            </div>
        </section>
    );
}