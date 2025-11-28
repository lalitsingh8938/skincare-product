import React from "react";

export default function ContentProShowcase() {
  return (
    <section className="w-full py-20 bg-white px-6">
      {/* NAVY BOX */}
      <div
        className="max-w-6xl mx-auto rounded-3xl p-14"
        style={{ backgroundColor: "#0E1A2E" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* COLUMN 1 */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              See What Content Pro Can Create
            </h3>
            <p
              className="text-base mt-3 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Real examples across beauty, food, fashion, electronics, 
              education, and retail — all generated or enhanced through AI.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              See Our Latest AI Content on Instagram
            </h3>
            <p
              className="text-base mt-3 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Behind-the-scenes experiments, client samples, and real AI workflows.
            </p>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Start Creating Smarter. Faster. Locally.
            </h3>
            <p
              className="text-base mt-3 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Create high-quality content powered by AI in your market, 
              for your audience, and at your speed.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
