// import React from "react";

// export default function ContentProHero() {
//   return (
//     <section className="bg-amber-50 py-16">
//       <div className="max-w-6xl mx-auto px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center md:text-left md:flex md:items-center md:justify-between mb-12">
//           <div className="max-w-2xl">
//             <h1 className="text3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
//               Brands Are Producing More Content Than Ever.{" "}
//               <span className="text-indigo-600">But teams can’t keep up.</span>
//             </h1>
//             <p className="mt-4 text-gray-600 text-base sm:text-lg">
//               Content Pro solves exactly this with an end-to-end AI content
//               engine that speeds production, keeps brand voice consistent across
//               markets, and reduces weekly workload.
//             </p>
//             <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-3">
//               <a
//                 href="#"
//                 className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
//               >
//                 See Content Pro in Action
//               </a>
//               <a
//                 href="#"
//                 className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-gray-200 text-gray-700 bg-white hover:shadow transition"
//               >
//                 Request a Demo
//               </a>
//             </div>
//           </div>

//           {/* Illustration */}
//           <div className="hidden md:block mt-8 md:mt-0 md:ml-8 w-80 flex-shrink-0">
//             <div className="rounded-2xl bg-gradient-to-tr from-indigo-50 to-white p-6 shadow-lg">
//               <svg viewBox="0 0 200 120" className="w-full h-48">
//                 <defs>
//                   <linearGradient id="g1" x1="0" x2="1">
//                     <stop offset="0%" stopColor="#6366f1" stopOpacity="0.12" />
//                     <stop
//                       offset="100%"
//                       stopColor="#06b6d4"
//                       stopOpacity="0.08"
//                     />
//                   </linearGradient>
//                 </defs>
//                 <rect width="200" height="120" rx="12" fill="url(#g1)" />
//               </svg>
//               <div className="mt-4 text-sm text-gray-500">
//                 Automate SKU-level content, translations, and approvals — all
//                 from one place.
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <Card
//             title=" Slow Production"
//             desc="Shooting content for every SKU is slow, costly, and difficult to scale."
//             accentClass="from-yellow-50 to-white"
//             icon={
//               <svg
//                 className="w-6 h-6"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 6v6l4 2"
//                 />
//                 <circle
//                   cx="12"
//                   cy="12"
//                   r="9"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             }
//           />

//           <Card
//             title=" Inconsistent Localisation"
//             desc="Local teams struggle to recreate content that matches brand tone, style, and guidelines."
//             accentClass="from-green-50 to-white"
//             icon={
//               <svg
//                 className="w-6 h-6"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//               >
//                 <path d="M21 12.79A9 9 0 1111.21 3" />
//                 <path d="M14 7l-5 5" />
//               </svg>
//             }
//           />

//           <Card
//             title=" Weekly Content Load"
//             desc="Content needs to be created, approved, and published every week, making teams overloaded."
//             accentClass="from-pink-50 to-white"
//             icon={
//               <svg
//                 className="w-6 h-6"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//               >
//                 <rect x="3" y="4" width="18" height="18" rx="2" />
//                 <path d="M16 2v4M8 2v4" />
//               </svg>
//             }
//           />
//         </div>

//         {/* Footer note */}
//         <div className="mt-8 text-center text-sm text-gray-500">
//           <strong className="text-gray-700">Content Pro</strong> — Content Pro
//           solves exactly this with an end-to-end AI content engine that speeds
//           production, keeps brand voice consistent across markets, and reduces
//           weekly workload.
//         </div>
//       </div>
//     </section>
//   );
// }

// function Card({ title, desc, icon, accentClass }) {
//   return (
//     <div className="rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition">
//       <div
//         className={`-mx-6 -mt-6 p-6 rounded-t-2xl bg-gradient-to-b ${accentClass}`}
//       />
//       <div className="mt-4 flex items-start gap-4">
//         <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 text-indigo-700">
//           {icon}
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
//           <p className="mt-2 text-sm text-gray-600">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";

// export default function ContentProHero() {
//   // Typing animation only for second part
//   const [typedText, setTypedText] = React.useState("");

//   const fixedText = "Brands Are Producing More Content Than Ever. ";
//   const animatedText = "But teams can’t keep up.";

//   React.useEffect(() => {
//     let i = 0;
//     let isDeleting = false;

//     const interval = setInterval(() => {
//       if (!isDeleting) {
//         // typing forward
//         setTypedText(animatedText.slice(0, i));
//         i++;

//         if (i > animatedText.length) {
//           setTimeout(() => {
//             isDeleting = true;
//           }, 2000); // STOP for 2 seconds
//         }
//       } else {
//         // deleting backward
//         setTypedText(animatedText.slice(0, i));
//         i--;

//         if (i < 0) {
//           isDeleting = false;
//           i = 0;
//         }
//       }
//     }, 60);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-amber-50 py-16">
//       <div className="max-w-6xl mx-auto px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center md:text-left md:flex md:items-center md:justify-between mb-12">
//           <div className="max-w-2xl">
//             {/* Fixed + Animated Heading */}
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
//               {fixedText}
//               <span className="text-indigo-700">{typedText}</span>
//             </h1>

//             {/* Paragraph */}
//             <p className="mt-4 text-gray-600 text-base sm:text-lg animate-fadeUpDelay">
//               Content Pro solves exactly this with an end-to-end AI content
//               engine that speeds production, keeps brand voice consistent across
//               markets, and reduces weekly workload.
//             </p>

//             {/* Buttons */}
//             <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-3 animate-fadeUpDelay2">
//               <a
//                 href="#"
//                 className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
//               >
//                 See Content Pro in Action
//               </a>

//               <a
//                 href="#"
//                 className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-gray-200 text-gray-700 bg-white hover:shadow transition"
//               >
//                 Request a Demo
//               </a>
//             </div>
//           </div>

//           {/* Illustration */}
//           <div className="hidden md:block mt-8 md:mt-0 md:ml-8 w-80 flex-shrink-0 animate-fadeUpDelay2">
//             <div className="rounded-2xl bg-gradient-to-tr from-indigo-50 to-white p-6 shadow-lg">
//               <svg viewBox="0 0 200 120" className="w-full h-48">
//                 <defs>
//                   <linearGradient id="g1" x1="0" x2="1">
//                     <stop offset="0%" stopColor="#6366f1" stopOpacity="0.12" />
//                     <stop
//                       offset="100%"
//                       stopColor="#06b6d4"
//                       stopOpacity="0.08"
//                     />
//                   </linearGradient>
//                 </defs>
//                 <rect width="200" height="120" rx="12" fill="url(#g1)" />
//               </svg>

//               <div className="mt-4 text-sm text-gray-500">
//                 Automate SKU-level content, translations, and approvals — all
//                 from one place.
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Cards – NOT REMOVED */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <Card
//             title="Slow Production"
//             desc="Shooting content for every SKU is slow, costly, and difficult to scale."
//             accentClass="from-yellow-50 to-white"
//             icon={
//               <svg
//                 className="w-8 h-8"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 6v6l4 2"
//                 />
//                 <circle cx="12" cy="12" r="9" />
//               </svg>
//             }
//           />

//           <Card
//             title="Inconsistent Localisation"
//             desc="Local teams struggle to recreate content that matches brand tone, style, and guidelines."
//             accentClass="from-green-50 to-white"
//             icon={
//               <svg
//                 className="w-8 h-8"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//               >
//                 <path d="M21 12.79A9 9 0 1111.21 3" />
//                 <path d="M14 7l-5 5" />
//               </svg>
//             }
//           />

//           <Card
//             title="Weekly Content Load"
//             desc="Content needs to be created, approved, and published every week, making teams overloaded."
//             accentClass="from-pink-50 to-white"
//             icon={
//               <svg
//                 className="w-8 h-8"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//               >
//                 <rect x="3" y="4" width="18" height="18" rx="2" />
//                 <path d="M16 2v4M8 2v4" />
//               </svg>
//             }
//           />
//         </div>

//         {/* Footer */}
//         <div className="mt-8 text-center text-sm text-gray-500">
//           <strong className="text-gray-700">Content Pro</strong> — Content Pro
//           solves exactly this with an end-to-end AI content engine that speeds
//           production, keeps brand voice consistent across markets, and reduces
//           weekly workload.
//         </div>
//       </div>

//       {/* Animation CSS */}
//       <style>{`
//         @keyframes fadeUp {
//           0% { opacity: 0; transform: translateY(25px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeUpDelay {
//           opacity: 0;
//           animation: fadeUp 1s ease-out 0.2s forwards;
//         }
//         .animate-fadeUpDelay2 {
//           opacity: 0;
//           animation: fadeUp 1.2s ease-out 0.4s forwards;
//         }
//       `}</style>
//     </section>
//   );
// }

// // CARD COMPONENT — unchanged
// function Card({ title, desc, icon, accentClass }) {
//   return (
//     <div className="rounded-2xl p-10 bg-white shadow-sm hover:shadow-md transition animate-fadeUpDelay2">
//       <div
//         className={`-mx-10 -mt-10 p-8 rounded-t-2xl bg-gradient-to-b ${accentClass}`}
//       />
//       <div className="mt-6 flex items-start gap-4">
//         <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-50 text-indigo-700">
//           {icon}
//         </div>
//         <div>
//           <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
//           <p className="mt-3 text-base text-gray-600">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

export default function ContentProHero() {
  const [typedText, setTypedText] = React.useState("");

  const fixedText = "Brands Are Producing More Content Than Ever. ";
  const animatedText = "But teams can’t keep up.";

  React.useEffect(() => {
    let i = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting) {
        setTypedText(animatedText.slice(0, i));
        i++;
        if (i > animatedText.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 1500);
        }
      } else {
        setTypedText(animatedText.slice(0, i));
        i--;
        if (i < 0) {
          isDeleting = false;
          i = 0;
        }
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16">
      {/* Light Gray Background */}
      <div className="bg-gray-100 py-16">
        {/* HERO */}
        <div className="bg-gradient-to-b from-amber-100 via-orange-100 to-yellow-100 rounded-2xl p-12 max-w-4xl mx-auto text-center shadow-md">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            {fixedText}
            <span className="text-indigo-700">{typedText}</span>
          </h1>
        </div>

        {/* 3 Cards */}
        <div className="max-w-6xl mx-auto  px-6 lg:px-8 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Card
            title="Slow Production"
            desc="Creating new content for every SKU is slow and costly."
            accentClass="from-red-200 to-red-400"
            icon={<FaRegClock className="text-red-600" size={30} />}
          />

          <Card
            title="Inconsistent Localisation"
            desc="Local teams struggle to maintain brand consistency."
            accentClass="from-blue-200 to-blue-400"
            icon={<FaGlobeAsia className="text-blue-600" size={30} />}
          />

          <Card
            title="Weekly Content Load"
            desc="Teams are overloaded with weekly content demands."
            accentClass="from-purple-200 to-purple-400"
            icon={<FaCalendarAlt className="text-purple-600" size={30} />}
          />
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, icon, accentClass }) {
  return (
    <div
      className={`rounded-2xl p-10 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 
      bg-gradient-to-b ${accentClass} text-white`}
    >
      <div className="flex items-start gap-4 mt-4">
        {/* CIRCULAR WHITE ICON BOX */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full  ">
          {icon}
        </div>

        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-3 text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
}
