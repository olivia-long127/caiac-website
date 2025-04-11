import { FaGithub } from 'react-icons/fa';

const resources = [
  {
    title: "ARENA*",
    description: "One of the best resources out there for upskilling. Check out chapter one here: https://arena-chapter1-transformer-interp.streamlit.app/",
    link: "https://www.arena.education/"
  },
  {
    title: "MATS*",
    description: "A 10‑week research and seminar initiative based in Berkeley that connects talented scholars with top mentors in AI alignment, interpretability, and governance.",
    link: "https://www.matsprogram.org/"
  },
  {
    title: "Cambridge ERA:AI Fellowship",
    description: "An 8‑week, in‑person summer research program at the University of Cambridge that supports researchers in mitigating advanced AI risks by uniting technical and governance approaches.",
    link: "https://erafellowship.org/"
  },
  {
    title: "Pivotal Fellowship",
    description: "A 9‑week research initiative where fellows collaborate with experienced researchers in AI and biosecurity to address some of humanity's most pressing global risks.",
    link: "https://www.pivotal-research.org/"
  },
  {
    title: "SPAR",
    description: "A virtual, part‑time, 3‑month mentorship program that connects early‑career professionals and students with seasoned experts to work on AI safety research projects spanning technical and policy domains.",
    link: "https://sparai.org/"
  },
  {
    title: "UChicago XLab",
    description: "An interdisciplinary research community dedicated to mitigating global catastrophic risks while training the next generation of scholars and policymakers.",
    link: "https://xrisk.uchicago.edu/"
  },
  {
    title: "CHAI",
    description: "The Center for Human‑Compatible AI (CHAI) at UC Berkeley offers research fellowships, collaborative projects, and internships that empower postdoctoral researchers to develop provably beneficial AI systems using interdisciplinary methods.",
    link: "https://humancompatible.ai/jobs#postdoc-specializing-in-ai-safety-and-control"
  },
  {
    title: "MARS",
    description: "MARS (Mentorship for Alignment Research Students) is a 2‑to‑3‑month volunteer program that pairs aspiring AI safety researchers with experienced mentors for focused projects, including an intensive kickoff week in Cambridge.",
    link: "https://www.cambridgeaisafety.org/mars"
  },
  {
    title: "SERI Summer Fellowship",
    description: "Says is only for Stanford Students but accepted outside students in the past.",
    link: "https://seri.stanford.edu/resources/courses/seri-summer-fellowship"
  },
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