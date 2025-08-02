import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative py-20 px-6 bg-white overflow-hidden 
                before:content-[''] before:absolute before:inset-0 
                before:bg-[url('/assets/contactbg.png')] 
                before:bg-no-repeat before:bg-cover before:bg-center 
                before:opacity-30 before:z-0"
        >
            <motion.div
                className="max-w-4xl mx-auto relative z-10"
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
            >
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    İletişim
                </motion.h2>

                <motion.form
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, delay: 0.5 }}
                >
                    <input
                        type="text"
                        placeholder="Adınız"
                        className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                    />
                    <input
                        type="email"
                        placeholder="E-posta"
                        className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                    />
                    <textarea
                        placeholder="Mesajınız"
                        rows={5}
                        className="md:col-span-2 p-3 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-700"
                    />
                    <button
                        type="submit"
                        className="bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition md:col-span-2 font-medium"
                    >
                        Gönder
                    </button>
                </motion.form>

                <motion.div
                    className="text-center mt-10 text-sm text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <p className="mb-1">📍 Eskişehir, Türkiye</p>
                    <p>📧 info@plantesis.com</p>
                </motion.div>
            </motion.div>
        </section>
    );
}
