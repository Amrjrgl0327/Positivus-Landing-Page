"use client";
import { useState } from "react";

const desc =
  "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.";

const data = [
  { number: "01", text: "Consultation", description: desc },
  {
    number: "02",
    text: "Research and Strategy Development",
    description: desc,
  },
  { number: "03", text: "Implementation", description: desc },
  { number: "04", text: "Monitoring and Optimization", description: desc },
  { number: "05", text: "Reporting and Communication", description: desc },
  { number: "06", text: "Continual Improvement", description: desc },
];

export const Grid = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-7.5">
      {data.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.number}
            className={`rounded-[45px] border border-[#191A23] px-15 py-10 shadow-[0_5px_0_#191A23] ${
              isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="flex items-center gap-6.5">
                <span className="text-[60px] font-medium">{item.number}</span>
                <span className="text-[30px] font-medium">{item.text}</span>
              </span>
              <img
                src={isOpen ? "/plus1.png" : "/Plus.png"}
                alt=""
                className="h-14.5 w-14.5"
              />
            </button>

            {isOpen && (
              <p className="mt-7.5 border-t border-[#191A23] pt-7.5 text-lg">
                {item.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
