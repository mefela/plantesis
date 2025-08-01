import React from 'react';

export default function Contact() {
    return (
        <div className="min-h-screen bg-green-50 py-16 px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-green-800 mb-10 text-center">İletişim</h1>

            <form className="grid grid-cols-1 gap-6 mb-12">
                <input type="text" placeholder="Ad Soyad" className="p-3 border rounded" />
                <input type="email" placeholder="E-posta" className="p-3 border rounded" />
                <textarea placeholder="Mesajınız" rows="5" className="p-3 border rounded" />
                <button className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800 w-fit">
                    Gönder
                </button>
            </form>

            <div className="text-sm text-gray-700 text-center">
                <p>📧 info@plantesis.com</p>
                <p>📍 Eskişehir, Türkiye</p>
                <div className="mt-6">
                    <iframe
                        title="Google Maps"
                        className="w-full h-64 border rounded"
                        src="https://maps.google.com/maps?q=eskişehir&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
