export default function TeamPage() {
  const teamMembers = [
    {
      name: "Yau-Meng Wong",
      title: "Director",
      image: "/team/yaumengwong.png",
    },
    {
      name: "Ryan Zhang",
      title: "Deputy Director",
      image: "/team/ryan-zhang.jpg",
    },
    {
      name: "Paul Kroeger",
      title: "Research Lead",
      image: "/team/paul_kroeger.jpeg",
    },
    {
      name: "Olivia Long",
      title: "Outreach Lead",
      image: "/team/olivia_long.jpeg",
    },
    {
      name: "Thomas Gansa",
      title: "Communications Lead",
      image: "/team/thomasgansa.png",
    },
    {
      name: "Pranav Mehta",
      title: "Policy Fellowship Lead",
      image: "/team/pranav_mehta.jpeg",
    },
    {
      name: "Shivani Rajagopalan",
      title: "Treasurer",
      image: "/team/shivani-rajagopalan.jpeg",
    },
    {
      name: "Catherine Mok",
      title: "Technical Facilitator",
      image: "/team/catherine_mok.jpg",
    },
    {
      name: "Josh Ying",
      title: "Technical Facilitator",
      image: "/team/josh_ying.jpeg",
    },
    {
      name: "Junyao Chen",
      title: "Technical Facilitator",
      image: "/team/junyao_chen.jpg",
    },
    {
      name: "Akshay Manglik",
      title: "Technical Facilitator",
      image: "/team/akshay_manglik.jpg",
    },
    {
      name: "Aiste Merfeldaite",
      title: "Policy Facilitator",
      image: "/team/aiste_merfeldaite.jpg",
    }
  ];

  const advisors = [
    {
      name: "Micah Goldblum",
      title: "Faculty Advisor",
      image: "/team/micah_goldblum.jpg",
    },
    {
      name: "Alexandra Bates",
      title: "Advisor",
      image: "/team/alexandra_bates.jpg",
    },
    {
      name: "Rohan Subramani",
      title: "Advisor",
      image: "/team/rohan_subramani.jpg",
    },
    {
      name: "Ella Markianos",
      title: "Advisor",
      image: "/team/ella_markianos.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/*Header*/}
        <h1 className="text-[#023a87] text-5xl font-light text-center mb-4">
          Our Team
        </h1>
        
        <p className="text-center text-gray-600 italic mb-16">
        </p>

        {/*Team Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center group">
              <div className="mb-6 rounded-full overflow-hidden w-56 h-56 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl text-[#023a87] font-light mb-2">
                {member.name}
              </h3>
              
              <p className="text-gray-600 text-lg font-light italic">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        {/*Advisor Grid*/}
        <div className="mt-16">
          <h2 className="text-3xl text-[#023a87] font-light mb-8 text-center">Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="flex flex-col items-center text-center group">
                <div className="mb-6 rounded-full overflow-hidden w-56 h-56 shadow-md">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl text-[#023a87] font-light mb-2">
                  {advisor.name}
                </h3>
                
                <p className="text-gray-600 text-lg font-light italic">
                  {advisor.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}