import React from 'react'
import {Link} from 'react-router-dom'
import project1 from "../../assets/home/Projects-1.webp";
import project2 from "../../assets/home/Projects-2.webp";

export default function Projects() {
    return (
        <section className="bg-white py-16 lg:py-22">
            <div className="container">
                {/* small label */}
                <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-text">
                    The World of Hospitality
                </p>

                {/* heading-2*/}
                <h2 className="heading-2 mt-3">
                    Distinctive assets.
                    <span className="block">Individual ambitions.</span>
                </h2>

                {/* Images grid */}
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* Image 1*/}
                    <Link to="/projects" className="group block aspect-[467/328] overflow-hidden">
                        <img
                            src={project1}
                            alt="Hotel city view at dusk"
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </Link>

                    {/* Image 2 */}
                    <Link to="/projects" className="group block aspect-[467/328] overflow-hidden">
                        <img
                            src={project2}
                            alt="Island resort with overwater villas"
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </Link>
                </div>

                {/* Button on the right */}
                <div className="mt-8 flex justify-end">
                    {/* btn-third */}
                    <Link to="/projects" className="btn-third">
                        View Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}