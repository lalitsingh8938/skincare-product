// import React from "react";

// const features = [
//   {
//     title: "Unified Dashboard",
//     description:
//       "Monitor content activity across brands and teams from one central place.",
//   },
//   {
//     title: "Brand Governance",
//     description:
//       "Apply design rules, tone, and compliance at scale for consistent brand output.",
//   },
//   {
//     title: "Product Catalog",
//     description:
//       "Keep product data, visuals, and specifications structured for content generation.",
//   },
//   {
//     title: "Content Generator",
//     description:
//       "Produce text, image, and video assets in seconds using AI.",
//   },
//   {
//     title: "Content Library",
//     description:
//       "Access a central repository for all generated assets for reuse and collaboration.",
//   },
//   {
//     title: "Publishing & Calendar",
//     description:
//       "Plan, schedule, and publish campaigns across Facebook, Instagram, TikTok, and more.",
//   },
// ];

// export default function FeatureOverview() {
//   return (
//     <section className="py-20 bg-gray-100">
//       <h2 className="text-3xl md:text-4xl font-bold text-center">
//         Feature Overview
//       </h2>

//       <p className="text-center text-gray-600 mt-3">
//         What the Platform Enables
//       </p>

//       <div className="max-w-6xl mx-auto grid gap-6 mt-12 px-6 md:grid-cols-2 lg:grid-cols-3">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-lg transition"
//           >
//             <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
//             <p className="text-gray-600">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import {
//   ChartBarIcon,
//   ShieldCheckIcon,
//   RectangleGroupIcon,
//   SparklesIcon,
//   FolderIcon,
//   CalendarDaysIcon,
// } from "@heroicons/react/24/outline";

// const features = [
//   {
//     title: "Unified Dashboard",
//     description:
//       "Monitor content activity across brands and teams from one central place.",
//     icon: ChartBarIcon,
//   },
//   {
//     title: "Brand Governance",
//     description:
//       "Apply design rules, tone, and compliance at scale for consistent brand output.",
//     icon: ShieldCheckIcon,
//   },
//   {
//     title: "Product Catalog",
//     description:
//       "Keep product data, visuals, and specifications structured for content generation.",
//     icon: RectangleGroupIcon,
//   },
//   {
//     title: "Content Generator",
//     description: "Produce text, image, and video assets in seconds using AI.",
//     icon: SparklesIcon,
//   },
//   {
//     title: "Content Library",
//     description:
//       "Access a central repository for all generated assets for reuse and collaboration.",
//     icon: FolderIcon,
//   },
//   {
//     title: "Publishing & Calendar",
//     description:
//       "Plan, schedule, and publish campaigns across Facebook, Instagram, TikTok, and more.",
//     icon: CalendarDaysIcon,
//   },
// ];

// export default function FeatureOverview() {
//   return (
//     <section className="py-20 bg-[#F2F0E4] to-white">
//       <h2 className="text-3xl md:text-4xl font-bold text-center">
//         Feature Overview
//       </h2>

//       <p className="text-center text-gray-600 mt-3 text-lg">
//         What the Platform Enables
//       </p>

//       <div className="max-w-7xl mx-auto grid gap-8 mt-14 px-8 sm:grid-cols-2 lg:grid-cols-3">
//         {features.map((feature, index) => {
//           const Icon = feature.icon;
//           return (
//             <div
//               key={index}
//               className="bg-white p-8 rounded-2xl border shadow-sm hover:shadow-xl
//              hover:bg-gradient-to-b from-white to-[#00646C]
//              hover:-translate-y-2 transition-all duration-300 h-full"
//             >
//               <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gray-100 mb-5">
//                 <Icon className="w-8 h-8 text-[#00646C]" />
//               </div>

//               <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }









import React from "react";
import {
  ChartBarIcon,
  ShieldCheckIcon,
  RectangleGroupIcon,
  SparklesIcon,
  FolderIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Unified Dashboard",
    description: "Monitor content across brands and teams in one place.",
    icon: ChartBarIcon,
  },
  {
    title: "Brand Governance",
    description: "Apply design rules and compliance at scale.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Product Catalog",
    description: "Keep product visuals & data structured.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Content Generator",
    description: "Generate text, images & videos instantly.",
    icon: SparklesIcon,
  },
  {
    title: "Content Library",
    description: "All generated assets stored centrally.",
    icon: FolderIcon,
  },
  {
    title: "Publishing & Calendar",
    description: "Plan & publish across all marketing channels.",
    icon: CalendarDaysIcon,
  },
];

export default function FeatureOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1d0b28] to-[#12333d]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
        Feature Overview
      </h2>

      <p className="text-center text-white mt-3 text-lg">
        What the Platform Enables
      </p>

      {/* SINGLE BOX WITH 2 COLUMNS */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-10 mt-14">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            {features.slice(0, 3).map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4 items-start">
                  <Icon className="w-8 h-8 text-[#00646C]" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">
            {features.slice(3, 6).map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4 items-start">
                  <Icon className="w-8 h-8 text-[#00646C]" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
