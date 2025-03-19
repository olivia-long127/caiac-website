import { FaGithub } from 'react-icons/fa';

const resources = [
  {
    title: "ARENA*",
    description: "One of the best resources out there for upskilling. Check out chapter one here: https://arena-chapter1-transformer-interp.streamlit.app/",
    link: "https://www.arena.education/"
  },
  {
    title: "MATS",
    description: "Do alignment research with industry experts. Mentors include Neel Nanda, Jan Leike, David Krueger, and more.",
    link: "https://www.matsprogram.org/"
  },
  {
    title: "SPAR",
    description: "A virtual, part-time, volunteer research program for students interested in AI Safety.",
    link: "https://sparai.org/"
  }
];

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-light tracking-wide mb-8">Technical Resources</h1>
          
          <div className="space-y-8">
            <p className="text-gray-800 text-lg leading-relaxed">
              Here are resources to help you kick start your AI Technical Research Career! (* means highly recommended)
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