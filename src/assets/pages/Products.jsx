import React from 'react';

const products = [
    { name: "Doku Kültürü Fidanları", desc: "Laboratuvarda üretilmiş, hastalıksız, homojen fidanlar." },
    { name: "Tohumlar / Klonlar", desc: "Genetik olarak sabitlenmiş, yüksek verimli klonlar." },
    { name: "Talep Üzerine Üretim", desc: "Siparişe özel üretim imkânı, sözleşmeli üretim desteğiyle." },
];

export default function Products() {
    return (
        <div className="min-h-screen bg-white py-16 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-green-800 mb-10">Ürünlerimiz</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded border shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-green-700 mb-2">{item.name}</h3>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
