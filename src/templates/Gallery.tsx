const Gallery = () => {
    return (
        <section className="bg-black px-8 py-28 md:px-16">
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
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    <div className="group overflow-hidden rounded-2xl">
                        <img
                            src="/assets/images/ads00529.jpg"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05] group-hover:brightness-110"
                        />
                    </div>

                    <div className="group overflow-hidden rounded-2xl">
                        <img
                            src="/assets/images/ads00598.jpg"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05] group-hover:brightness-110"
                        />
                    </div>

                    <div className="group overflow-hidden rounded-2xl">
                        <img
                            src="/assets/images/ads00467.jpg"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05] group-hover:brightness-110"
                        />
                    </div>

                    <div className="group overflow-hidden rounded-2xl">
                        <img
                            src="/assets/images/ads00008.jpg"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05] group-hover:brightness-110"
                        />
                    </div>

                    <div className="group overflow-hidden rounded-2xl">
                        <img
                            src="/assets/images/ads00119.jpg"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05] group-hover:brightness-110"
                        />
                    </div>

                    <div className="group overflow-hidden rounded-2xl">
                        <img
                            src="/assets/images/ads00128.jpg"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05] group-hover:brightness-110"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export { Gallery };