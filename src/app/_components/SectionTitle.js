export const SectionTitle = ({ title, text }) => {
  return (
    <div className="flex items-center gap-10">
      <h2 className="rounded-[7px] bg-[#B9FF66] px-[7] text-[40px] font-medium">
        {title}
      </h2>
      <p className="max-w-[580] text-lg">{text}</p>
    </div>
  );
};
