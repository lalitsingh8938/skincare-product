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
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Set up brands, rules & product data",
    description:
      "Upload brand guidelines, tone of voice, and product data so AI creates fully on-brand content.",
  },
  {
    title: "Generate content for campaigns",
    description:
      "Produce high-quality videos, images, captions, and creatives for all your marketing campaigns.",
  },
  {
    title: "Localise for multiple markets",
    description:
      "Automatically adapt content for different languages, regions, and cultures.",
  },
  {
    title: "Get approvals from teams",
    description:
      "Collaborate, share variations, and get internal approvals instantly.",
  },
  {
    title: "Publish across all platforms",
    description:
      "Publish directly to Facebook, Instagram, TikTok, and more with one click.",
  },
  {
    title: "Review, reuse, and optimise",
    description:
      "Track performance, reuse high-performing creatives, and optimise your output.",
  },
];

// 🎨 Different colors for each number circle
const numberColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-red-500",
  "bg-orange-500",
  "bg-purple-500",
  "bg-teal-500",
  "bg-yellow-500",
];

export default function HowItWorks() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        End-to-End Workflow for Content Teams
      </h2>

      {/* FLOW ROW */}
      <div className="flex flex-wrap justify-center items-start gap-6 px-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* STEP CARD */}
            <div className="flex flex-col items-center w-44 text-center bg-amber-50 p-4 rounded-xl shadow-sm">
              {/* Number Circle with dynamic color */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md text-white font-bold text-lg ${numberColors[index]}`}
              >
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-sm mt-3 text-[#0B3A3E] leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-xs leading-relaxed mt-1">
                {step.description}
              </p>
            </div>

            {/* Arrow Between Steps */}
            {index !== steps.length - 1 && (
              <ChevronRightIcon className="w-6 h-6 text-[#00646C] mt-8 hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
