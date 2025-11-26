// import React from "react";
// import { FiSearch } from "react-icons/fi";
// import { HiOutlineShoppingBag } from "react-icons/hi";

// export default function Navbar() {
//   return (
//     <nav className="bg-[#fdfbf3] shadow-sm border-b-2 border-yellow-500">
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

//         {/* LOGO */}
//         <h1 className="text-3xl font-semibold tracking-wide">
//           L’ORÉAL SKINCARE
//         </h1>

//         {/* NAV LINKS */}
//         <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//           <li className="cursor-pointer hover:text-black">Skin Care</li>
//           <li className="cursor-pointer hover:text-black">Hair Care</li>
//           <li className="cursor-pointer hover:text-black">Makeup</li>
//           <li className="cursor-pointer hover:text-black">Hair Color</li>
//           <li className="cursor-pointer hover:text-black">Virtual Tools</li>
//           <li className="cursor-pointer hover:text-black">About</li>
//         </ul>

//         {/* ICONS */}
//         <div className="flex items-center gap-5 text-gray-700">
//           <FiSearch size={20} className="cursor-pointer hover:text-black" />
//           <HiOutlineShoppingBag size={22} className="cursor-pointer hover:text-black" />
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Navbar() {
  const [logo, setLogo] = useState(null);

  // Load from localStorage (if user uploaded earlier)
  useEffect(() => {
    const storedLogo = localStorage.getItem("navbarLogo");
    if (storedLogo) {
      setLogo(storedLogo);
    }
  }, []);

  // When user selects a new logo
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setLogo(reader.result);
      localStorage.setItem("navbarLogo", reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <nav className="bg-[#fdfbf3] shadow-sm border-b-2 border">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6">
        {/* LEFT LOGO */}
        <div className="flex items-center gap-4">
          {logo ? (
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-auto object-contain rounded-full"
            />
          ) : (
            <img
              src="/mnt/data/013297d3-2486-43d5-80a1-994cb004ec34.png"
              alt="Default Logo"
              className="w-24 h-auto object-contain"
            />
          )}

          {/* Hidden Input (triggered by clicking image) */}
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            id="logoUpload"
            className="hidden"
          />

          {/* Upload Button */}
          <label
            htmlFor="logoUpload"
            className="cursor-pointer text-sm text-blue-600 underline hover:text-blue-800"
          >
            Change Logo
          </label>
        </div>

        {/* CENTER NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-black">Skin Care</li>
          <li className="cursor-pointer hover:text-black">Hair Care</li>
          <li className="cursor-pointer hover:text-black">Makeup</li>
          <li className="cursor-pointer hover:text-black">Hair Color</li>
          <li className="cursor-pointer hover:text-black">Virtual Tools</li>
          <li className="cursor-pointer hover:text-black">About</li>
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5 text-gray-700">
          <FiSearch size={20} className="cursor-pointer hover:text-black" />
          <HiOutlineShoppingBag
            size={22}
            className="cursor-pointer hover:text-black"
          />
        </div>
      </div>
    </nav>
  );
}
