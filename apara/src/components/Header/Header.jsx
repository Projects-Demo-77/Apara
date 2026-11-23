// import React, {useState} from 'react'
// import {Link, NavLink} from 'react-router-dom'
// import logo from "../../assets/logo/logo-apara-black.png";

// export default function Header() {
//     const [open, setOpen] = useState(false)

//     return (
//         <header className="outer-container shadow sticky z-50 top-0">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="inner-container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             src={logo}
//                             className="mr-3 h-10"
//                             alt="Apara"
//                         />
//                     </Link>
//                     <div className="flex items-center lg:order-2">
//                         <Link
//                             to="/contact-us"
//                             className="btn-primary hidden lg:inline-flex"
//                         >
//                             Discuss Your Asset
//                         </Link>
//                         <button
//                             type="button"
//                             className="ml-3 text-2xl text-[#111111] lg:hidden"
//                             onClick={() => setOpen(!open)}
//                             aria-label="Toggle menu"
//                         >
//                             {open ? "✕" : "☰"}
//                         </button>
//                     </div>
//                     <div
//                         className={`${open ? "flex" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1 lg:ml-auto lg:mr-[30px]`}
//                         id="mobile-menu-2"
//                     >
//                         <ul onClick={() => setOpen(false)} className="flex flex-col mt-4 font-normal lg:flex-row lg:space-x-[30px] lg:mt-0">
//                             <li>
//                                 <NavLink
//                                 to="/"
//                                     className={({isActive}) =>
//                                         `relative block py-2 pr-4 pl-3 duration-200 font-body text-[11px] capitalize after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-[#81673C] after:origin-left after:transition-transform after:duration-300 ${isActive ? "text-[#81673C] after:scale-x-100" : "text-[#111111] after:scale-x-0"} hover:bg-gray-50 lg:hover:bg-transparent hover:text-[#81673C] hover:after:scale-x-100 lg:p-0 lg:pb-2`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/about-us"
//                                     className={({isActive}) =>
//                                         `relative block py-2 pr-4 pl-3 duration-200 font-body text-[11px] capitalize after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-[#81673C] after:origin-left after:transition-transform after:duration-300 ${isActive ? "text-[#81673C] after:scale-x-100" : "text-[#111111] after:scale-x-0"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#81673C] hover:after:scale-x-100 lg:p-0 lg:pb-2`
//                                     }
//                                 >
//                                     About Us
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/services"
//                                     className={({isActive}) =>
//                                         `relative block py-2 pr-4 pl-3 duration-200 font-body text-[11px] capitalize after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-[#81673C] after:origin-left after:transition-transform after:duration-300 ${isActive ? "text-[#81673C] after:scale-x-100" : "text-[#111111] after:scale-x-0"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#81673C] hover:after:scale-x-100 lg:p-0 lg:pb-2`
//                                     }
//                                 >
//                                     Services
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/projects"
//                                     className={({isActive}) =>
//                                         `relative block py-2 pr-4 pl-3 duration-200 font-body text-[11px] capitalize after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-[#81673C] after:origin-left after:transition-transform after:duration-300 ${isActive ? "text-[#81673C] after:scale-x-100" : "text-[#111111] after:scale-x-0"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#81673C] hover:after:scale-x-100 lg:p-0 lg:pb-2`
//                                     }
//                                 >
//                                     Projects
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/destinations"
//                                     className={({isActive}) =>
//                                         `relative block py-2 pr-4 pl-3 duration-200 font-body text-[11px] capitalize after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-[#81673C] after:origin-left after:transition-transform after:duration-300 ${isActive ? "text-[#81673C] after:scale-x-100" : "text-[#111111] after:scale-x-0"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#81673C] hover:after:scale-x-100 lg:p-0 lg:pb-2`
//                                     }
//                                 >
//                                     Destinations
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/our-team"
//                                     className={({isActive}) =>
//                                         `relative block py-2 pr-4 pl-3 duration-200 font-body text-[11px] capitalize after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-[#81673C] after:origin-left after:transition-transform after:duration-300 ${isActive ? "text-[#81673C] after:scale-x-100" : "text-[#111111] after:scale-x-0"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#81673C] hover:after:scale-x-100 lg:p-0 lg:pb-2`
//                                     }
//                                 >
//                                     Our Team
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/contact-us"
//                                     className={({isActive}) =>
//                                         `relative block py-2 pr-4 pl-3 duration-200 font-body text-[11px] capitalize after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-[#81673C] after:origin-left after:transition-transform after:duration-300 ${isActive ? "text-[#81673C] after:scale-x-100" : "text-[#111111] after:scale-x-0"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#81673C] hover:after:scale-x-100 lg:p-0 lg:pb-2`
//                                     }
//                                 >
//                                     Contact Us
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }


import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from "../../assets/logo/logo-apara-black.png";

export default function Header() {
    // open = mobile menu open or closed
    const [open, setOpen] = useState(false)

    return (
  
        <header className="header sticky top-0 z-50 border-b border-[#E5E5E5]">
            
            <nav className="container flex flex-wrap justify-between items-center py-6">

                <Link to="/">
                    <img src={logo} className="h-10" alt="Apara" />
                </Link>

                <div className="flex items-center lg:order-2">
                    <Link to="/contact-us" className="btn-primary hidden lg:inline-flex">
                        Discuss Your Asset
                    </Link>

                    {/* hamburger only on mobile */}
                    <button
                        type="button"
                        className="text-2xl lg:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>

                <div
                    className={`${open ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:order-1 lg:ml-auto lg:mr-[30px]`}
                    id="mobile-menu-2"
                >
                  
                    <ul
                        onClick={() => setOpen(false)}
                        className="flex flex-col mt-4 lg:flex-row lg:gap-[30px] lg:mt-0"
                    >
                    
                        <li>
                            <NavLink
                                to="/"
                                className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about-us"
                                className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/destinations"
                                className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
                            >
                                Destinations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/our-team"
                                className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
                            >
                                Our Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact-us"
                                className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}