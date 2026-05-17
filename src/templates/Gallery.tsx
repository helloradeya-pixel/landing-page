const images = [
    "/assets/images/ADS00529.jpg",
    "/assets/images/ADS00598.jpg",
    "/assets/images/ADS00467.jpg",
    "/assets/images/ADS00008.jpg",
    "/assets/images/ADS00119.jpg",
    "/assets/images/ADS00128.jpg",
    "/assets/images/ADS00529.jpg",
    "/assets/images/ADS00598.jpg",
    "/assets/images/ADS00467.jpg",
];

const Gallery = () => {
    return (
        <section className="bg-black px-4 py-24 md:px-16">
            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                        Visual Archive
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
                        Captured Moments
                    </h2>

                    <p className="mt-6 text-sm leading-relaxed text-neutral-400 md:text-base">
                        Kami percaya setiap perjalanan memiliki detail yang layak dihormati.
                        Dari momen paling sederhana hingga hari paling penting,
                        kami menerjemahkannya menjadi visual yang tenang, elegan, dan abadi.
                    </p>
                </div>

                {/* GRID */}
                <div className="mt-16 grid grid-cols-3 gap-2 md:gap-5">

                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="
                                group
                                overflow-hidden
                                rounded-md
                                md:rounded-2xl
                                bg-neutral-900
                                opacity-0
                                animate-fadeUp
                            "
                            style={{
                                animationDelay: `${i * 120}ms`,
                                animationFillMode: "forwards",
                            }}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${i + 1}`}
                                loading="lazy"
                                className="
                                    aspect-[3/4]
                                    h-full
                                    w-full
                                    object-cover
                                    transition-all
                                    duration-700
                                    ease-out
                                    group-hover:scale-110
                                    group-hover:brightness-110
                                "
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export { Gallery };
