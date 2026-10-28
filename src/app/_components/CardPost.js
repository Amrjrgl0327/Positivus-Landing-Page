const services = [
  {
    title: ["Search engine", "optimization"],
    img: "/elements1.png",
    theme: "gray",
  },
  {
    title: ["Pay-per-click", "advertising"],
    img: "/Illustration.png",
    theme: "green",
  },
  { title: ["Social Media", "Marketing"], img: "/picture.png", theme: "dark" },
  { title: ["Email", "Marketing"], img: "/picture2.png", theme: "gray" },
  { title: ["Content", "Creation"], img: "/picture3.png", theme: "green" },
  { title: ["Analytics and", "Tracking"], img: "/picture4.png", theme: "dark" },
];

const themes = {
  gray: {
    card: "bg-[#F3F3F3]",
    tag: "bg-[#B9FF66]",
    link: "text-black",
    icon: "/Icon.png",
  },
  green: {
    card: "bg-[#B9FF66]",
    tag: "bg-white",
    link: "text-black",
    icon: "/Icon.png",
  },
  dark: {
    card: "bg-[#191A23]",
    tag: "bg-white",
    link: "text-white",
    icon: "/Icon (2).png",
  },
};

export const CardPost = () => {
  return (
    <div className="mt-20 grid grid-cols-2 gap-10">
      {services.map((s) => {
        const t = themes[s.theme];
        return (
          <div
            key={s.title.join(" ")}
            className={`flex items-center justify-between rounded-[45px] border border-[#191A23] p-12.5 shadow-[0_5px_0_#191A23] ${t.card}`}
          >
            <div className="flex flex-col gap-23">
              <h3 className="text-[30px] font-medium leading-tight">
                {s.title.map((line) => (
                  <span
                    key={line}
                    className={`block w-fit rounded-[7px] px-[7] ${t.tag}`}
                  >
                    {line}
                  </span>
                ))}
              </h3>
              <a
                href="#"
                className={`flex items-center gap-4 text-xl ${t.link}`}
              >
                <img src={t.icon} alt="" className="h-10 w-10" />
                Learn more
              </a>
            </div>
            <img src={s.img} alt="" className="w-[210]" />
          </div>
        );
      })}
    </div>
  );
};
