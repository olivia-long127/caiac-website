const researchEntries = [
  
  {
    title: "The Partially Observable Off-Switch Game",
    authors: [
      { name: "Andrew Garber" },
      { name: "Rohan Subramani", isPI: true },
      { name: "Linus Luu" },
      { name: "Mark Bedaywi" },
      { name: "Stuart Russell" },
      { name: "Scott Emmons" }
    ],
    date: "April 11, 2025",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O-qEYjUAAAAJ&citation_for_view=O-qEYjUAAAAJ:IjCSPb-OGe4C"
  },
  {
    title: "SCIURus: Shared Circuits for Interpretable Uncertainty Representations in Language Models",
    authors: [
      { name: "Carter Teplica", isPI: true },
      { name: "Yixin Liu" },
      { name: "Arman Cohan" },
      { name: "Tim GJ Rudner" }
    ],
    date: "December 15, 2024",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g-weYlAAAAAJ&citation_for_view=g-weYlAAAAAJ:9yKSN-GCB0IC"
  },
  {
    title: "Adaptive Contextual Perception: How to Generalize to New Backgrounds and Ambiguous Objects",
    authors: [
      { name: "Zhuofan Ying", isPI: true },
      { name: "Peter Hase" },
      { name: "Mohit Bansal" }
    ],
    date: "December 2, 2024",
    link: "https://arxiv.org/abs/2306.05963v2"
  },
  {
    title: "Generalization Analogies (Genies): A Testbed for Generalizing AI Oversight to Hard-to-Measure Domains",
    authors: [
      { name: "Joshua Clymer", isPI: true },
      { name: "Garrett Baker" },
      { name: "Rohan Subramani", isPI: true },
      { name: "Sam Wang" }
    ],
    date: "November 13, 2023",
    link: "https://scholar.google.com/citations?user=O-qEYjUAAAAJ&hl=en"
  }
];

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
   
      <h1>
        Recent Research by CAIAC Members
      </h1>
      
      <div className="space-y-12">
        {researchEntries.map((entry, index) => (
          <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0">
            <div className="flex flex-col gap-3">
              <a 
                href={entry.link}
                target="_blank" rel="noopener noreferrer"
                className="text-[#023a87] hover:underline text-xl font-medium block"
              >
                {entry.title}
              </a>
              
              <div className="text-gray-700">
                {entry.authors.map((author, i) => (
                  <span key={i}>
                    {author.isPI ? <strong>{author.name}</strong> : author.name}
                    {i < entry.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              
              <div className="text-gray-600">
                {entry.date}
              </div>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
