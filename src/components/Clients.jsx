import logo0 from "../assets/images/logo/logo-0.png";
import logo1 from "../assets/images/logo/logo-1.png";
import logo2 from "../assets/images/logo/logo-2.png";
import logo3 from "../assets/images/logo/logo-3.png";
import logo4 from "../assets/images/logo/logo-4.png";
import logo5 from "../assets/images/logo/logo-5.png";
import logo6 from "../assets/images/logo/logo-6.png";
import logo7 from "../assets/images/logo/logo-7.png";

const clients = [
  { logo: logo0, name: "Client 1" },
  { logo: logo1, name: "Client 2" },
  { logo: logo2, name: "Client 3" },
  { logo: logo3, name: "Client 4" },
  { logo: logo4, name: "Client 5" },
  { logo: logo5, name: "Client 6" },
  { logo: logo6, name: "Client 7" },
  { logo: logo7, name: "Client 8" }
];

const Clients = () => (
  <section className="bg-gray-100 py-12 md:py-24 text-left px-6 md:px-16 flex flex-col md:flex-row w-full justify-between" id="clients">
    <div className="mb-8 md:max-w-[30vw]">
      <h2 className="text-5xl font-semibold text-[#1a2536] mb-2">Clients and partners we’ve helped</h2>
      <p className="text-lg text-semibold text-gray-500">Across industries and regions, empowering their growth with AI and ICT innovation.</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
      {clients.map((client, i) => (
        <img
          src={client.logo}
            alt={client.name}
            key={i}
            className="h-24 w-full p-2 object-scale-down grayscale hover:grayscale-0 transition duration-300"
        />
      ))}
    </div>
  </section>
);

export default Clients;
