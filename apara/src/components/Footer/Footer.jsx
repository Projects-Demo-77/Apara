import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../../assets/logo/logo-apara-black.png";

export default function Footer() {
    return (
        // bg-white = white background, pt-14 = space above content
        <footer className="bg-white pt-15 border-t border-[#E5E5E5]">
            
            <div className="container grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1fr]">

                {/* Column 1: logo, text, linkedin */}
                <div>
                    <Link to="/">
                        {/* h-10 = logo height 40px */}
                        <img src={logo} className="h-10" alt="Apara" />
                    </Link>
                    <p className="mt-2 ml-1 text-[8px] uppercase tracking-[0.3em] text-text">
                        Hotel Advisers
                    </p>
                    <p className="mt-6 max-w-[240px] text-[12px] text-text">
                        Strategic insight. Operational expertise. Lasting value.
                    </p>
                    {/* hover:text-secondary = #977947 on hover */}
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-3 text-[11px] text-primary duration-300 hover:text-secondary"
                    >
                        LinkedIn <span>↗</span>
                    </a>
                </div>

                {/* Column 2: explore links */}
                <div>
                
                    <h4 className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                        Explore
                    </h4>
                    {/* flex-col gap-3 = links in a column with space between */}
                    <ul className="mt-5 flex flex-col gap-3 text-[11px] text-text">
                        <li><Link to="/about-us" className="duration-300 hover:text-secondary">About Us</Link></li>
                        <li><Link to="/services" className="duration-300 hover:text-secondary">Services</Link></li>
                        <li><Link to="/projects" className="duration-300 hover:text-secondary">Projects</Link></li>
                        <li><Link to="/destinations" className="duration-300 hover:text-secondary">Destinations</Link></li>
                        <li><Link to="/our-team" className="duration-300 hover:text-secondary">Our Team</Link></li>
                        <li><Link to="/contact-us" className="duration-300 hover:text-secondary">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: services links */}
                <div>
                    <h4 className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                        Our Services
                    </h4>
                    <ul className="mt-5 flex flex-col gap-3 text-[11px] text-text">
                        <li><Link to="/services" className="duration-300 hover:text-secondary">Hotel Advisory</Link></li>
                        <li><Link to="/services" className="duration-300 hover:text-secondary">Hotel Design And Project Management</Link></li>
                        <li><Link to="/services" className="duration-300 hover:text-secondary">Hotel Management</Link></li>
                        <li><Link to="/services" className="duration-300 hover:text-secondary">Hotel Asset Management</Link></li>
                    </ul>
                </div>

                {/* Column 4: contact */}
                <div>
                    <h4 className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                        Connect With Us
                    </h4>
                    <div className="mt-5 flex flex-col gap-5 text-[11px]">
                        {/* tel: link = tap to call, hover:text-secondary = #977947 */}
                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-primary">Singapore</p>
                            <a href="tel:+6562216211" className="text-text duration-300 hover:text-secondary">
                                +65 6221 6211
                            </a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-primary">Hong Kong</p>
                            <a href="tel:+85234262681" className="text-text duration-300 hover:text-secondary">
                                +852 3426 2681
                            </a>
                        </div>
                        {/* mailto: link = opens email app */}
                        <a
                            href="mailto:info@aparahoteladvisers.com"
                            className="font-medium text-primary duration-300 hover:text-secondary"
                        >
                            info@aparahoteladvisers.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="container mt-14">
                <div className="flex flex-col items-center gap-3 border-t border-gray-200 py-6 text-[10px] text-text lg:flex-row lg:justify-between">
                    <p>© 2026 Apara Hotel Advisers</p>
                    <p>Review preview · Final approvals pending</p>
                    <Link to="/privacy-notice" className="duration-300 hover:text-secondary">
                        Privacy Notice
                    </Link>
                </div>
            </div>
        </footer>
    );
}