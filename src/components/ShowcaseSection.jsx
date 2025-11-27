import React from "react";

export default function ShowcaseSection() {
  const items = [
    { type: "video", src: "/download (14).mp4" },
    { type: "image", src: "/1762321382550_content.png" },
    { type: "video", src: "/download (3).mp4" },
    { type: "image", src: "/Image (4).png" },

    { type: "image", src: "/1763033388883_content.png" },
    { type: "video", src: "/download (15).mp4" },
    { type: "image", src: "/1763035782999_content.png" },

    { type: "video", src: "/download (16).mp4" },
    { type: "video", src: "/download (17).mp4" },
    { type: "image", src: "/image (25).png" },
    { type: "video", src: "/download (18).mp4" },
    { type: "image", src: "/image (26).png" },
    {
      type: "video",
      src: "/WhatsApp Video 2025-11-17 at 14.25.44_5598df3b.mp4",
    },

    { type: "image", src: "/1763061341638_content.png" },
    { type: "video", src: "/download (13).mp4" },

    { type: "image", src: "/image (13).jpg" },
    { type: "image", src: "/image (8).jpg" },
    { type: "video", src: "/download (7).mp4" },

    { type: "image", src: "/image (14).jpg" },
    { type: "video", src: "/download (6).mp4" },

    {
      type: "video",
      src: "/WhatsApp Video 2025-11-17 at 14.25.46_c265d9d9.mp4",
    },
    { type: "image", src: "/image (24).png" },
    { type: "video", src: "/download (1).mp4" },
    { type: "image", src: "/image (17).png" },
  ];

  return (
    <section className="py-20 bg-white">
      {" "}
      {/* screen background */}
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-4">
        Content That Fits Every Culture
      </h2>
      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-14">
        Recreate assets across languages and regions while maintaining brand
        consistency. Support for cultural nuance, tone adaptation, and market
        sensitivity.
      </p>
      {/* Image + Video Showcase */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-amber-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={item.src}
                alt={`Showcase ${i + 1}`}
                className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
