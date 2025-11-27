// import React, { useState } from "react";

// const industries = [
//   {
//     name: "Beauty",
//     images: [
//       "/1763061341638_content.png",
//       "/1762321382550_content.png",
//       "/1761800836298_content.png",
//     ],
//     title: "Beauty & Skincare",
//     description:
//       "AI-generated product visuals, social captions, ingredient-focused scripts & customer education content.",
//     points: [
//       "Ingredient-focused product descriptions",
//       "Routine-based tutorials & before/after visuals",
//       "Compliance checks for skincare claims (mock)",
//     ],
//   },

//   {
//     name: "Fashion",
//     video: "/download (11).mp4", // 👈 Only video
//     title: "Fashion & Wellness",
//     description:
//       "Create high-energy visuals, workout explainers, trainer-led content & membership promotions.",
//     points: [
//       "Workout routine videos",
//       "Trainer introduction scripts",
//       "Social media promos for programs",
//     ],
//   },

//   {
//     name: "Electronics",
//     images: ["/image (17).jpg", "/image (2).jpg", "image (15).jpg"],
//     title: "Electronics",
//     description:
//       "Auto-generate product walkthroughs, listing visuals & neighbourhood summaries.",
//     points: [
//       "Property walkthrough scripts",
//       "Interior showcase renders",
//       "Location-based descriptions",
//     ],
//   },

//   {
//     name: "Footwear",
//     images: ["/image (6).jpg", "/image (15).png", "/image (7).jpg"],
//     title: "Food & Hospitality",
//     description:
//       "Generate menu visuals, chef-led content, recipe explainers & campaign visuals instantly.",
//     points: [
//       "Recipe/tutorial style videos",
//       "Food photography generation",
//       "Chef introduction content",
//     ],
//   },

//   {
//     name: "Healthcare & more",
//     images: ["/", "/health-small-2.jpg", ""], // only 2 images
//     video: "/download (8).mp4", // 👈 add your video here
//     title: "Healthcare & E-Commerce",
//     description:
//       "Create listing images, promo videos, bundle displays & social-first e-commerce creatives.",
//     points: [
//       "Listing product images",
//       "Lifestyle mockups",
//       "Sale promo banners",
//     ],
//   },
// ];

// export default function UseCaseTabs() {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-[#00646C] border border-[#00646C]">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
//         Built for Your Market, Tailored for Success
//       </h2>

//       <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
//         Our engine understands the language & behavior of diverse industries.
//         Select your market to explore solutions.
//       </p>

//       {/* Tabs */}
//       <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 mb-8">
//         {industries.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveTab(index)}
//             className={`px-5 py-2 rounded-t-lg text-md font-medium transition ${
//               activeTab === index
//                 ? "bg-white text-[#00646C] border-b-2 border-[#00646C]"
//                 : "text-gray-700 hover:text-[#00646C]"
//             }`}
//           >
//             {item.name}
//           </button>
//         ))}
//       </div>

//       {/* Content Box */}
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* LEFT SIDE TEXT */}
//         <div>
//           <h3 className="text-2xl font-bold text-[#00646C] mb-4">
//             {industries[activeTab].title}
//           </h3>

//           <p className="text-gray-700 mb-4">
//             {industries[activeTab].description}
//           </p>

//           <ul className="space-y-2">
//             {industries[activeTab].points.map((p, i) => (
//               <li key={i} className="text-[#00646C] font-medium">
//                 ✓ <span className="text-gray-700 font-normal">{p}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* RIGHT SIDE MEDIA */}
//         <div className="border-2 border-dashed border-[#00646C] rounded-xl p-4">
//           {/* If Fashion → Show only Video */}
//           {industries[activeTab].video ? (
//             <video
//               src={industries[activeTab].video}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-[550px] object-cover rounded-xl"
//             />
//           ) : (
//             <>
//               {/* Top two small images */}
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 {industries[activeTab].images.slice(0, 2).map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     className="w-full h-32 object-cover rounded-lg"
//                   />
//                 ))}
//               </div>

//               {/* Bottom big image */}
//               <img
//                 src={industries[activeTab].images[2]}
//                 className="w-full h-64 object-cover rounded-xl"
//               />
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";

const industries = [
  {
    name: "Beauty",
    video: "/download (3).mp4",
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
    video: "/download (11).mp4",
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
    images: ["/image (17).jpg", "/image (2).jpg", "/image (15).jpg"],
    title: "Electronics",
    description:
      "Auto-generate product walkthroughs, listing visuals & neighbourhood summaries.",
    points: [
      "Property walkthrough scripts",
      "Interior showcase renders",
      "Location-based descriptions",
    ],
  },

  {
    name: "Footwear",
    images: ["/image (6).jpg", "/image (15).png", "/image (7).jpg"],
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
    images: ["/image (5).jpg", "/image (18).jpg"],
    video: "/download (8).mp4",
    title: "Healthcare & E-Commerce",
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
    <section className="py-16 bg-white">
      {" "}
      {/* ← FULL WHITE BACKGROUND */}
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
            className={`px-5 py-2 rounded-t-lg text-md font-medium transition ${
              activeTab === index
                ? "bg-gradient-to-b from-[#6c003d34] to-[#F2F0E4] text-gray-700"
                : "text-gray-700 hover:text-[#00646C]"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      {/* Content Box */}
      <div
        className="max-w-5xl mx-auto bg-gradient-to-b from-[#6c003d34] to-[#F2F0E4] rounded-2xl shadow p-10 
                   grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* LEFT TEXT */}
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

        {/* RIGHT MEDIA */}
        <div
          className={`border-2 border-dashed border-[#00646C] rounded-xl p-4 ${
            industries[activeTab].name === "Healthcare & more"
              ? "w-full"
              : "w-full"
          }`}
        >
          {/* If Video */}
          {industries[activeTab].video ? (
            <>
              {/* Healthcare: 2 images + video */}
              {industries[activeTab].name === "Healthcare & more" && (
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {industries[activeTab].images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}

              {/* Video */}
              <video
                src={industries[activeTab].video}
                autoPlay
                muted
                loop
                playsInline
                className={`w-full ${
                  industries[activeTab].name === "Healthcare & more"
                    ? "h-[400px]"
                    : "h-[550px]"
                } object-cover rounded-xl`}
              />
            </>
          ) : (
            <>
              {/* Images */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {industries[activeTab].images.slice(0, 2).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>

              <img
                src={industries[activeTab].images[2]}
                className="w-full h-64 object-cover rounded-xl"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
