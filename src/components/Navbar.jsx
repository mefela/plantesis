import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // lucide-react icons

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "Anasayfa", href: "#home" },
        { name: "Hakkımızda", href: "#about" },
        { name: "Hizmetler", href: "#services" },
        { name: "Ekibimiz", href: "#team" },
        { name: "İletişim", href: "#contact" },
    ];

    return (
        <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <img src="../assets/plantesis-logo.png" alt="" />


                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-8">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="relative text-gray-800 font-medium hover:text-green-700  duration-300 transition-all"
                            >
                                {item.name}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-green-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <ul className="md:hidden px-4 pb-4 space-y-4 bg-white border-t">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="block text-gray-800 font-medium hover:text-green-700 transition"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
