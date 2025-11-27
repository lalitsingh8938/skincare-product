import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0E1A21] text-gray-300 py-16">
      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 text-sm">

        {/* About */}
        <div>
          <h3 className="text-[#00A4A7] font-semibold text-lg mb-3">About</h3>
          <p className="leading-relaxed text-gray-400">
            AI-powered content generation platform for enterprise teams.
            This page showcases core capabilities currently under development.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[#00A4A7] font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2">
            <li className="hover:text-white transition cursor-pointer">Platform Overview</li>
            <li className="hover:text-white transition cursor-pointer">Feature Guide</li>
            <li className="hover:text-white transition cursor-pointer">Governance & Brand Controls</li>
            <li className="hover:text-white transition cursor-pointer">Integrations (Coming Soon)</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-[#00A4A7] font-semibold text-lg mb-3">Legal</h3>
          <ul className="space-y-2">
            <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white transition cursor-pointer">Terms of Use</li>
            <li className="hover:text-white transition cursor-pointer">Data Protection Notes</li>
            <li className="hover:text-white transition cursor-pointer">AI Content & Safety Disclosure</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#00A4A7] font-semibold text-lg mb-3">Contact</h3>
          <p className="text-gray-400">For collaboration or technical enquiries:</p>
          <p className="mt-2 font-semibold text-white">contact@ust.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-700 mt-12 pt-8"></div>

      {/* Version Info */}
      <p className="text-center text-gray-400 text-sm mb-2">
        <span className="font-medium text-[#00A4A7]">Preview Build</span> — Updated November 2025
      </p>

      {/* COPYRIGHT */}
      <p className="text-center text-xs text-gray-500 mt-2">
        © 2025 Your Company. All rights reserved.
      </p>
    </footer>
  );
}
