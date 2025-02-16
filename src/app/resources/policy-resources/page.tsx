import { FaGithub } from 'react-icons/fa';

const resources = [
  {
    title: "Emerging Technology Policy",
    description: "A comprehensive resource for emerging tech policy careers. Guides and fellowships included.",
    link: "https://emergingtechpolicy.org/"
  },
  {
    title: "Horizon Public Service",
    description: "Full time fellowship for individuals looking to work on national tech policy.",
    link: "https://horizonpublicservice.org/"
  },
  {
    title: "TechCongress",
    description: "The Congressional Innovation Fellowship places technologists in Congressional offices to provide expertise on technology policy.",
    link: "https://techcongress.io/apply"
  },
  {
    title: "Aspen Tech Policy Hub",
    description: "Policy bootcamp for tech experts.",
    link: "https://aspenpolicyacademy.org/program/science-and-technology-policy-fellowship/"
  },
  {
    title: "Presidential Innovation Fellowship",
    description: "",
    link: "https://presidentialinnovationfellows.gov/"
  },
  {
    title: "AAAS Science & Technology Policy Fellowships (STPF)",
    description: "",
    link: "http://www.stpf-aaas.org/"
  }
];

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-light tracking-wide mb-8">Policy Resources</h1>
          
          <div className="space-y-8">
            <p className="text-gray-800 text-lg leading-relaxed">
              Here are resources to help you kick start your AI Policy Career!
            </p>
            <p className="text-gray-600 text-sm leading-relaxed flex items-center">
              Please contribute to our resources on  
              <a href="https://github.com/cualignment" className="text-blue-600 hover:underline ml-1 flex items-center">
                <FaGithub className="inline-block h-4 w-4 mr-1" />  GitHub
              </a>.
            </p>
            
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index}>
                  <a href={resource.link} className="text-2xl text-blue-600 hover:underline">
                    {resource.title}
                  </a>
                  <p className="text-gray-600">{resource.description}</p>
                  {index < resources.length - 1 && <hr className="border-gray-300" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}