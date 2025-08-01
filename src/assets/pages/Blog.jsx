import React from 'react';

const posts = [
    {
        title: "Doku Kültürü Nedir?",
        excerpt: "Bitki biyoteknolojisinin temeli olan doku kültürü tekniği hakkında genel bilgiler.",
        date: "2025-04-15"
    },
    {
        title: "Bitki Klonlama Süreci",
        excerpt: "Laboratuvar ortamında bitki klonlamanın temel adımları ve uygulama alanları.",
        date: "2025-05-10"
    },
    {
        title: "LED Aydınlatmanın Önemi",
        excerpt: "Doku kültürü laboratuvarlarında kullanılan LED teknolojilerinin avantajları.",
        date: "2025-06-01"
    },
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-white py-16 px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-green-800 mb-10">Blog / Bilgi Merkezi</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, i) => (
                    <div key={i} className="border rounded p-6 shadow hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-green-700 mb-2">{post.title}</h2>
                        <p className="text-gray-700 text-sm mb-2">{post.excerpt}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
