import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-second-color py-4 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link className="text-white text-2xl font-bold uppercase" to="/">
                        Start Framework
                    </Link>
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        <span className="block w-6 h-0.5 bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </button>
                    <div className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-second-color md:bg-transparent`}>
                        <ul className="flex flex-col md:flex-row md:ml-auto md:mb-0 md:mt-0 mt-4 md:mt-0">
                            <li className="md:mr-6 mb-3 md:mb-0">
                                <Link
                                    className="text-white uppercase font-bold px-2 py-2 block md:inline"
                                    to="/about"
                                    onClick={() => setIsOpen(false)}
                                >
                                    about
                                </Link>
                            </li>
                            <li className="md:mr-6 mb-3 md:mb-0">
                                <Link
                                    className="text-white uppercase font-bold px-2 py-2 block md:inline"
                                    to="/portfolio"
                                    onClick={() => setIsOpen(false)}
                                >
                                    portfolio
                                </Link>
                            </li>
                            <li className="md:mr-6 mb-3 md:mb-0">
                                <Link
                                    className="text-white uppercase font-bold px-2 py-2 block md:inline"
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                >
                                    contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
