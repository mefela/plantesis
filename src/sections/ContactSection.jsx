import React from 'react';

export default function ContactSection() {
    return (
        <section id="contact" className="bg-green-50 py-16">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-green-800 text-center mb-10">İletişim</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Adınız" className="p-3 border rounded" />
                    <input type="email" placeholder="E-posta" className="p-3 border rounded" />
                    <textarea placeholder="Mesajınız" rows="4" className="md:col-span-2 p-3 border rounded" />
                    <button className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800 md:col-span-2">
                        Gönder
                    </button>
                </form>
                <div className="text-center mt-8 text-sm text-gray-700">
                    <p>📍 Eskişehir, Türkiye</p>
                    <p>📧 info@plantesis.com</p>
                </div>
            </div>
        </section>
    );
}
