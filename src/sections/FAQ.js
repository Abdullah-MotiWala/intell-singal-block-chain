import React, { useState } from "react";
import FaqCard from "../components/shared/FaqCard";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState();
  const handleSetIndex = (index) => {
    setActiveIndex(index);
  };
  const faqs = [
    {
      question: "What are Intelligent Signals?",
      answer:
        "Intelligent Signals is an ecosystem that utilizes Artificial Intelligence (AI) and Visual Signalling Technology (VST) to analyze crypto charts and identify optimal market entry and exit points for trading cryptocurrencies. It includes the Intelligent Signals Token (INSIG) as the exclusive means of subscribing to the platform. The INSIG token also incorporates a crypto trading bot for automated trading."
    },
    {
      question: "Why should i use Intelligent Signals?",
      answer:
        "Intelligent Signals is designed to improve traders performance and consistency in decision-making. It offers an automated and intelligent approach to crypto selection and trading, allowing for 24/7 monitoring and execution of trades without manual intervention. With a 70% success rate, it provides traders with a more reliable and hands-free trading experience."
    },
    {
      question: "How does Intelligent Signals utilize pattren recognition?",
      answer:
        "Intelligent Signals leverages AI and Machine Learning to analyze over 23,000 crypto charts and identify chart patterns. These patterns are ranked based on importance, providing traders with a competitive advantage. The Visual Signalling Technology (VST) developed by Intelligent Signals uses a color scheme (red, amber, and green) to simplify the identification and interpretation of patterns."
    },
    {
      question: " What features does Intelligent Signals offers?",
      answer:
        " Intelligent Signals offers several essential features,including a trading bot for automated trading based on market signals and user-defined parameters. It also provides a strategy builder and backtester for traders to create and test their trading strategies. Additionally, it incorporates a risk profiler, staking opportunities, new listing alerts, and a community-centric ecosystem."
    },
    {
      question:
        "How does Intelligent Signals contribute to cryptocurrency market?",
      answer:
        " Intelligent Signals contributes to the cryptocurrency market by providing accurate trading signals based on technical analysis and AI. Its pattern recognition technology, GANN analytics, and cognitive recognition enable traders to forecast market movements and make informed trading decisions. The platform aims to improve risk management, offer timely market insights, and create a transparent and engaged community within the crypto space."
    }
  ];
  return (
    <section id="faq">
      <div className="relative py-16 bg-gray-100 min-h-screen w-full flex flex-col items-center gap-8 ">
        <div>
          <div className="relative bg-gray-100 min-h-screen w-full flex flex-col items-center gap-8 ">
            <h2 className="custom-mini-heading mb-3">
              Frequently Asked <span className="text-green-500">Questions</span>{" "}
            </h2>
            {faqs.map(({ question, answer },index) => (
              <FaqCard
                setActiveIndex={setActiveIndex}
                handleSetIndex={handleSetIndex}
                activeIndex={activeIndex}
                i={index}
                question={question}
                answer={answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
