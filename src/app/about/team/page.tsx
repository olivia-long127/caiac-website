export default function TeamPage() {
  const teamMembers = [
    {
      name: "Yau-Meng Wong",
      title: "Director",
      image: "/team/yaumengwong.png",
      link: "https://www.linkedin.com/in/yau-meng-wong-721a5522b/"
    },
    {
      name: "Ryan Zhang",
      title: "Deputy Director",
      image: "/team/ryan-zhang.jpg",
      link: "https://www.linkedin.com/in/rhyzhang/"
    },
    {
      name: "Paul Kroeger",
      title: "Research Lead",
      image: "/team/paul_kroeger.jpeg",
      link: "https://www.linkedin.com/in/paul-kroeger/"
    },
    {
      name: "Olivia Long",
      title: "Outreach Lead",
      image: "/team/olivia_long.jpeg",
      link: "https://www.linkedin.com/in/olivia-l-572351246"
    },
    {
      name: "Thomas Gansa",
      title: "Communications Lead",
      image: "/team/thomasgansa.png",
      link: "https://www.linkedin.com/in/thomas-g-93ab0223a/"
    },
    {
      name: "Pranav Mehta",
      title: "Policy Fellowship Lead",
      image: "/team/pranav_mehta.jpeg",
      link: "https://www.linkedin.com/in/pranavmehta97/"
    },
    {
      name: "Shivani Rajagopalan",
      title: "Treasurer",
      image: "/team/shivani-rajagopalan.jpeg",
      link: "https://www.linkedin.com/in/shivani-rajagopalan-787235223/"
    },
    {
      name: "Catherine Mok",
      title: "Technical Facilitator",
      image: "/team/catherine_mok.jpg",
      link: "https://www.linkedin.com/in/catemok/"
    },
    {
      name: "Josh Ying",
      title: "Technical Facilitator",
      image: "/team/josh_ying.jpeg",
      link: "https://www.linkedin.com/in/zhuofan-josh-ying-27444a273/"
    },
    {
      name: "Junyao Chen",
      title: "Technical Facilitator",
      image: "/team/junyao_chen.jpg",
      link: "https://www.linkedin.com/in/jychen630/"
    },
    {
      name: "Akshay Manglik",
      title: "Technical Facilitator",
      image: "/team/akshay_manglik.jpg",
      link: "https://www.linkedin.com/in/akshay-manglik/"
    },
    {
      name: "Aiste Merfeldaite",
      title: "Policy Facilitator",
      image: "/team/aiste_merfeldaite.jpg",
      link: "https://www.linkedin.com/in/aiste-merfeldaite-56652020b/"
    }
  ];

  const advisors = [
    {
      name: "Micah Goldblum",
      title: "Faculty Advisor",
      image: "/team/micah_goldblum.jpg",
      link: "https://www.linkedin.com/in/micah-goldblum-9427b817b/"
    },
    {
      name: "Alexandra Bates",
      title: "Advisor",
      image: "/team/alexandra_bates.jpg",
      link: "https://www.linkedin.com/in/alexandrabates/"
    },
    {
      name: "Rohan Subramani",
      title: "Advisor",
      image: "/team/rohan_subramani.jpg",
      link: "https://www.linkedin.com/in/rohan-subramani-70a919225/"
    },
    {
      name: "Ella Markianos",
      title: "Advisor",
      image: "/team/ella_markianos.jpg",
      link: "https://www.linkedin.com/in/ella-poiger-markianos-7708a9237/"
    }
  ];

  const partners = [
    {
      name: "Harvard AI Student Safety Team",
      title: "Boston, MA",
      image: "/partners/aisst.png",
      link: "https://haist.ai"
    },
    {
      name: "MIT AI Alignment",
      title: "Boston, MA",
      image: "/partners/maia.png",
      link: "https://aialignment.mit.edu"
    },
    {
      name: "Cambridge Boston Alignment Initiative",
      title: "Boston, MA",
      image: "/partners/cbai.png",
      link: "https://www.cbai.ai"
    },
    {
      name: "Cornell AI Alignment",
      title: "Ithaca, NY",
      image: "/partners/cornell_aia.png",
      link: "https://www.cornell-aia.org"
    },
    {
      name: "Brown AI Safety Team",
      title: "Providence, RI",
      image: "/partners/baist.png",
      link: "https://www.baist.ai"
    },
    {
      name: "Boston University AI Safety Association",
      title: "Boston, MA",
      image: "/partners/buaisa.png",
      link: "https://buaisa.org"
    },
    {
      name: "University of British Columbia AI Safety",
      title: "Vancouver, BC",
      image: "/partners/ubcais.png",
      link: "https://www.ubcaisafety.org"
    },
    {
      name: "Stanford AI Alignment",
      title: "Stanford, CA",
      image: "/partners/saia.png",
      link: "https://stanfordaialignment.org"
    },
    {
      name: "Georgia Tech AI Safety Initiative",
      title: "Atlanta, GA",
      image: "/partners/gtaisi.png",
      link: "https://www.aisi.dev"
    },
    {
      name: "UChicago AI Safety",
      title: "Chicago, IL",
      image: "/partners/ucais.png",
      link: "https://uchicagoaisafety.com"
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
                <a href={member.link} title={member.name} target="_blank">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                </a>
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
                  <a href={advisor.link} title={advisor.name} target="_blank">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                  </a>
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

        {/* Partners Grid */}
        
        <div className="mt-16">
          <h2 className="text-3xl text-[#023a87] font-light mb-8 text-center">Partner Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {partners.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center text-center group">
                <div className="mb-6 flex items-center justify-center h-40 w-full">
                  <a href={partner.link} title={partner.name} target="_blank">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-40 max-w-full object-contain"
                    />
                  </a>
                </div>
                
                <h3 className="text-2xl text-[#023a87] font-light mb-2">
                  {partner.name}
                </h3>
                
                <p className="text-gray-600 text-lg font-light italic">
                  {partner.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
