export const Bichver = () => {
  return (
    <section className="relative mt-25 flex h-[347] items-center rounded-[45px] bg-[#F3F3F3] px-15">
      <div className="flex max-w-[500] flex-col gap-6.5">
        <h2 className="text-[30px] font-medium">Let’s make things happen</h2>
        <p className="text-lg">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <a
          href="#"
          className="w-fit rounded-[14px] bg-[#191A23] px-8.75 py-5 text-xl text-white"
        >
          Get your free proposal
        </a>
      </div>

      <img
        src="/Illustration (4).png"
        alt=""
        className="absolute right-[150] top-1/2 h-[394] -translate-y-1/2"
      />
    </section>
  );
};
