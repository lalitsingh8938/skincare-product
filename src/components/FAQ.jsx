import React, { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      question: "How does brand governance work?",
      answer:
        "Our platform ensures every piece of content follows your brand rules, tone, assets, and compliance guidelines automatically using AI-based guardrails.",
    },
    {
      question: "Can we manage multiple brands?",
      answer:
        "Yes. You can create dedicated brand spaces with their own rules, assets, templates, and user permissions.",
    },
    {
      question: "Can we localise content across markets?",
      answer:
        "Absolutely. The system adapts copy, visuals, and messaging for different regions, languages, and cultural sensitivities.",
    },
    {
      question: "How does user access and permissioning work?",
      answer:
        "You can assign granular roles and permissions—such as creators, reviewers, approvers, and admins—to maintain control and governance.",
    },
    {
      question: "Can we integrate with DAM/CMS systems?",
      answer:
        "Yes. DAM and CMS integrations are available through APIs. Automated asset ingestion and publishing are also supported.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F2F0E4] min-h-96">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-10">
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition-all cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>

                <span className="text-2xl text-[#00646C] font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed animate-fadeIn">
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
