import React, { useState } from 'react';

const faqData = [
  {
    question: "What is Bethesda Child Care Centre?",
    answer: "Bethesda Child Care Centre is a non-profit organization based in Kenya that provides a safe, loving, and nurturing environment for orphaned and abandoned children. Our mission is to provide education, healthcare, and emotional support to ensure every child grows up healthy, happy, and equipped for the future.",
  },
  {
    question: "How can I donate to Bethesda Child Care Centre?",
    answer: "There are several ways to donate:\n\n- Online Donation: Donate securely through our donation page.\n- Bank Transfer: We accept donations via bank transfer. Please contact us for bank details.\n- In-kind Donations: We accept items such as food, clothes, school supplies, and equipment. Visit our In-kind Donations page for details.",
  },
  {
    question: "Can I volunteer at Bethesda?",
    answer: "Yes! We welcome volunteers passionate about making a difference. Volunteers assist in areas like education, healthcare, and community outreach. To apply, visit our Volunteer Page and complete the application form.",
  },
  {
    question: "How can I organize a fundraiser for Bethesda?",
    answer: "We encourage individuals and organizations to host fundraising events such as charity runs, bake sales, or online campaigns. Visit our Fundraising Page for guidance on getting started.",
  },
  {
    question: "What is the best way to support Bethesda?",
    answer: "The best ways to support us include:\n\n- Monetary Donations: Help us allocate resources where most needed.\n- Volunteering: Your time and skills greatly impact our children and community.\n- Corporate Sponsorship: Partner with us for long-term support and joint initiatives.\n- In-kind Donations: Items like food, clothing, and educational materials benefit the children directly.",
  },
  {
    question: "What are the current needs at Bethesda Child Care Centre?",
    answer: "Our current needs include:\n\n- School Supplies: Books, uniforms, stationery, and learning materials.\n- Health Supplies: Contributions to our medical fund for healthcare.\n- Food & Clothing: In-kind donations for daily needs.\n- Financial Donations: Sustaining and expanding our programs.\n\nFor a detailed list, visit our Projects Page.",
  },
  {
    question: "Where is Bethesda Child Care Centre located?",
    answer: "We are located in Mirangine, Nyandarua County, Kenya, with smaller outreach programs in various communities. Please contact us for visit details.",
  },
  {
    question: "What is the age range of the children at Bethesda?",
    answer: "We care for children from as young as one week old up to 15 years old, providing tailored education, healthcare, and emotional support at each stage.",
  },
  {
    question: "Can I visit the children at Bethesda?",
    answer: "Yes, visitors are welcome. For safety, all visits must be scheduled in advance. Please fill out our Visitor Form and we will confirm available times and guidelines.",
  },
  {
    question: "How does Bethesda ensure the safety and well-being of the children?",
    answer: "We follow strict child protection policies and work with local authorities, healthcare providers, and social services. All staff undergo background checks, ensuring a safe environment for all children.",
  },
  {
    question: "Are donations tax-deductible?",
    answer: "Bethesda Child Care Centre is a registered non-profit. Donations are generally tax-deductible, but tax laws vary by country. Please consult a local tax professional for confirmation.",
  },
  {
    question: "How can I stay updated on Bethesda's activities?",
    answer: "Stay updated by:\n\n- Subscribing to our newsletter.\n- Following us on social media (Facebook, Instagram, Twitter).\n- Visiting our News & Updates Blog for stories, events, and accomplishments.",
  },
  {
    question: "How can I apply for an internship or student program?",
    answer: "Visit our Internship/Student Program page for full details and application instructions.",
  },
  {
    question: "Can my company partner with Bethesda?",
    answer: "Yes, we welcome corporate partnerships. If your company is interested in supporting our mission, please visit our Corporate Partnerships Page for more information.",
  },
  {
    question: "How can I contact Bethesda Child Care Centre?",
    answer: "You can reach us via:\n\n- Phone: [Insert Phone Number]\n- Email: [Insert Email Address]\n- Address: [Insert Address]\n- Contact Form: Visit our Contact Us page to send us a direct message.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl my-8">
      <h2 className="text-center my-8 text-3xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-100 p-4 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Q: {item.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-800 whitespace-pre-line">
                <strong>A: </strong>{item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
