
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { solutionsData } from '../data/solutions';

const SolutionDetail = () => {
  const { solutionName } = useParams();
  const solution = solutionsData.find(s => s.name.toLowerCase().replace(/ /g, '-') === solutionName);

  if (!solution) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto py-20 px-4 md:px-20">
          <h1 className="text-4xl font-bold">Solution not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="relative bg-black text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${solution.image})` }}
        ></div>
        <div className="relative container mx-auto py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src={solution.logo} alt={`${solution.name} logo`} className="w-32 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold">{solution.title}</h1>
            <p className="mt-4 text-lg md:text-xl">
              {solution.description}
            </p>
          </div>
          <div className="md:w-1/2">
            {/* You can add an image or illustration here if you have one */}
          </div>
        </div>
      </div>

      <div className="bg-orange-500 text-white">
        <div className="container mx-auto py-12 px-4 md:px-20 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold text-center md:text-left">Want to know more about {solution.name}?</h2>
          <a 
            href="#" 
            className="mt-6 md:mt-0 bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all duration-300 ease-in-out flex items-center gap-2"
          >
            Download Brochure
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SolutionDetail;
