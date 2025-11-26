import React from "react";

const industries = [
  { name: "Beauty & Skincare", image: "/1761800836298_content (1).png" },
  {
    name: "Fitness & Gyms",
    image: "/fitness-tools-dumbbells_926199-3495335.jpg",
  },
  { name: "Real Estate", image: "/3847365beb7da39d34684ae14e4b7bf5.jpg" },
  { name: "Restaurants", image: "/images (6).jpeg" },

  {
    name: "Online Stores",
    image: "/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg",
  },
  {
    name: "Coaches & Trainers",
    image: "/portrait-young-sports-couple-making-cardio-workout-modern-gym.jpg",
  },
];

export default function UseCaseSection() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Industry Use Cases
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-contain rounded-lg mb-4"
            />

            <p className="font-semibold text-gray-800">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
