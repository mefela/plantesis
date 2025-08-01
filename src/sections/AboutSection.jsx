import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
    {
        title: "Kritik Analizler",
        content: "Bitki dokularında hücre düzeyinde analizler yaparak, biyoteknolojik karar süreçlerini destekliyoruz.",
        image: "/assets/ornekresim1.png",
    },
    {
        title: "Güvenilirlik",
        content: "Steril ve kontrollü üretim sayesinde her partide tutarlılık sağlıyoruz.",
        image: "/assets/ornekresim1.png",
    },
    {
        title: "Zaman Tasarrufu",
        content: "Süreçleri hızlandıran altyapımız ile üretim süresi minimize edilir.",
        image: "/assets/ornekresim1.png",
    },
    {
        title: "Uzaktan İzleme",
        content: "Üretimi ve gelişimi canlı olarak takip etme imkanı sunar.",
        image: "/assets/ornekresim1.png",
    },
    {
        title: "Hızlı Kurulum",
        content: "Hızlı başlangıç için hazır protokol ve altyapı çözümleri sunarız.",
        image: "/assets/ornekresim1.png",
    },
];

export default function ectionModern() {
    const [selected, setSelected] = useState(0);

    return (
        <section id="about" className="py-28 relative overflow-hidden">
            {/* Arka plan görseli */}
            <div className="absolute inset-0">
                <img
                    src="/assets/servicesectionbg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-35"
                />
            </div>

            {/* Animasyonlu başlık */}
            <motion.h2
                className="text-5xl font-bold text-center text-green-800 mb-20 relative z-10"
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: -10 }}
                transition={{ duration: 1, delay: 1 }}
            >
                Hakkımızda
            </motion.h2>

            {/* Kartlar alanı */}
            <div className="max-w-7xl mx-auto rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row relative z-0 shadow-green-800/40 bg-[url(/assets/plantesisbanner-div.png)] bg-contain bg-right bg-no-repeat">
                {/* Sol Menü */}
                <div className="w-full lg:w-[360px] border-r border-green-800/30 border-s-green-800">
                    {features.map((f, i) => (
                        <button
                            key={i}
                            onClick={() => setSelected(i)}
                            className={`w-full text-left px-8 py-6 transition-all duration-300 ease-in-out text-base font-semibold border-b border-white/30
    ${selected === i
                                    ? "bg-green-800 text-white shadow-inner"
                                    : "text-green-800 hover:bg-green-600 hover:text-white hover:shadow-lg"
                                }`}
                        >
                            {f.title}
                        </button>


                    ))}
                </div>

                {/* Sağ İçerik */}
                <div className="flex-1 p-5 backdrop-blur-xs bg-white/40 flex flex-col lg:flex-row gap-10 ">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected}
                            className="flex flex-col lg:flex-row  gap-10"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Görsel - mask uygulanmış */}
                            <div
                                className="w-80 h-80 rounded-xl shadow bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${features[selected].image})`,
                                    WebkitMaskImage: "url('/assets/scribble1.png')",
                                    WebkitMaskRepeat: "no-repeat",
                                    WebkitMaskSize: "cover",
                                    WebkitMaskPosition: "center",
                                    maskImage: "url('/assets/scribble1.png')",
                                    maskRepeat: "no-repeat",
                                    maskSize: "380px",
                                    maskPosition: "center",
                                }}
                            ></div>

                            {/* Metin */}
                            <div className="flex flex-col items-start max-w-2xl mt-6">
                                <h3 className="text-3xl font-bold text-green-800 mb-8">
                                    {features[selected].title}
                                </h3>
                                <p className="text-gray-800 text-base leading-relaxed">
                                    {features[selected].content}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>

    );
}
