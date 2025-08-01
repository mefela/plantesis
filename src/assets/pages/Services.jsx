import React from 'react';

const services = [
    {
        title: "Bitki Doku Kültürü",
        desc: "Steril ortamda çoğaltım yapılarak sağlıklı, homojen bitkiler elde edilir.",
    },
    {
        title: "Klonlama",
        desc: "Genetik olarak birebir aynı bitkilerin laboratuvar ortamında çoğaltılması.",
    },
    {
        title: "Meristem Temizliği",
        desc: "Virüs, bakteri ve fungal hastalıklardan arındırılmış genç bitki üretimi.",
    },
    {
        title: "AR-GE ve Özel Projeler",
        desc: "Müşteriye özel geliştirme hizmetleri ve yeni biyoteknolojik çözümler.",
    },
    {
        title: "Sözleşmeli Üretim",
        desc: "İsteğe özel üretim anlaşmaları ile güvenli tedarik süreçleri.",
    },
    {
        title: "Steril Alan Kiralama",
        desc: "Laboratuvarımızdan proje bazlı steril üretim alanı kiralama imkânı.",
    },
];

export default function Services() {
    return (
        <div className="min-h-screen bg-white py-16 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-green-800 mb-10">Hizmetlerimiz</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((item, i) => (
                    <div key={i} className="bg-green-50 p-6 rounded shadow hover:shadow-md">
                        <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
