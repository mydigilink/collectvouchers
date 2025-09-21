"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is CollectVouchers?",
    answer:
      "CollectVouchers is a platform where you can find the best deals, coupons, and discounts from your favorite stores.",
  },
  {
    question: "Is CollectVouchers free to use?",
    answer:
      "Yes! CollectVouchers is completely free. You can browse and use all deals without any charges.",
  },
  {
    question: "How often are deals updated?",
    answer:
      "We update our deals daily to make sure you always get the freshest offers and discounts.",
  },
  {
    question: "Do I need an account to use coupons?",
    answer:
      "No account is required. Just click on any coupon and apply it directly on the store’s checkout page.",
  },
  {
    question: "Can I submit my own coupons?",
    answer:
      "Yes! We welcome user-submitted deals. You can share them with us through the 'Submit a Coupon' section.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-5 container">
      <h2 className="fw-bold text-center mb-4">❓ Frequently Asked Questions</h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="accordion-item border rounded mb-2 shadow-sm"
          >
            <button
              className="accordion-header w-100 text-start p-3 fw-semibold bg-white border-0"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="float-end">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="accordion-body px-3 pb-3 text-muted">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
