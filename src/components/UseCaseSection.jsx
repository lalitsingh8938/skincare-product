// import React from "react";

// const industries = [
//   { name: "Beauty & Skincare", image: "/1761800836298_content (1).png" },
//   {
//     name: "Fitness & Gyms",
//     image: "/fitness-tools-dumbbells_926199-3495335.jpg",
//   },
//   { name: "Real Estate", image: "/3847365beb7da39d34684ae14e4b7bf5.jpg" },
//   { name: "Restaurants", image: "/images (6).jpeg" },

//   {
//     name: "Online Stores",
//     image: "/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg",
//   },
//   {
//     name: "Coaches & Trainers",
//     image: "/portrait-young-sports-couple-making-cardio-workout-modern-gym.jpg",
//   },
// ];

// export default function UseCaseSection() {
//   return (
//     <section className="py-16 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Industry Use Cases
//       </h2>

//       <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
//         {industries.map((item, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 text-center"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-auto object-contain rounded-lg mb-4"
//             />

//             <p className="font-semibold text-gray-800">{item.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";

const industries = [
  {
    name: "Beauty",
    image: "/1761800836298_content (1).png",
    title: "Beauty & Skincare",
    description:
      "AI-generated product visuals, social captions, ingredient-focused scripts & customer education content.",
    points: [
      "Ingredient-focused product descriptions",
      "Routine-based tutorials & before/after visuals",
      "Compliance checks for skincare claims (mock)",
    ],
  },

  {
    name: "Fashion",
    image: "/premium_photo-1675186049419-d48f4b28fe7c.avif",
    title: "Fashion & Wellness",
    description:
      "Create high-energy visuals, workout explainers, trainer-led content & membership promotions.",
    points: [
      "Workout routine videos",
      "Trainer introduction scripts",
      "Social media promos for programs",
    ],
  },

  {
    name: "Electronics",
    image:
      "/close-up-glowing-computer-chip-circuits-detailed-complex-symbolizing-technology-innovation-computing-advanced-367790255.webp",
    title: "Electronics",
    description:
      "Auto-generate property walkthroughs, listing visuals, neighbourhood summaries & investment insights.",
    points: [
      "Property walkthrough scripts",
      "Interior showcase renders",
      "Location-based descriptions",
    ],
  },

  {
    name: "Hospitality",
    image: "/food-wellbeing-hospitality.jpg",
    title: "Food & Hospitality",
    description:
      "Generate menu visuals, chef-led content, recipe explainers & campaign visuals instantly.",
    points: [
      "Recipe/tutorial style videos",
      "Food photography generation",
      "Chef introduction content",
    ],
  },

  {
    name: "Healthcare & more",
    image:
      "/26835884-large-group-of-motivated-doctors-and-nurses-standing-in-a-circle-giving-a-high-fives-gesture-with.jpg",
    title: " Healthcare & E-Commerce",
    description:
      "Create listing images, promo videos, bundle displays & social-first e-commerce creatives.",
    points: [
      "Listing product images",
      "Lifestyle mockups",
      "Sale promo banners",
    ],
  },
];

export default function UseCaseTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#00646C] border border-[#00646C]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        Built for Your Market, Tailored for Success
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Our engine understands the language & behavior of diverse industries.
        Select your market to explore solutions.
      </p>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 mb-8">
        {industries.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2 rounded-t-lg text-md font-medium transition
              ${
                activeTab === index
                  ? "bg-white text-[#00646C] border-b-2 border-[#00646C]"
                  : "text-gray-700 hover:text-[#00646C]"
              }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Text Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#00646C] mb-4">
            {industries[activeTab].title}
          </h3>

          <p className="text-gray-700 mb-4">
            {industries[activeTab].description}
          </p>

          <ul className="space-y-2">
            {industries[activeTab].points.map((p, i) => (
              <li key={i} className="text-[#00646C] font-medium">
                ✓ <span className="text-gray-700 font-normal">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="border-2 border-dashed border-[#00646C] rounded-xl flex items-center justify-center p-4">
          <img
            src={industries[activeTab].image}
            alt="Industry"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
