import React from 'react';

export default function About() {
    return (
        <div className="min-h-screen bg-white py-16 px-4 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-green-800 mb-8">Hakkımızda</h1>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-green-700 mb-2">Misyonumuz</h2>
                <p className="text-gray-700">
                    Sürdürülebilir tarımı desteklemek ve sağlıklı bitkiler üretmek için yüksek kaliteli biyoteknolojik çözümler sunmak.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-green-700 mb-2">Vizyonumuz</h2>
                <p className="text-gray-700">
                    Türkiye'nin lider bitki biyoteknolojisi firması olmak ve globalde tanınan bir inovasyon merkezi haline gelmek.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-green-700 mb-2">Kalite Politikamız</h2>
                <p className="text-gray-700">
                    ISO standartlarına uygun, izlenebilir ve kontrollü üretim süreçleriyle güvenilir hizmet sunuyoruz.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-green-700 mb-2">Belgeler / Sertifikalar</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>ISO 9001 Kalite Yönetim Sistemi</li>
                    <li>GMP Sertifikası (Varsa)</li>
                    <li>Tarım Bakanlığı Üretim Ruhsatı</li>
                </ul>
            </section>
        </div>
    );
}
