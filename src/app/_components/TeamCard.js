const data = [
  {
    picture: "/Mask.png",
    icon: "/Social.png",
    name: "John Smith",
    posision: "CEO and Founder",
    experiance:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },

  {
    picture: "/Mask1.png",
    icon: "/Social.png",
    name: "Jane Doe",
    posision: "Director of Operations",
    experiance:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },

  {
    picture: "/Mask2.png",
    icon: "/Social.png",
    name: "Michael Brown",
    posision: "Senior SEO Specialist",
    experiance:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },

  {
    picture: "/Mask3.png",
    icon: "/Social.png",
    name: "Emily Johnson",
    posision: "PPC Manager",
    experiance:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },

  {
    picture: "/Mask4.png",
    icon: "/Social.png",
    name: "Brian Williams",
    posision: "Social Media Specialist",
    experiance:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },

  {
    picture: "/Mask5.png",
    icon: "/Social.png",
    name: "Sarah Kim",
    posision: "Content Creator",
    experiance:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

const Card = ({ img, name, posision, icon, experiance }) => {
  return (
    <div className="flex flex-col gap-7 rounded-[45px] border border-[#191A23] px-8.75 py-10 shadow-[0_5px_0_#191A23]">
      <div className="flex items-end gap-5 border-b border-[#191A23] pb-7">
        <img src={img} alt={name} className="h-25.5 w-25.5" />
        <div className="flex-1">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-lg">{posision}</p>
        </div>
        <img src={icon} alt="LinkedIn" className="h-8.5 w-8.5 self-start" />
      </div>
      <p className="text-lg">{experiance}</p>
    </div>
  );
};

export const TeamCard = () => {
  return (
    <div className="mt-20 grid grid-cols-3 gap-10">
      {data.map((item) => (
        <Card
          key={item.name}
          img={item.picture}
          name={item.name}
          posision={item.posision}
          icon={item.icon}
          experiance={item.experiance}
        />
      ))}
    </div>
  );
};
