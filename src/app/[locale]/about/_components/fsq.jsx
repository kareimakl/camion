"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const t = useTranslations("About.Fsq");

  const faqItems = t.raw("questions");

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAnswer = (answerKey) => {
    if (answerKey !== "complex") return answerKey;

    return (
      <div>
        <p className="mb-4 font-medium">
          We offer a comprehensive set of{" "}
          <span className="text-purple-600 font-bold">services</span> to help
          you achieve your digital goals:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <div className="text-right">
              <h3 className="font-bold text-lg text-gray-800">
                Software Solutions
              </h3>
              <a href="#" className="text-sm text-blue-600">
                More →
              </a>
            </div>
            <Image
              src="/assets/icons/dev-icon.svg"
              alt="dev"
              width={50}
              height={50}
            />
          </div>

          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <div className="text-right">
              <h3 className="font-bold text-lg text-gray-800">
                Marketing Solutions
              </h3>
              <a href="#" className="text-sm text-blue-600">
                More →
              </a>
            </div>
            <Image
              src="/assets/icons/marketing-icon.svg"
              alt="marketing"
              width={50}
              height={50}
            />
          </div>

          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <div className="text-right">
              <h3 className="font-bold text-lg text-gray-800">
                Digital Consulting
              </h3>
              <a href="#" className="text-sm text-blue-600">
                More →
              </a>
            </div>
            <Image
              src="/assets/icons/consult-icon.svg"
              alt="consult"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-16">
      <p className="text-xs font-bold text-center mb-3">{t("intro")}</p>
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        {t("sectionTitle")}{" "}
        <span className="text-[#2B00FF]">{t("sectionSubtitle")}</span>
      </h2>

      <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
        {faqItems.map((item, index) => (
          <div key={index} className="py-4 px-4">
            <button
              onClick={() => toggle(index)}
              className="flex items-center cursor-pointer justify-between w-full text-right font-medium text-gray-800 text-lg"
            >
              {item.q}
              <span className="text-purple-600 text-xl">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-4 text-gray-600 text-sm leading-relaxed animate-fade-in">
                {renderAnswer(item.a)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
