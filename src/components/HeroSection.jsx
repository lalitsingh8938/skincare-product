import React, { useState, useEffect } from "react";

export default function HeroSection() {
  // SLIDER IMAGES
  const images = [
    "/1761800836298_content.png",
    "/1762321382550_content.png",
    "/assorted-skincare-items-display_961875-155521.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center px-10 relative">
      {/* Content Wrapper */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            Shine Beyond Limits
          </h1>

          <h2 className="text-2xl text-white/90 mt-2 drop-shadow">
            With Glycolic Gloss Range
          </h2>

          <p className="text-white/80 mt-4 max-w-lg leading-relaxed drop-shadow">
            Transform your hair with our revolutionary Glycolic Acid
            Complex-powered range that delivers mirror-like shine and activates
            more gloss.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-white text-yellow-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-yellow-100 transition">
              DISCOVER NOW
            </button>

            <button className="border border-white px-6 py-2 rounded-full text-white font-semibold hover:bg-white/20 transition">
              WATCH VIDEO
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="flex-1 flex justify-center">
          <div
            className="
              w-full h-56
              md:w-[500px] md:h-[300px]
              lg:w-[650px] lg:h-[360px]
              xl:w-[600px] xl:h-[420px]
              rounded-2xl overflow-hidden shadow-xl bg-black relative
            "
          >
            {/* IMAGE SLIDES */}
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Slide"
                className={`
                  w-full h-full object-cover absolute inset-0 transition-opacity duration-700
                  ${index === current ? "opacity-100" : "opacity-0"}
                `}
              />
            ))}

            {/* TEXT OVER IMAGE */}
            <div className="absolute bottom-4 left-4 text-white drop-shadow">
              <h3 className="font-bold text-xl lg:text-2xl">
                Glycolic Gloss Range
              </h3>
              <p className="text-sm lg:text-base">Transform Your Hair</p>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER DOTS */}
      <div className="absolute bottom-6 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`
              w-3 h-3 rounded-full
              ${index === current ? "bg-white" : "bg-white/40"}
            `}
          ></div>
        ))}
      </div>
    </section>
  );
}
