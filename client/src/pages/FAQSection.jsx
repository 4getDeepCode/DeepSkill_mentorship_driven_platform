import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is DeepSkill?",
      answer:
        "DeepSkill is a platform designed to connect ambitious individuals with expert mentors to help them grow personally and professionally.",
    },
    {
      question: "Who can join DeepSkill?",
      answer:
        "Students, professionals, entrepreneurs, and anyone looking for guidance from experienced mentors can join DeepSkill.",
    },
    {
      question: "How do mentors help?",
      answer:
        "Mentors provide career guidance, skill development advice, and real-world insights based on their experience.",
    },
    {
      question: "Is DeepSkill free to use?",
      answer:
        "Some features are free, while premium mentorship sessions may require payment depending on the mentor.",
    },
    {
      question: "How do I choose a mentor?",
      answer:
        "You can browse mentor profiles, view their expertise, and select the mentor that best matches your goals.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to us via the Contact Us page for any questions or assistance.",
    },
  ];

  return (
    <section
      className="relative px-6 py-24 overflow-hidden
  bg-gradient-to-b from-green-950 via-green-900 to-green-950"
    >
      {/* Background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-lime-400/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto">
        <h2
          className="mb-6 text-4xl sm:text-5xl font-extrabold text-center
      bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
      bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </h2>

        <p className="mb-14 text-lg text-center text-yellow-200/80 max-w-3xl mx-auto">
          Get the answers you need about DeepSkill and how we can support your
          growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-yellow-400/20
          bg-green-900/40 backdrop-blur
          transition-all duration-300
          hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]"
            >
              <button
                className="flex items-center justify-between w-full p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-yellow-200">
                  {faq.question}
                </span>
                <span
                  className="text-2xl font-bold
              bg-gradient-to-r from-yellow-400 to-lime-400
              bg-clip-text text-transparent"
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-yellow-200/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className="inline-flex items-center justify-center
        px-10 py-4 text-lg font-semibold rounded-full
        text-green-950
        bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
        transition-all duration-300
        hover:from-yellow-300 hover:to-lime-500
        hover:shadow-[0_0_25px_rgba(250,204,21,0.8)]
        hover:-translate-y-1
        disabled:opacity-60 disabled:cursor-not-allowed"
        disabled
          >
            Still have questions? Contact Us!
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
