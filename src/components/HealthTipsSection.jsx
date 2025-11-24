import React from "react";

export default function HealthTipsSection() {
  const items = [
    {
      id: 1,
      tag: "Beauty Tips",
      title: "Unlock the Secrets of Professional Beauty Techniques",
      desc: "Discover the latest beauty trends and professional makeup techniques from L’Oréal Paris...",
      img: "GettyImages-1305078018.webp",
    },
    {
      id: 2,
      tag: "Hair Care",
      title: "Transform Your Hair with Professional Care",
      desc: "Learn about revolutionary hair care solutions that deliver salon-quality results at home...",
      img: "photo-1629198688000-71f23e745b6e.jpeg",
    },
    {
      id: 3,
      tag: "Skin Care",
      title: "Advanced Skincare for Radiant Complexion",
      desc: "Explore cutting-edge skincare innovations that reveal your skin’s natural beauty and glow...",
      img: "assorted-skincare-items-display_961875-155521.jpg",
    },
    {
      id: 4,
      tag: "Innovation",
      title: "Beauty Innovation Meets Science",
      desc: "Discover how L’Oréal combines scientific research with beauty expertise for breakthrough products...",
      img: "overhead-view-cosmetics-makeup-natural-organic-products-dual-backdrop_23-2148031301.avif",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Keep Your Skin & Hair Healthy & Happy!
        </h2>
        <p className="mt-2 text-gray-500">
          Discover beauty tips, trends, and expert advice
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5">

              {/* Tag */}
              <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                {item.tag}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2">
                {item.desc}
              </p>

              {/* Read more */}
              <button className="mt-4 text-yellow-600 font-semibold hover:underline">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
