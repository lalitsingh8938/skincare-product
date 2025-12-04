import React from "react";
// Import icons from react-icons/md (Material Design)
import {
  MdOutlineGavel, // Used for Brand Guideline Adherence (Gavel/Rule)
  MdOutlineOndemandVideo, // Used for Prompt-to-Video
  MdOutlineImage, // Used for Prompt-to-Image
  MdOutlineLanguage, // Used for Content Localization
} from "react-icons/md";

const FEATURES = [
  {
    title: "Brand Guideline Adherence",
    description: "Ensure every content piece matches your brand identity.",
    icon: MdOutlineGavel,
  },
  {
    title: "Prompt-to-Video",
    description:
      "Generate cinematic, high-quality videos from simple text prompts.",
    icon: MdOutlineOndemandVideo,
  },
  {
    title: "Prompt-to-Image",
    description: "Create stunning, photorealistic images with ease.",
    icon: MdOutlineImage,
  },
  {
    title: "Content Localization",
    description: "Automatically adapt content for different regions.",
    icon: MdOutlineLanguage,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-[#FFEDF3]">
      <div className="container mx-auto px-6">
        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700">
            Everything You Need to{" "}
            <span className="gradient-text">Scale Your Content</span>
          </h2>
        </div>

        {/* ROW BOXES - Use a responsive grid for fixed-width row layout */}
        <div
          className="
            mt-12
            grid 
            grid-cols-1             /* Default: Single column on small screens */
            md:grid-cols-2          /* Medium: Two columns */
            lg:grid-cols-4          /* Large: Four columns (One Row) */
            gap-6                   /* Adjusted gap */
          "
        >
          {FEATURES.map((feature, index) => {
            // Get the React Icon component dynamically
            const FeatureIcon = feature.icon;

            return (
              <div
                key={index}
                className="
                  bg-gradient-to-b from-[#6c003d34] to-[#F2F0E4]
                  border
                  border-white
                  rounded-xl
                  p-4                   
                  shadow-sm
                  hover:bg-amber-50
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                {/* ICON CONTAINER: flex, items-center, and justify-center ensure the icon is centered */}
                <div
                  className="
                    flex items-center justify-center
                    h-8 w-8 rounded-md            
                    bg-gray-200 text-[#00646C]
                    group-hover:bg-white group-hover:text-[#00646C]
                    transition-all duration-300
                  "
                >
                  {/* The icon component is now centered within the div */}
                  <FeatureIcon className="h-5 w-5" />
                </div>

                {/* TITLE */}
                <h3 className="text-base font-semibold text-slate-800 mt-2">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-700 mt-1 text-sm leading-snug">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
