// import React from "react";

// const steps = [
//   {
//     id: "1",
//     title: "End-to-End Workflow for Content Teams",
//     description:
//       "A complete system to ideate, generate, localise, collaborate and publish brand-ready content.",
//   },
//   {
//     id: "2",
//     title: "Set up brands, rules & product data",
//     description:
//       "Upload your brand guidelines, tone of voice, and product information so AI creates fully on-brand content.",
//   },
//   {
//     id: "3",
//     title: "Generate content for campaigns",
//     description:
//       "Produce high-quality videos, images, captions, and creatives for all your marketing campaigns.",
//   },
//   {
//     id: "4",
//     title: "Localise for multiple markets",
//     description:
//       "Automatically adapt your content for regional languages, markets, and cultural contexts.",
//   },
//   {
//     id: "5",
//     title: "Get approvals from teams",
//     description:
//       "Collaborate with your team, share variations, and get internal approvals instantly.",
//   },
//   {
//     id: "6",
//     title: "Publish across all platforms",
//     description:
//       "Distribute content directly to Facebook, Instagram, TikTok, and more with one click.",
//   },
//   {
//     id: "7",
//     title: "Review, reuse, and optimise",
//     description:
//       "Track performance, reuse high-performing creatives, and continuously optimise content output.",
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//         How the Platform Works
//       </h2>

//       <div className="max-w-4xl mx-auto grid gap-6">
//         {steps.map((step) => (
//           <div
//             key={step.id}
//             className="p-6 bg-white border rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition"
//           >
//             <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full text-lg font-semibold">
//               {step.id}
//             </div>

//             <div>
//               <h3 className="font-bold text-lg">{step.title}</h3>
//               <p className="text-gray-600">{step.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";

const steps = [
  {
    id: "1",
    title: "End-to-End Workflow for Content Teams",
    description:
      "A complete system to ideate, generate, localise, collaborate and publish brand-ready content.",
  },
  {
    id: "2",
    title: "Set up brands, rules & product data",
    description:
      "Upload brand guidelines, tone of voice, and product data so AI creates fully on-brand content.",
  },
  {
    id: "3",
    title: "Generate content for campaigns",
    description:
      "Produce high-quality videos, images, captions, and creatives for all your marketing campaigns.",
  },
  {
    id: "4",
    title: "Localise for multiple markets",
    description:
      "Automatically adapt content for different languages, regions, and cultures.",
  },
  {
    id: "5",
    title: "Get approvals from teams",
    description:
      "Collaborate, share variations, and get internal approvals instantly.",
  },
  {
    id: "6",
    title: "Publish across all platforms",
    description:
      "Publish directly to Facebook, Instagram, TikTok, and more with one click.",
  },
  {
    id: "7",
    title: "Review, reuse, and optimise",
    description:
      "Track performance, reuse high-performing creatives, and optimise your output.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#00646C]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How the Platform Works
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-5 bg-white rounded-xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 min-h-[150px]"
          >
            {/* ID circle */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center 
             text-white font-bold text-lg
             bg-gradient-to-b from-white to-[#00646C] shadow-md"
            >
              {step.id}
            </div>

            {/* Text Section */}
            <div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
