"use client";
import { useState } from "react";

const testimonials = Array(5).fill({
  text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  name: "John Smith",
  role: "Marketing Director at XYZ Corp",
});

export const Navigation = () => {
  const [active, setActive] = useState(2);
  const last = testimonials.length - 1;
  const prev = () => setActive((a) => (a === 0 ? last : a - 1));
  const next = () => setActive((a) => (a === last ? 0 : a + 1));

  return (
    <div className="overflow-hidden rounded-[45px] bg-[#191A23] py-21">
      <div
        className="flex gap-12 transition-transform duration-500"
        style={{
          transform: `translateX(calc(50% - 303px - ${active} * 654px))`,
        }}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="w-[606] shrink-0">
            <div className="relative rounded-[45px] border border-[#B9FF66] px-13 py-12 text-lg text-white">
              {t.text}
              <span className="absolute -bottom-3 left-20 h-6 w-6 rotate-45 border-b border-r border-[#B9FF66] bg-[#191A23]" />
            </div>
            <div className="ml-20 mt-12">
              <p className="text-xl font-medium text-[#B9FF66]">{t.name}</p>
              <p className="text-lg text-white">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mx-auto mt-31 w-[567]">
        <img src="/Navigation.png" alt="" className="w-full" />
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 top-0 h-full w-10"
        />
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 top-0 h-full w-10"
        />
      </div>
    </div>
  );
};
