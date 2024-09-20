import React, { useState } from 'react';

export default function Faq({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {data && (
        <div className=" container mx-auto px-4 my-8">
          <h2 className="text-center block my-8 text-3xl font-bold">
            Frequent Questions
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {data?.map((question, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-100 p-4 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                {/* Question */}
                <div className="rounded-lg font-bold text-lg flex justify-between items-center">
                  <span>Q: {question.question}</span>
                  <span>{activeIndex === index ? '-' : '+'}</span>
                </div>

                {/* Answer (conditionally rendered) */}
                {activeIndex === index && (
                  <p className="mt-2 text-gray-800">
                    <strong>A: </strong>{question.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
