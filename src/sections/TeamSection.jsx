import TeamCard from "../components/TeamCard";

const teamData = [
    {
        name: "Enes Yasin Şen",
        title: "Biyoteknoloji Uzmanı",
        image: "/assets/servicesmidr.png",
        linkedin: "https://www.linkedin.com/in/elif-demir",
        researchgate: "https://www.researchgate/blabla",
    },
    {
        name: "Berfin Düzgören",
        title: "Biyoteknoloji Uzmanı",
        image: "/assets/servicesmidr.png",
        linkedin: "https://www.linkedin.com/in/ahmet-yildiz",
        researchgate: "https://www.researchgate/blabla",
    },
    // Diğer ekip üyeleri...
];

export default function TeamSection() {
    return (
        <section id="team" className="py-20 bg-white">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Ekibimiz</h2>
            <div className="flex flex-wrap justify-center gap-10">
                {teamData.map((member, idx) => (
                    <TeamCard key={idx} {...member} />
                ))}
            </div>
        </section>
    );
}
