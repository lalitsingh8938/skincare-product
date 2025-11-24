import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#263547] text-gray-300 py-14">
      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 text-sm">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-yellow-300 font-semibold mb-3">Our Categories</h3>
          <ul className="space-y-2">
            <li>Skin Care</li>
            <li>Hair Care</li>
            <li>Hair Color</li>
            <li>Makeup</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-yellow-300 font-semibold mb-3">Virtual Tools</h3>
          <ul className="space-y-2">
            <li>Skin Genius</li>
            <li>Hair Color Try On</li>
            <li>Makeup Try On</li>
            <li>Beauty Studio</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-yellow-300 font-semibold mb-3">Our Commitments</h3>
          <ul className="space-y-2">
            <li>Sustainable Growth</li>
            <li>Stand Up</li>
            <li>The Other Side</li>
            <li>Dermatologist Board</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-yellow-300 font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <div className="bg-white/10 w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/20 transition">
              <FaFacebookF size={14} />
            </div>

            <div className="bg-white/10 w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/20 transition">
              <FaTwitter size={14} />
            </div>

            <div className="bg-white/10 w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/20 transition">
              <FaYoutube size={14} />
            </div>

            <div className="bg-white/10 w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/20 transition">
              <FaInstagram size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto border-t border-gray-600 mt-10 pt-10"></div>

      {/* LOGO + TAGLINE */}
      <div className="text-center text-gray-200">
        <p className="font-bold text-lg">L’Oréal Paris</p>
        <p className="italic text-yellow-300 mt-1">Because You’re Worth It</p>
      </div>

      {/* LINKS */}
      <div className="text-center mt-5 space-x-5 text-sm">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms & Conditions</a>
        <a href="#" className="hover:underline">Cookie Policy</a>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-xs text-gray-400 mt-5">
        © 2025 L’Oréal Paris. All rights reserved.
      </p>
    </footer>
  );
}
