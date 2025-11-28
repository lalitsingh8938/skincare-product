// import React, { useEffect } from "react";

// export default function SocialSection() {
//   useEffect(() => {
//     // Check if script already exists (avoid duplicates)
//     if (!document.getElementById("elfsight-script")) {
//       const script = document.createElement("script");
//       script.src = "https://elfsightcdn.com/platform.js";
//       script.async = true;
//       script.id = "elfsight-script";
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <section className="py-16 bg-white text-center">
//       <h2 className="text-3xl font-bold mb-10 text-slate-700">
//         Designed by AI. Loved by Brands.
//       </h2>

//       {/* Social Icons Row */}
//       <div className="flex flex-row justify-center items-center gap-10 mb-10">
//         {/* Instagram Icon */}
//         <a
//           href="https://www.instagram.com/sarvamastiofficial/" // <-- yaha apna brand username daalo
//           target="_blank"
//           className="hover:scale-105 transition"
//         >
//           <img
//             src="/instagram-app-icon-social-media-logo-vector-illustration_277909-403.avif"
//             alt="Instagram"
//             className="w-28 h-28 rounded-lg object-cover shadow-md"
//           />
//         </a>
//       </div>

//       {/* Instagram Feed from Elfsight */}
//       <div className="flex justify-center">
//         <div
//           className="elfsight-app-91aa7eb1-5f90-4d7f-9921-bd444204a6c0"
//           data-elfsight-app-lazy
//         ></div>
//       </div>
//     </section>
//   );
// }










// import React, { useEffect } from "react";

// export default function SocialSection() {
//   useEffect(() => {
//     const scriptId = "sociablekit-script";

//     // Load script once
//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;

//       // DO NOT CHANGE THIS URL
//       script.src = "https://widgets.sociablekit.com/instagram-reels/widget.js";
//       script.defer = true;

//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <section className="py-16 bg-white text-center">
//       <h2 className="text-3xl font-bold mb-10 text-slate-700">
//         Designed by AI. Loved by Brands.
//       </h2>

//       {/* Instagram Icon */}
//       <div className="flex flex-row justify-center items-center gap-10 mb-10">
//         <a
//           href="https://www.instagram.com/sarvamastiofficial/"
//           target="_blank"
//           className="hover:scale-105 transition"
//         >
//           <img
//             src="/instagram-app-icon-social-media-logo-vector-illustration_277909-403.avif"
//             alt="Instagram"
//             className="w-28 h-28 rounded-lg object-cover shadow-md"
//           />
//         </a>
//       </div>

//       {/* SociableKIT Reels */}
//       <div className="flex justify-center">
//         <div
//           className="sk-ww-instagram-reels"   // <- REAL CLASS NAME FROM YOUR CODE
//           data-embed-id="25627423"
//         ></div>
//       </div>
//     </section>
//   );
// }


// import React, { useEffect } from "react";

// export default function SocialSection() {
//   useEffect(() => {
//     const scriptId = "sociablekit-script";

//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;
//       script.src = "https://widgets.sociablekit.com/instagram-reels/widget.js";
//       script.defer = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div>
//       <div
//         className="sk-ww-instagram-reels"
//         data-embed-id="25627423"
//       ></div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";

export default function SocialSection() {
  const [showWidget, setShowWidget] = useState(false);

  const loadInstagramWidget = () => {
    setShowWidget(true);

    const scriptId = "sociablekit-script";

    // Load script only once
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://widgets.sociablekit.com/instagram-reels/widget.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  };

  return (
    <section className="py-20 bg-[#fafafa] text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Follow Us On Instagram
      </h2>

      <p className="text-gray-500 mb-10 text-lg">
        See our latest reels & brand moments.
      </p>

      {/* Instagram Button */}
      <div className="flex justify-center mb-10">
        <button
          onClick={loadInstagramWidget}
          className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            className="w-8 h-8"
            alt="Instagram"
          />
          <span className="font-medium text-gray-700">
            Visit Our Instagram Page
          </span>
        </button>
      </div>

      {/* Reels Widget — Show ONLY After Button Click */}
      {showWidget && (
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="sk-ww-instagram-reels"
            data-embed-id="25627423"
          ></div>
        </div>
      )}
    </section>
  );
}
