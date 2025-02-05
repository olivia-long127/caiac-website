import { FaGithub } from 'react-icons/fa';

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
              <div>
                <a href="https://emergingtechpolicy.org/" className="text-2xl text-blue-600 hover:underline">
                  Emerging Technology Policy
                </a>
                <p className="text-gray-600">A comprehensive resource for emerging tech policy careers. Guides and fellowships included.</p>
              </div>
              <hr className="border-gray-300" />
              <div>
                <a href="https://horizonpublicservice.org/" className="text-2xl text-blue-600 hover:underline">
                  Horizon Public Service
                </a>
                <p className="text-gray-600">Full time fellowship for individuals looking to work on national tech policy.</p>
              </div>
              <hr className="border-gray-300" />
            </div>



          </div>
        </div>
      </div>

    </div>
  );
}