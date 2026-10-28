"use client";
import { useState } from "react";

const inputClass =
  "w-full rounded-[14px] border border-[#191A23] bg-white px-7.5 py-4.5 text-lg outline-none";

const options = [
  { value: "hi", label: "Say Hi" },
  { value: "quote", label: "Get a Quote" },
];

export const ContactCard = () => {
  const [type, setType] = useState("hi");

  return (
    <section className="relative mt-20 mb-35 overflow-hidden rounded-[45px] bg-[#F3F3F3] px-25 py-15">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 flex w-[556] flex-col gap-6.25"
      >
        <div className="mb-4 flex gap-8.75">
          {options.map((o) => (
            <label
              key={o.value}
              className="flex cursor-pointer items-center gap-3.5 text-lg"
            >
              <input
                type="radio"
                name="type"
                checked={type === o.value}
                onChange={() => setType(o.value)}
                className="h-7 w-7 appearance-none rounded-full border border-[#191A23] bg-white checked:bg-[#B9FF66] checked:shadow-[inset_0_0_0_6px_white]"
              />
              {o.label}
            </label>
          ))}
        </div>

        <label className="flex flex-col gap-1.25">
          Name
          <input type="text" placeholder="Name" className={inputClass} />
        </label>

        <label className="flex flex-col gap-1.25">
          Email*
          <input
            type="email"
            placeholder="Email"
            required
            className={inputClass}
          />
        </label>

        <label className="flex flex-col gap-1.25">
          Message*
          <textarea
            placeholder="Message"
            required
            className={`${inputClass} h-47.5 resize-none`}
          />
        </label>

        <button
          type="submit"
          className="mt-10 rounded-[14px] bg-[#191A23] py-5 text-xl text-white"
        >
          Send Message
        </button>
      </form>
      <img
        src="/Illustration10.png"
        alt=""
        className="absolute right-[-170] top-1/2 -translate-y-1/2"
      />
      /
    </section>
  );
};
