import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section id="home" className="relative bg-gradient-to-br from-green-100 to-white py-32 overflow-hidden">
            {/* SVG Pattern veya Görsel */}
            <div className="absolute inset-0 opacity-65 bg-[url('./assets/biotech1.png')] bg-cover bg-center" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">


                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } },
                        hidden: {},
                    }}
                >
                    <motion.h1
                        className="text-5xl font-extrabold text-green-800 mb-2 leading-tight"
                        variants={{
                            hidden: { opacity: 0, y: -40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8 }}
                    >
                        Bitki Biyoteknolojisinde
                    </motion.h1>

                    <motion.h1
                        className="text-5xl font-extrabold text-green-800 mb-6 leading-tight"
                        variants={{
                            hidden: { opacity: 0, y: -40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Güvenilir Ortağınız
                    </motion.h1>

                    <motion.p
                        className="text-lg text-green-800 font-bold max-w-2xl mx-auto"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        Doku kültürü, klonlama ve steril üretimde yenilikçi çözümlerle geleceği üretiyoruz.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="mt-10 flex justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <a href="#services" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
                        Hizmetlerimizi Keşfet
                    </a>
                    <a href="#about" className="text-green-700 border border-green-700 px-6 py-3 rounded hover:bg-green-50 transition">
                        Hakkımızda
                    </a>
                </motion.div>
            </div>
            <hr
                class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-green-800 to-transparent opacity-25 dark:via-green-400" />
        </section>
    );
}
