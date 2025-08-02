import TeamCard from "../components/TeamCard";

const teamData = [
    {
        name: "Berfin Düzgören",
        title: "Biyoteknoloji Uzmanı",
        image: "/assets/servicesmidr.png",
        linkedin: "https://www.linkedin.com/in/elif-demir",
        researchgate: "https://www.researchgate/blabla",
    },
    {
        name: "Enes Yasin Şen",
        title: "Biyoteknoloji Uzmanı",
        image: "/assets/servicesmidr.png",
        linkedin: "https://www.linkedin.com/in/ahmet-yildiz",
        researchgate: "https://www.researchgate/blabla",
    },
    // Diğer ekip üyeleri...
];

export default function TeamSection() {
    return (
        <section id="team" className="py-20 bg-white relative overflow-hidden">
            {/* Masaüstü için köşe ışınları */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-800 to-transparent opacity-40 z-0" />
            <div className="hidden md:block absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-green-800 to-transparent opacity-40 z-0" />
            <div className="hidden md:block absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-green-800 to-transparent opacity-40 z-0" />
            <div className="hidden md:block absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-green-800 to-transparent opacity-40 z-0" />

            <h2 className="text-4xl font-bold text-center text-green-800 relative z-10 mb-16">
                Ekibimiz
            </h2>

            <div className="flex flex-wrap justify-center gap-10 relative z-10 px-4">
                {teamData.map((member, idx) => (
                    <TeamCard key={idx} {...member} />
                ))}
            </div>
        </section>
    );
}
