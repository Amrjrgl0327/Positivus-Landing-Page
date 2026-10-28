"use client";
const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

export const Footer1 = () => {
  return (
    <footer className="rounded-t-[45px] bg-[#191A23] px-15 pt-13.75 pb-12.5 text-white">
      <div className="flex items-center justify-between">
        <img src="/logo1.png" alt="Positivus" />
        <nav className="flex gap-10 text-lg">
          {links.map((l) => (
            <a key={l} href="#" className="underline">
              {l}
            </a>
          ))}
        </nav>
        <img src="/Social1.png" alt="Social links" />
      </div>

      <div className="mt-16.5 flex items-start justify-between">
        <div className="flex flex-col gap-6.75">
          <h3 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7] text-xl font-medium text-black">
            Contact us:
          </h3>
          <div className="flex flex-col gap-5 text-lg">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex gap-5 rounded-[14px] bg-[#292A32] px-10 py-14.5"
        >
          <input
            type="email"
            placeholder="Email"
            required
            className="w-[285] rounded-[14px] border border-white bg-transparent px-8.75 py-5.5 text-lg outline-none placeholder:text-white"
          />
          <button
            type="submit"
            className="rounded-[14px] bg-[#B9FF66] px-8.75 py-5 text-xl text-black"
          >
            Subscribe to news
          </button>
        </form>
      </div>

      <div className="mt-12.5 flex gap-10 border-t border-white pt-12.5 text-lg">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};
