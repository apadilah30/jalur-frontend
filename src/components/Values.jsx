import React from "react";
// Tailwind migration: import CSS dihapus
import iconBrain from '../assets/images/logo/icon-brain-white.png';
import iconPlug from '../assets/images/logo/icon-plug-white.png';
import iconGlobe from '../assets/images/logo/icon-globe-white.png';

const values = [
  {
    title: "Strategic Collaboration with Sentienta",
    desc: "This partnership strengthens JALUR's credibility on a global scale. By highlighting the direct collaboration with Sentienta's European experts, clients gain confidence that JALUR solutions are backed.",
    icon: iconBrain
  },
  {
    title: "Comprehensive AI & ICT Integration",
    desc: "Unlike many providers who focus solely on AI or ICT, JALUR delivers both in one seamless package. This ensures smarter, more efficient, and scalable solutions tailored to modern enterprises and organizations.",
    icon: iconPlug
  },
  {
    title: "Global, Flexible, and Future-Ready Solutions",
    desc: "By emphasizing 'future-ready', JALUR positions itself as a long-term technology partner — not just a project vendor. Clients can rely on solutions that are globally competitive and adaptable to tomorrow's challenges.",
    icon: iconGlobe
  },
];


const Values = () => (
  <section className="bg-white py-16 flex flex-col items-center">
    <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-6 md:px-6 w-full max-w-screen md:max-w-[90vw]">
      <div className="text-left w-full md:w-1/4 md:max-w-1/4">
        <h2 className="text-xl font-bold text-[#010205] mb-2">Our values</h2>
        <h3 className="text-4xl text-[#010205] font-bold mb-8">Why should choose us?</h3>
      </div>
      <div className="text-left w-full md:w-1/4 md:max-w-1/4">
        <p className="text-[#959595]">
          Our values and solutions are constantly aligned with technological advancements to ensure limitless growth.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-screen md:max-w-[90vw] px-3 md:px-6">
      {values.map((v, i) => (
        <div className="block text-white rounded-2xl p-8 md:w-1/3 md:max-w-[100vw] shadow text-left" key={i} style={{ background: 'linear-gradient(194.71deg, #FFAD3B 6.39%, #F28101 89.98%)' }}>
          <div className="mb-8 bg-white bg-opacity-35 rounded-3xl w-fit p-4">
            <img src={v.icon} alt="icon" className="w-12 h-12 text-white opacity-100" />
          </div>
          <h4 className="text-lg font-semibold mb-2">{v.title}</h4>
          <p className="text-base">{v.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Values;
