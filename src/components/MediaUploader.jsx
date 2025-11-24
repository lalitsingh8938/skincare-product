import React, { useState } from "react";

export default function MediaUploader() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    const url = URL.createObjectURL(selectedFile);
    setPreview(url);
  };

  const handleReset = () => {
    setFile(null);
    setPreview("");
  };

  const isVideo = file && file.type.startsWith("video");

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Upload Image or Video
      </h2>

      {/* Upload Input */}
      <label className="block mb-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition">
          <p className="text-gray-600">Click to upload image or video</p>
          <p className="text-xs text-gray-400 mt-1">JPG, PNG, MP4, WEBM</p>
        </div>
        <input
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={handleSelect}
        />
      </label>

      {/* Preview Section */}
      {preview && (
        <div className="mt-4">
          <h3 className="font-medium text-gray-700 mb-2">Preview:</h3>

          <div className="w-full rounded-lg overflow-hidden border">
            {isVideo ? (
              <video
                src={preview}
                controls
                className="w-full h-64 object-cover bg-black"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-full h-64 object-cover"
              />
            )}
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Remove File
          </button>
        </div>
      )}
    </div>
  );
}
