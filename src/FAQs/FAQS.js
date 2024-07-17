import React, { useState } from 'react';
import './FAQS.css';
import iconstar from "../assets/icon-star.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What are our opening hours?',
      answer: 'Our restaurant is open from Sunday to Friday from 11:00 AM to 10:00 PM.',
    },
    {
      question: 'Do we offer delivery services?',
      answer: 'Ofc, Askadenya Restaurant offers delivery services through various platforms such as Uber Eats, DoorDash, and our own website.',
    },
    {
      question: 'Do we have outdoor seating?',
      answer: 'Yes, Askadenya Restaurant offers both indoor and outdoor seating options. Enjoy your meal on our beautiful patio when the weather is nice.',
    },
    {
      question: 'Can I host a private event at Askadenya Restaurant?',
      answer: 'We have private dining areas available for special occasions and events. Please contact us to discuss your requirements and make arrangements',
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="faq-accordation" id="faq">
              <div className="faq-heading">
                <img src={iconstar} alt="background-pattern-desktop" />
                <h1>FAQs</h1>
              </div>
              <div className="faq-content">
                {faqData.map((faq, index) => (
                  <div className="faq-dropdown" key={index}>
                    <div className="faq-dropdown-header" onClick={() => toggleFAQ(index)}>
                      <h>{faq.question}</h>
                      <button className={`faq-icon ${activeIndex === index ? 'open' : ''}`}></button>
                    </div>
                    <div className={`faq-dropdown-body ${activeIndex === index ? 'open' : ''}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;