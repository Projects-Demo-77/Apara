import React from 'react'
import leMeridien from "../../assets/home/le-m-ridien.webp";
import autograph from "../../assets/home/autograph-collection.webp";
import courtyard from "../../assets/home/courtyard-by-marriott.webp";
import fourPoints from "../../assets/home/four-points-by-sheraton.webp";
import parkHyatt from "../../assets/home/park-hyatt.webp";
import hyattRegency from "../../assets/home/hyatt-regency.webp";
import waldorf from "../../assets/home/waldorf-astoria.webp";
import jwMarriott from "../../assets/home/jw-marriott.webp";
import westin from "../../assets/home/westin.webp";
import ritz from "../../assets/home/the-ritz-carlton.webp";

// Logo list: add or remove a brand here only
const brands = [
    {name: "Le Meridien", logo: leMeridien},
    {name: "Autograph Collection", logo: autograph},
    {name: "Courtyard by Marriott", logo: courtyard},
    {name: "Four Points by Sheraton", logo: fourPoints},
    {name: "Park Hyatt", logo: parkHyatt},
    {name: "Hyatt Regency", logo: hyattRegency},
    {name: "Waldorf Astoria", logo: waldorf},
    {name: "JW Marriott", logo: jwMarriott},
    {name: "Westin", logo: westin},
    {name: "The Ritz-Carlton", logo: ritz},
]

// Three points under the carousel
const points = [
    {title: "Owner focused", text: "Your objectives. Our perspective."},
    {title: "Commercially grounded", text: "From strategy to performance."},
    {title: "Integrated expertise", text: "Across the hotel asset lifecycle."},
]

export default function BrandStrip() {
    return (
        <section className="bg-white pt-10">

            {/* Title*/}
            <div className="container">
                
                <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-secondary">
                    Relationships built on experience
                </p>
                <h2 className="mt-2 font-body text-[14px] font-medium text-primary">
                    Experience across leading hotel brands.
                </h2>
            </div>

            {/* Carousel group */}
            <div className="group mt-8 pb-8 overflow-hidden border-b border-gray-200">
                {/* Track */}
                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                    {/* Logos */}
                    {[...brands, ...brands].map((brand, index) => (
                        <img
                            key={index}
                            src={brand.logo}
                            alt={brand.name}
                            // hide the copy from screen readers
                            aria-hidden={index >= brands.length}
                            className="mx-8 h-auto w-[180px] shrink-0 object-contain"
                        />
                    ))}
                </div>
            </div>

            {/* Three points */}
            <div className="container">
                <div className="mx-auto mt-6 grid  grid-cols-1 gap-8 border-b border-gray-200 pb-6 md:grid-cols-3 md:gap-0">
                    {points.map((item, index) => (
                        <div
                            key={item.title}
                            // md:border-l = vertical divider from the 2nd point
                            // md:pl-8 = space after the divider
                            className={`flex items-start gap-3  ${index > 0 ? "md:border-l md:border-gray-200 md:pl-10" : ""}`}
                        >
                            {/* small dash before the title */}
                            <span className="mt-[7px] h-px w-3.5 shrink-0 bg-secondary"></span>
                            <div>
                                <h3 className="font-body text-[11px] font-medium text-primary">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-[10px] text-text">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}