export default function TeamCard({ name, title, image, linkedin, researchgate }) {
    return (
        <div className="w-96 h-[420px] bg-white/60 backdrop-blur-md rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300">
            {/* Avatar */}
            <div className="w-52 h-52 rounded-full overflow-hidden border-y-4 border-green-700 outline-2 outline-green-700 p-2 shadow-lg transition-all duration-[1500ms]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* İsim & Ünvan */}
            <h3 className="text-xl font-semibold text-green-800 mt-4">{name}</h3>
            <p className="text-sm text-gray-700">{title}</p>

            <div className="flex">
                {/* LinkedIn Icon */}
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-green-800 hover:text-green-600 transition duration-300 transform hover:scale-120"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-9 h-9 fill-current"
                        >
                            <path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z" />
                        </svg>
                    </a>
                )}
                {researchgate && (
                    <a
                        href={researchgate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 mt-3 ml-3 text-green-800 hover:text-green-600 transition duration-300 transform hover:scale-120 rounded-full"
                    >
                        <img
                            src="./assets/researchgateicon.png"
                            alt=""
                            className="w-7.5 h-7.5 fill-current" />
                    </a>
                )}
            </div>
        </div>
    );
}
