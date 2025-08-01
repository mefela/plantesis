import React from 'react';
import TeamSection from '../sections/TeamSection';

export default function Team() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold text-green-800 mb-8">Plantesis Ekibi</h1>
                <TeamSection />
                {/* Daha detaylı biyografi, LinkedIn linki, uzmanlık alanı vs. burada eklenebilir */}
            </div>
        </div>
    );
}
