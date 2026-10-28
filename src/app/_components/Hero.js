export const Hero = () => {
  return (
    <div className="mt-17.5 flex gap-25 items-center bg-white text-black">
      <div className="flex-1 flex flex-col gap-8.75">
        <h1 className="text-[60px] font-medium leading-tight">
          Navigating the digital landscape for success
        </h1>
        <p className="text-xl">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <a
          href="#"
          className="px-8.75 py-5 text-xl rounded-[14px] bg-black text-white w-fit"
        >
          Book a consultation
        </a>
      </div>
      <div className="flex-1">
        <img src="/Illustration (1).png" className="w-full" />
      </div>
    </div>
  );
};
