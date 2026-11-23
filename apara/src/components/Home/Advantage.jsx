import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import image from "../../assets/home/who-we-are-apara.webp";
import {advantageData} from '../../data/advantageData.js'

export default function Advantage() {
    // openId = which accordion item is open (1 = first item open at start)
    // null = all closed
    const [openId, setOpenId] = useState(1)

    return (
        <section className="bg-gray-100 py-16 lg:py-26">
            <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

                {/* Left */}
                <div className="relative aspect-[15/14] overflow-hidden">
                    <img
                        src={image}
                        alt="Apara hotel interior"
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                    {/* Caption on the image*/}
                    <p className="absolute bottom-3 left-3 bg-primary px-3 py-2 text-[8px] text-white">
                        Thoughtful spaces. Considered decisions.
                    </p>
                </div>

                {/* Right*/}
                <div className="lg:max-w-[480px]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text">
                        The Apara Advantage
                    </p>

                    {/* heading-2 */}
                    <h2 className="heading-2 mt-4">
                        We see the hotel.
                        <span className="block italic font-normal tracking-normal">And the investment.</span>
                    </h2>

                    <p className="mt-4 text-[14px] leading-[1.9]">
                        Hospitality performance is the result of connected decisions. We consider
                        the relationship between capital, operations, brand and guest experience
                        through the lens of ownership.
                    </p>

                    {/* Accordion */}
                    <div className="mt-2">
                        {/* MAPPING: one accordion row for every item in advantageData */}
                        {advantageData.map((item) => {
                            const isOpen = openId === item.id

                            return (
                                // border-b border-gray-300 = line under each row
                                <div key={item.id} className="border-b border-gray-300">

                                    {/* Title row (click to open or close)
                                        flex justify-between = title left, + or × right
                                        click on the open item closes it, click on another opens that one */}
                                    <button
                                        type="button"
                                        onClick={() => setOpenId(isOpen ? null : item.id)}
                                        aria-expanded={isOpen}
                                        className="flex w-full items-center justify-between py-4 text-left"
                                    >
                                        <span className="font-body text-[11px] font-semibold text-primary">
                                            {item.title}
                                        </span>
                                        <span className="text-[14px] text-primary">
                                            {isOpen ? "×" : "+"}
                                        </span>
                                    </button>

                                    {/* Text: smooth open and close
                                        grid-rows-[1fr] = open, grid-rows-[0fr] = closed (height animates)
                                        overflow-hidden on the inner div hides the text when closed */}
                                    <div
                                        className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="max-w-[360px] pb-5 text-[11px] leading-[1.9]">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* btn-third */}
                    <Link to="/about-us" className="btn-third mt-8 font-semibold">
                        Explore Our Approach
                    </Link>
                </div>
            </div>
        </section>
    );
}