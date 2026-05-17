const Gallery = () => {
    return (
        <section className="bg-black py-24 px-3 md:px-10">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                        Visual Archive
                    </p>

                    <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white">
                        Captured Moments
                    </h2>

                    <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-400">
                        Kami percaya setiap perjalanan memiliki detail yang layak dihormati.
                        Dari momen paling sederhana hingga hari paling penting,
                        kami menerjemahkannya menjadi visual yang tenang, elegan, dan abadi.
                    </p>
                </div>

                {/* GRID */}
                <div className="mt-14 grid grid-cols-3 gap-2 md:gap-4">

                    <div className="overflow-hidden rounded-lg md:rounded-2xl group">
                        <img
                            src="/assets/images/ADS00529.jpg"
                            alt=""
                            loading="lazy"
                            className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>

                    <div className="overflow-hidden rounded-lg md:rounded-2xl group">
                        <img
                            src="/assets/images/ADS00598.jpg"
                            alt=""
                            loading="lazy"
                            className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>

                    <div className="overflow-hidden rounded-lg md:rounded-2xl group">
                        <img
                            src="/assets/images/ADS00467.jpg"
                            alt=""
                            loading="lazy"
                            className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>

                    <div className="overflow-hidden rounded-lg md:rounded-2xl group">
                        <img
                            src="/assets/images/ADS00008.jpg"
                            alt=""
                            loading="lazy"
                            className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>

                    <div className="overflow-hidden rounded-lg md:rounded-2xl group">
                        <img
                            src="/assets/images/ADS00119.jpg"
                            alt=""
                            loading="lazy"
                            className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>

                    <div className="overflow-hidden rounded-lg md:rounded-2xl group">
                        <img
                            src="/assets/images/ADS00128.jpg"
                            alt=""
                            loading="lazy"
                            className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>

                    <div className="overflow-hidden rounded-lg md:rounded-2xl group">
                        <img
                            src="/assets/images/ADS00529.jpg"
                            alt=""
                            loading="lazy"
                            className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>

                    <div className="overflow-hidden rounded-lg md:rounded-2xl group">
                        <img
                            src="/assets/images/ADS00598.jpg"
                            alt=""
                            loading="lazy"
                            className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>

                    <div className="overflow-hidden rounded-lg md:rounded-2xl group">
                        <img
                            src="/assets/images/ADS00467.jpg"
                            alt=""
                            loading="lazy"
                            className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export { Gallery };
