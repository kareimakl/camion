"use client";
import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";

import { useState } from "react";

const faqs = [
  {
    category: "Shipping & Delivery",
    items: [
      {
        q: "What is the delivery time and coverage areas?",
        a: "Delivery usually takes 3 to 5 business days within main cities in Saudi Arabia. Deliveries to remote areas may take longer. We are currently working on expanding our services to cover all regions, including Europe, in the future.",
      },
      {
        q: "How can I track my order?",
        a: "Once shipped, you will receive an email and SMS with a tracking number. You can use this number to track your order on the courier’s website. You can also track directly through the 'My Orders' section in your account.",
      },
      {
        q: "What is the shipping cost?",
        a: "The flat shipping fee is 25 SAR for all orders. We offer free shipping for orders above 200 SAR.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently, shipping is limited to Saudi Arabia. However, we plan to expand our services internationally in the near future.",
      },
    ],
  },
  {
    category: "Payment",
    items: [
      {
        q: "What payment methods are accepted?",
        a: "We accept multiple payment methods including credit/debit cards, Mada, and cash on delivery (COD).",
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely. All transactions are processed securely through trusted payment gateways. We do not store your sensitive card details.",
      },
      {
        q: "Are there extra fees for COD?",
        a: "Yes, a small service fee may apply for cash on delivery. This will be shown clearly on the checkout page before confirming your order.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    items: [
      {
        q: "What is your return and exchange policy?",
        a: "You may return products within 14 days of receipt as long as they are unused, in original packaging, and in sellable condition. Some items may not be eligible for return due to hygiene reasons. Please review the full terms on our website.",
      },
      {
        q: "How can I start a return request?",
        a: "Go to the 'My Orders' section, select the item you want to return, and click on 'Return Item.' Follow the instructions to submit your request. Our team will review and contact you with next steps.",
      },
      {
        q: "When will I receive my refund?",
        a: "Once we receive and inspect the returned item, your refund will be processed within 7–14 business days. The amount will be credited back to your original payment method.",
      },
    ],
  },
  {
    category: "Account & Personal Info",
    items: [
      {
        q: "I forgot my password. How can I reset it?",
        a: "Go to the login page and click 'Forgot Password.' Enter your registered email, and we’ll send you a link to reset your password.",
      },
      {
        q: "How can I update my personal information?",
        a: "You can update your profile details such as name, address, and phone number in the 'My Account' section under 'Settings'.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let counter = 0;

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-start text-gray-900 mb-8">
            Frequently Asked Questions
          </h1>

          {faqs.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-xl font-semibold text-indigo-700 mb-4">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, j) => {
                  const idx = counter++;
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={j}
                      className="border border-gray-200 rounded-xl bg-white shadow-sm"
                    >
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-50 rounded-xl"
                      >
                        {item.q}
                        <span className="text-indigo-500">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-gray-600">{item.a}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
