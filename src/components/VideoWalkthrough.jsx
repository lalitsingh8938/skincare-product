// import React from "react";

// export default function VideoWalkthrough() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-[#00646C] border-black border-t border-b">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Section Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold mb-4">Video Walkthrough</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Watch how the tool works step-by-step with these short video guides.
//           </p>
//         </div>

//         {/* Two Videos Side-by-Side */}
//         <div className="flex flex-row justify-between items-start gap-8">
//           {/* Video 1 */}
//           <div className="w-full md:w-1/2">
//             <video
//               controls
//               preload="metadata"
//               className="w-full h-[500px] md:h-[550px] rounded-2xl shadow-lg border border-gray-200 object-cover"
//             >
//               <source src="/download (9).mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>

//           {/* Video 2 */}
//           <div className="w-full md:w-1/2">
//             <video
//               controls
//               preload="metadata"
//               className="w-full h-[500px] md:h-[550px] rounded-2xl shadow-lg border border-gray-200 object-cover"
//             >
//               <source src="/download.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";

export default function VideoWalkthrough() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#00646C] border-black border-t border-b">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Video Walkthrough</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch how the tool works step-by-step with these short video guides.
          </p>
        </div>

        {/* Two Videos Side-by-Side */}
        <div className="flex flex-row justify-between items-start gap-8">

          {/* Video 1 */}
          <div className="w-full md:w-1/2">
            <video
              autoPlay
              muted
              playsInline
              loop={true}
              controls
              preload="metadata"
              className="w-full h-[500px] md:h-[550px] rounded-2xl shadow-lg border border-gray-200 object-cover"
            >
              <source src="/download (9).mp4" type="video/mp4" />
            </video>
          </div>

          {/* Video 2 */}
          <div className="w-full md:w-1/2">
            <video
              autoPlay
              muted
              playsInline
              loop={true}
              controls
              
              preload="metadata"
              className="w-full h-[500px] md:h-[550px] rounded-2xl shadow-lg border border-gray-200 object-cover"
            >
              <source src="/download.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </div>
    </section>
  );
}
