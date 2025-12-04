import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#231F20] text-white py-16">
      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 text-sm">
        {/* About */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">About</h3>
          <p className="leading-relaxed text-white transition cursor-pointer">
            AI-powered content generation platform for enterprise teams. This
            page showcases core capabilities currently under development.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-white">
            <li className="cursor-pointer hover:text-gray-700">
              Platform Overview
            </li>
            <li className="cursor-pointer hover:text-gray-700">
              Feature Guide
            </li>
            <li className="cursor-pointer hover:text-gray-700">
              Governance & Brand Controls
            </li>
            <li className="cursor-pointer hover:text-gray-700">
              Integrations (Coming Soon)
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Legal</h3>
          <ul className="space-y-2 text-white">
            <li className="cursor-pointer hover:text-gray-700">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-gray-700">Terms of Use</li>
            <li className="cursor-pointer hover:text-gray-700">
              Data Protection Notes
            </li>
            <li className="cursor-pointer hover:text-gray-700">
              AI Content & Safety Disclosure
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Contact</h3>
          <p className="text-white">
            For collaboration or technical enquiries:
          </p>
          <p className="mt-2 font-semibold text-white">contact@ust.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-400 mt-12 pt-8"></div>

      {/* Version Info */}
      <p className="text-center text-white text-sm mb-2">
        <span className="font-medium">Preview Build</span> — Updated November
        2025
      </p>

      {/* COPYRIGHT */}
      <p className="text-center text-xs text-white mt-2">
        © 2025 Your Company. All rights reserved.
      </p>
    </footer>
  );
}
