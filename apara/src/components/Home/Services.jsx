import React from 'react'
import {Link} from 'react-router-dom'
import { servicesData } from '../../data/servicesData.js';

export default function Services() {
    return (
        <section className="bg-white py-16 lg:pb-22">
            <div className="container">

                {/* Top row */}
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        {/* small label */}
                        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-text">
                            Our Integrated Services
                        </p>
                        {/* heading-2 */}
                        <h2 className="heading-2 mt-3">
                            Expertise that connects.
                            <span className="block">Value that endures.</span>
                        </h2>
                    </div>

                    {/* btn-third */}
                    <Link to="/services" className="btn-third font-semibold">
                        Explore All Services
                    </Link>
                </div>

                {/* Cards grid
                    grid-cols-1 = mobile, sm:grid-cols-2 = tablet, lg:grid-cols-4 = desktop
                    gap-6 = space between cards */}
                <div className="mt-10 grid grid-cols-1 gap-12 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {/* MAPPING: one card for every item in servicesData */}
                    {servicesData.map((item, index) => (
                        <article key={item.id} className="group">

                            {/* Image box*/}
                            <Link to={item.link} className="block aspect-[15/16] overflow-hidden">
                                {/* group-hover:scale-105 = small zoom when the mouse is on the card
                                    duration-500 = smooth, slow zoom */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>

                            {/* Number + title
                                items-baseline = small number sits on the same line as the title
                                lg:min-h-[64px] = same height on desktop, so the text below lines up
                                even when a title has 2 lines */}
                            <div className="mt-6 flex items-baseline gap-3 lg:min-h-[64px]">
                                {/* padStart makes 1 become 01 */}
                                <span className="text-[8px] text-secondary">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-[25px] leading-[1.2]">{item.title}</h3>
                            </div>

                            {/* Description */}
                            <p className="mt-4 text-[14px] leading-[1.9]">{item.text}</p>

                            {/* Link
                                border-b = small bottom line, hover = gold text and line */}
                            <Link
                                to={item.link}
                                className="mt-5 inline-block border-b border-primary pb-1 text-[9px] font-medium uppercase tracking-[0.12em] text-primary duration-300 hover:border-secondary hover:text-secondary"
                            >
                                Explore Service
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}