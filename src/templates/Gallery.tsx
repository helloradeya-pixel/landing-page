const Gallery = () => {
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

    return (
        <section
            style={{
                backgroundColor: "#000",
                padding: "100px 10px",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >

                {/* HEADER */}
                <div
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                >
                    <p
                        style={{
                            color: "#737373",
                            fontSize: "12px",
                            letterSpacing: "0.4em",
                            textTransform: "uppercase",
                        }}
                    >
                        Visual Archive
                    </p>

                    <h2
                        style={{
                            color: "#fff",
                            fontSize: "42px",
                            fontWeight: "600",
                            marginTop: "20px",
                        }}
                    >
                        Captured Moments
                    </h2>

                    <p
                        style={{
                            color: "#a3a3a3",
                            marginTop: "24px",
                            lineHeight: "1.8",
                            fontSize: "15px",
                        }}
                    >
                        Kami percaya setiap perjalanan memiliki detail yang layak dihormati.
                        Dari momen paling sederhana hingga hari paling penting,
                        kami menerjemahkannya menjadi visual yang tenang, elegan, dan abadi.
                    </p>
                </div>

                {/* GRID */}
                <div
                    style={{
                        marginTop: "60px",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "6px",
                    }}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            style={{
                                overflow: "hidden",
                                borderRadius: "10px",
                            }}
                        >
                            <img
                                src={img}
                                alt=""
                                style={{
                                    width: "100%",
                                    aspectRatio: "3 / 4",
                                    objectFit: "cover",
                                    display: "block",
                                    transition: "0.7s",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "scale(1.08)";
                                    e.currentTarget.style.filter = "brightness(1.08)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.filter = "brightness(1)";
                                }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export { Gallery };
