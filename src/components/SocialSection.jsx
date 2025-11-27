import React from "react";

export default function SocialSection() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-slate-700">
        Designed by AI. Loved by Brands.
      </h2>

      {/* Social Icons Row */}
      <div className="flex flex-row justify-center items-center gap-10">
        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          className="hover:scale-105 transition"
        >
          <img
            src="/instagram-app-icon-social-media-logo-vector-illustration_277909-403.avif"
            alt="Instagram"
            className="w-28 h-28 rounded-lg object-cover shadow-md"
          />
        </a>

        {/* YouTube */}
        {/* <a
          href="https://youtube.com"
          target="_blank"
          className="hover:scale-105 transition"
        >
          <img
            src="/photo-1611162616475-46b635cb6868.avif"
            alt="YouTube"
            className="w-28 h-28 rounded-lg object-cover shadow-md"
          />
        </a> */}
      </div>
    </section>
  );
}
