import React from "react";

export default function LiveExampleEmbed() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Live Landing Page Example
        </h2>

        <iframe
          src="https://example.com"
          className="w-full h-[600px] rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
