// import React from "react";

// export default function PartnersLogos() {
//   const logos = [
//     "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
//     "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
//     "https://www.vectorlogo.zone/logos/java/java-horizontal.svg",
//     "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg",
//     "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg",
//     "https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg",
//   ];

//   return (
//     <section className="py-14 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-center text-5xl font-bold text-indigo-600 mb-10">
//           Powered by Leading Technologies
//         </h2>

//         {/* Perfect Seamless Logo Slider */}
//         <div className="overflow-hidden">
//           <div className="slider-track flex items-center gap-20">
//             {[...logos, ...logos, ...logos].map((src, i) => (
//               <div key={i} className="flex items-center justify-center w-44">
//                 <img
//                   src={src}
//                   alt="technology logo"
//                   className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .slider-track {
//           width: calc(250px * ${logos.length * 3});
//           animation: scroll infinite linear 18s;
//         }

//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(calc(-250px * ${logos.length})); }
//         }
//       `}</style>
//     </section>
//   );
// }


import React from "react";

export default function PartnersLogos() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    "https://www.vectorlogo.zone/logos/java/java-horizontal.svg",
    "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg",
    "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg",
    "https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg",
  ];

  return (
    <section className="py-14 bg-[#f7e9cc]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-indigo-600 mb-10">
          Powered by Leading Technologies
        </h2>

        {/* Perfect Seamless Logo Slider */}
        <div className="overflow-hidden">
          <div className="slider-track flex items-center gap-20">
            {[...logos, ...logos, ...logos].map((src, i) => (
              <div key={i} className="flex items-center justify-center w-44">
                <img
                  src={src}
                  alt="technology logo"
                  className="h-16 w-auto object-contain transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .slider-track {
          width: calc(250px * ${logos.length * 3});
          animation: scroll infinite linear 18s;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * ${logos.length})); }
        }
      `}</style>
    </section>
  );
}
