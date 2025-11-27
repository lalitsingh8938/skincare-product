// import React, { useState, useEffect } from "react";

// export default function HeroSection() {
//   // SLIDER IMAGES
//   const images = [
//     "/1761800836298_content.png",
//     "/1762321382550_content.png",
//     "/assorted-skincare-items-display_961875-155521.jpg",
//   ];

//   const [current, setCurrent] = useState(0);

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full min-h-screen bg-gradient-to-b from-white to-[#00646C] flex items-center justify-center px-10 relative">
//       {/* Content Wrapper */}
//       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* LEFT TEXT */}
//         <div className="flex-1 text-left">
//           <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
//             AI Content Platform for Enterprise Teams
//           </h1>

//           {/* <h2 className="text-2xl text-white/90 mt-2 drop-shadow">
//             With Glycolic Gloss Range
//           </h2> */}

//           <h2 className="text-white/80 mt-4 max-w-lg leading-relaxed drop-shadow">
//             {/* AI Content Platform for Enterprise Teams Create, manage, localise,
//             and publish brand-safe content at scale. Subhead: A unified
//             workspace that helps multi-brand organisations streamline content
//             creation, approvals, and publishing. */}
//             Create, manage, localise, and publish consistent brand content across markets and channels — all in one place.
//           </h2>

//           <div className="mt-6 flex gap-4">
//             <button className="bg-white text-yellow-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-yellow-100 transition">
//               DISCOVER NOW
//             </button>

//             <button className="border border-white px-6 py-2 rounded-full text-white font-semibold hover:bg-white/20 transition">
//               WATCH VIDEO
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE SLIDER */}
//         <div className="flex-1 flex justify-center">
//           <div
//             className="
//               w-full h-56
//               md:w-[500px] md:h-[300px]
//               lg:w-[650px] lg:h-[360px]
//               xl:w-[600px] xl:h-[420px]
//               rounded-2xl overflow-hidden shadow-xl bg-black relative
//             "
//           >
//             {/* IMAGE SLIDES */}
//             {images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt="Slide"
//                 className={`
//                   w-full h-full object-cover absolute inset-0 transition-opacity duration-700
//                   ${index === current ? "opacity-100" : "opacity-0"}
//                 `}
//               />
//             ))}

//             {/* TEXT OVER IMAGE */}
//             <div className="absolute bottom-4 left-4 text-white drop-shadow">
//               <h3 className="font-bold text-xl lg:text-2xl">
//                 Glycolic Gloss Range
//               </h3>
//               <p className="text-sm lg:text-base">Transform Your Hair</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SLIDER DOTS */}
//       <div className="absolute bottom-6 flex gap-2">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`
//               w-3 h-3 rounded-full
//               ${index === current ? "bg-white" : "bg-white/40"}
//             `}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-white px-10 py-10 flex justify-center">
      {/* CONTENT BOX (AMBER BACKGROUND) */}
      <div className="max-w-7xl w-full  bg-gradient-to-b from-[#6c003d34] to-[#F2F0E4] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-md">
        {/* LEFT TEXT SECTION */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-700 drop-shadow-lg leading-tight">
            AI Content Platform for Enterprise Teams
          </h1>

          <h2 className="text-slate-700 mt-4 max-w-lg leading-relaxed drop-shadow">
            Create, manage, localise, and publish consistent brand content
            across markets and channels —
            <span
              className="
      text-transparent bg-clip-text 
      bg-gradient-to-r from-[#FF007F] via-[#FF4FBF] to-[#FF8FE5] 
      font-bold text-xl
    "
            >
              all in one place
            </span>
            .
          </h2>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="border border-slate-600 px-6 py-2 rounded-full text-slate-600 font-semibold hover:bg-slate-300 transition">
              WATCH VIDEO
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — SINGLE VIDEO */}
        <div className="flex-1 flex justify-center">
          <div
            className="
          w-full h-56
          md:w-[500px] md:h-[300px]
          lg:w-[650px] lg:h-[360px]
          xl:w-[600px] xl:h-[420px]
          rounded-2xl overflow-hidden shadow-lg bg-black relative
        "
          >
            <video
              src="/download (10).mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* TEXT OVER VIDEO */}
            <div className="absolute bottom-4 left-4 text-white drop-shadow">
              <h3 className="font-bold text-xl lg:text-2xl">
                Glycolic Gloss Range
              </h3>
              <p className="text-sm lg:text-base">Transform Your Hair</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
