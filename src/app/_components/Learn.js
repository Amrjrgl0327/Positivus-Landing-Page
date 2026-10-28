const cases = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export const Learn = () => {
  return (
    <div className="flex divide-x divide-white rounded-[45px] bg-[#191A23] px-15 py-17.5">
      {cases.map((text) => (
        <div
          key={text}
          className="flex flex-1 flex-col gap-5 px-16 first:pl-0 last:pr-0"
        >
          <p className="text-lg text-white">{text}</p>
          <a
            href="#"
            className="mt-auto flex items-center gap-4 text-xl text-[#B9FF66]"
          >
            Learn more
            <img src="/Arrow 1.png" alt="" />
          </a>
        </div>
      ))}
    </div>
  );
};
