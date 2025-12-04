import React, { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What types of content can the platform generate?",
      answer:
        "Our platform can create videos, images, captions, ad creatives, product shots, posters, social media content, landing page assets, and even localized content across multiple languages — all from simple prompts.",
    },
    {
      question: "How does the AI maintain brand consistency?",
      answer:
        "Each brand has its own identity profile including fonts, colors, tone of voice, logo rules, and visual guidelines. The AI automatically applies these rules to every asset, ensuring 100% on-brand output.",
    },
    {
      question: "Can I upload my product catalog for personalized content?",
      answer:
        "Yes. You can upload product images, descriptions, USPs, and specifications. The AI uses this structured data to generate hyper-accurate, context-aware creative assets.",
    },
    {
      question: "Does the platform support multiple brands or sub-brands?",
      answer:
        "Absolutely. Enterprises can manage dozens of brands in one dashboard, each with its own rules, teams, and content libraries.",
    },
    {
      question: "Can teams collaborate and approve content within the platform?",
      answer:
        "Yes. Teams can review, comment, request edits, and approve assets inside the platform. No more juggling multiple tools or WhatsApp approvals.",
    },
    {
      question: "Can we publish content directly to social media?",
      answer:
        "Yes. You can schedule and publish to Facebook, Instagram, TikTok, and other channels right from the dashboard using our Publishing & Calendar feature.",
    },
    {
      question: "How does the platform handle localization?",
      answer:
        "The AI can recreate any asset — images, videos, captions, scripts — in multiple languages with cultural nuance and region-specific adaptation, without losing brand identity.",
    },
    {
      question: "Is the content safe and compliant?",
      answer:
        "Yes. All content passes through brand governance checks — tone, rules, do’s & don’ts, claims, and compliance flags — to ensure you never publish off-brand or risky content.",
    },
    {
      question: "Can I reuse, repurpose, or remix previously generated content?",
      answer:
        "Definitely. Everything is stored in your Content Library, where you can duplicate, iterate, localize, or convert assets into different formats instantly.",
    },
    {
      question: "What AI models power the platform?",
      answer:
        "We use a combination of leading foundation models and custom multimodal engines optimized for speed, quality, and enterprise-grade security.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f7e9cc] min-h-96">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-10">
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FFEDF3] border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition-all cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-700">
                  {faq.question}
                </h3>

                <span className="text-2xl text-slate-700 font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-4 text-slate-800 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
