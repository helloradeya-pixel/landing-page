const Gallery = () => {
    return (
        <section
            style={{
                background: "black",
                padding: "80px 12px",
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
                            color: "white",
                            fontSize: "42px",
                            fontWeight: 600,
                            marginTop: "20px",
                        }}
                    >
                        Captured Moments
                    </h2>

                    <p
                        style={{
                            color: "#a3a3a3",
                            fontSize: "15px",
                            lineHeight: "1.8",
                            marginTop: "24px",
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
                        gap: "8px",
                    }}
                >

                    <img
                        src="/assets/images/ADS00529.jpg"
                        style={{
                            width: "100%",
                            aspectRatio: "3/4",
                            objectFit: "cover",
                            borderRadius: "12px",
                        }}
                    />

                    <img
                        src="/assets/images/ADS00598.jpg"
                        style={{
                            width: "100%",
                            aspectRatio: "3/4",
                            objectFit: "cover",
                            borderRadius: "12px",
                        }}
                    />

                    <img
                        src="/assets/images/ADS00467.jpg"
                        style={{
                            width: "100%",
                            aspectRatio: "3/4",
                            objectFit: "cover",
                            borderRadius: "12px",
                        }}
                    />

                    <img
                        src="/assets/images/ADS00008.jpg"
                        style={{
                            width: "100%",
                            aspectRatio: "3/4",
                            objectFit: "cover",
                            borderRadius: "12px",
                        }}
                    />

                    <img
                        src="/assets/images/ADS00119.jpg"
                        style={{
                            width: "100%",
                            aspectRatio: "3/4",
                            objectFit: "cover",
                            borderRadius: "12px",
                        }}
                    />

                    <img
                        src="/assets/images/ADS00128.jpg"
                        style={{
                            width: "100%",
                            aspectRatio: "3/4",
                            objectFit: "cover",
                            borderRadius: "12px",
                        }}
                    />

                </div>
            </div>
        </section>
    );
};

export { Gallery };
