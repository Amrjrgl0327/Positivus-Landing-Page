export const Header = () => {
  return (
    <div className="h-17 flex justify-between items-center mt-15  bg-white text-black">
      <img src="/logo.png" alt="Positivus" />

      <div className="flex items-center gap-10 text-xl">
        <a href="#">About us</a>
        <a href="#">Services</a>
        <a href="#">Use Cases</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <a
          href="#"
          className="rounded-[14px] border border-[#191A23] px-8.75 py-5"
        >
          Request a quote
        </a>
      </div>
    </div>
  );
};
