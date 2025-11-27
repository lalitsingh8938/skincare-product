import React from "react";

// ICONS (unchanged)
const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const ImageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const BrandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.758 16.242a8.023 8.023 0 01-5.242-5.242"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AutomationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// DATA
const FEATURES = [
  {
    icon: <VideoIcon />,
    title: "Prompt-to-Video",
    description:
      "Generate cinematic, high-quality videos from simple text prompts.",
    model: "veo-2.0-generate-001",
  },
  {
    icon: <ImageIcon />,
    title: "Prompt-to-Image",
    description: "Create stunning, photorealistic images with ease.",
    model: "imagen-4.0-generate-001",
  },
  {
    icon: <BrandIcon />,
    title: "Brand Guideline Adherence",
    description: "Ensure every content piece matches your brand identity.",
    model: "gemini-2.5-flash",
  },
  {
    icon: <GlobeIcon />,
    title: "Content Localization",
    description: "Automatically adapt content for different regions.",
    model: "gemini-2.5-flash",
  },
  {
    icon: <AutomationIcon />,
    title: "Campaign Automation",
    description: "Plan & schedule content campaigns automatically.",
    model: "gemini-2.5-flash",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#F2F0E4]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700">
            Everything You Need to{" "}
            <span className="gradient-text">Scale Your Content</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From idea to deployment, our AI gives you a complete creative
            workflow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-white rounded-xl p-6 
             hover:border-[#F2F0E4] hover:bg-gradient-to-b from-white to-[#00646C]
             transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* ICON */}
              <div
                className="flex items-center justify-center h-12 w-12 rounded-lg 
                  bg-gray-100 text-[#00646C]

                  group-hover:bg-white group-hover:text-[#00646C]
                  transition-all duration-300"
              >
                {feature.icon}
              </div>

              {/* TITLE */}
              <h3
                className="text-xl font-semibold text-slate-800 mt-4 
                 group-hover:text-white transition-colors duration-300"
              >
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="text-gray-600 mt-2 
                group-hover:text-white transition-colors duration-300"
              >
                {feature.description}
              </p>

              <p className="text-xs text-gray-500 font-mono mt-3 group-hover:text-white">
                Powered by: {feature.model}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
