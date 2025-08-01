import React from 'react';

const references = [
    { name: "Anadolu Üniversitesi", type: "Üniversite" },
    { name: "Zirai Tarım A.Ş.", type: "Özel Sektör" },
    { name: "Eskişehir Tarım İl Müdürlüğü", type: "Kamu Kurumu" },
];

const publications = [
    { title: "Doku Kültürüyle Üretimde Verimlilik", year: "2023", journal: "Tarımsal Biyoteknoloji Dergisi" },
    { title: "Meristem Temizliği Üzerine Uygulamalar", year: "2022", journal: "Bitki Bilimi Bülteni" },
];

export default function References() {
    return (
        <div className="min-h-screen bg-white py-16 px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-green-800 mb-10">Referanslar & İş Birlikleri</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">İş Birlikleri</h2>
                <ul className="list-disc list-inside text-gray-700">
                    {references.map((r, i) => (
                        <li key={i}>{r.name} – <span className="text-sm text-gray-500">{r.type}</span></li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">Akademik Yayınlar</h2>
                <ul className="list-disc list-inside text-gray-700">
                    {publications.map((p, i) => (
                        <li key={i}>{p.title} ({p.year}) – <span className="text-sm text-gray-500">{p.journal}</span></li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
