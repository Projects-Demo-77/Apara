import React from 'react'
import {Link} from 'react-router-dom'

export default function CallToAction() {
    return (
        <section className="bg-primary py-16 lg:py-20">
            <div className="container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left*/}
                <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-secondary">
                        The next chapter starts with a conversation
                    </p>

                    {/* heading-2 */}
                    <h2 className="heading-2 mt-5 text-white">
                        Unlock the full potential
                        <span className="block">of your hotel asset.</span>
                    </h2>
                </div>

                {/* Right */}
                <div className="lg:mr-24">
                    {/* text-white = white text on the dark background */}
                    <p className="max-w-[240px] text-[12px] leading-[1.9] text-white">
                        Tell us about your asset, your ambitions and the challenges ahead.
                    </p>

                    {/* btn-secondary */}
                    <Link to="/contact-us" className="btn-secondary mt-6">
                        Discuss Your Asset
                    </Link>
                </div>
            </div>
        </section>
    );
}