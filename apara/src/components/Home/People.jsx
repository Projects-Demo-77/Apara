import React from 'react'
import {Link} from 'react-router-dom'

export default function People() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_1.3fr_1fr] lg:gap-16">

                {/* Column 1 */}
                <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-text lg:pt-3">
                    Our People, Your Perspective
                </p>

                {/* Column 2 */}
                <h2 className="heading-3">
                    Commercial thinkers.
                    <span className="block">Hospitality practitioners.</span>
                </h2>

                {/* Column 3: text + button */}
                <div>
                    <p className="text-[14px] leading-[1.9]">
                        Apara's people connect investment acumen, operational depth, brand
                        strategy and design expertise. Claas Elze, Michael Wang and Ty Collins
                        bring complementary experience across advisory, hotel development and
                        operations.
                    </p>

                    {/* btn-third */}
                    <Link to="/our-team" className="btn-third mt-6 font-semibold">
                        Meet Our Team
                    </Link>
                </div>
            </div>
        </section>
    );
}