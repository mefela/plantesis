import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const services = [
    { title: "Doku Kültürü", description: "Steril üretim, hastalıksız bitkiler." },
    { title: "Klonlama", description: "Genetik olarak birebir üretim." },
    { title: "Meristem", description: "Virüssüz fidan temizliği." },
    { title: "Ar-Ge Projeleri", description: "Özel biyoteknolojik çözümler." },
    { title: "Sözleşmeli Üretim", description: "Planlı, güvenli tedarik." },
    { title: "Steril Alan Kiralama", description: "Kendi projenize özel alan." },
];

export default function ServicesSectionCircle() {
    const sectionRef = useRef(null);
    const [radius, setRadius] = useState(0);
    const [animateText, setAnimateText] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setRadius(330), 100); // yarıçap genişlet
                    setTimeout(() => setAnimateText(true), 800); // yazıları getir
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-12 relative bg-white overflow-hidden
    before:content-[''] before:absolute before:inset-0 
    before:bg-[url('/assets/servicesectionbg.png')] 
    before:bg-no-repeat before:bg-cover before:bg-center 
    before:opacity-35 shadow before:z-0">

            {/* Köşe ışınları */}
            {/* Sağ Alt - Sola */}
            <div className="absolute bottom-0 right-0 w-1/2 h-[2px] bg-gradient-to-l from-green-800 to-transparent opacity-45 pointer-events-none" />
            {/* Sağ Alt - Yukarı */}
            <div className="absolute bottom-0 right-0 h-1/2 w-[2px] bg-gradient-to-t from-green-800 to-transparent opacity-45 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-800 to-transparent opacity-45 pointer-events-none shadow-lg shadow-green-700   " />
            <div className="absolute top-0 left- h-full w-[2px] bg-gradient-to-b from-green-800 to-transparent opacity-45 pointer-events-none  shadow-lg shadow-green-500" />

            <motion.h2
                className="text-5xl font-bold text-center text-green-800 mt-14 relative z-10"
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: -10 }}
                transition={{ duration: 1, delay: 1 }}
            >
                Hizmetlerimiz
            </motion.h2>

            <div className="relative w-[1000px] h-[1000px] mx-auto transition-all duration-[1500ms]">
                {/* Ortadaki DNA görseli */}
                <img
                    src="/assets/servicesmidr.png"
                    alt="DNA Sarmalı"
                    className="w-60 h-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                />

                {services.map((s, i) => {
                    const angle = (360 / services.length) * i;
                    const x = radius * Math.cos((angle * Math.PI) / 180);
                    const y = radius * Math.sin((angle * Math.PI) / 180);

                    return (
                        <div
                            key={i}
                            className="absolute w-54 h-54 rounded-full border-y-4 border-green-700 outline-2 outline-green-700 p-2  overflow-hidden shadow-lg transition-all duration-[1500ms]"
                            style={{
                                top: `calc(50% + ${y}px - 96px)`,
                                left: `calc(50% + ${x}px - 96px)`,
                            }}
                        >
                            <img
                                src="/assets/servicesmidr.png"
                                alt={s.title}
                                className="w-full h-full object-cover opacity-30"
                            />
                            <div
                                className={`absolute inset-0 flex flex-col items-center justify-center text-center px-2 transition-all duration-1000 ${animateText ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <h3 className="text-green-800 font-bold text-md">{s.title}</h3>
                                <p className="text-xs text-gray-700 mt-1">{s.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
