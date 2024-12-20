import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiOpencv } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:mt-24 mt-12 md:order-1 order-2">
          <span className="text-xl text-gray-600 font-semibold">Welcome To My <strong className="text-gray-700">Portfolio</strong></span>
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-gray-800 pt-3 mt-3">Hi, I am <strong>Madhuj Agrawal</strong></h1>
          </div>
          <div className="flex text-2xl md:text-4xl">
            <h1 className="text-gray-800"> <strong>A passionate</strong></h1>{" "}
            <ReactTyped
              className="text-red-700 font-bold px-1"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={50}
              backSpeed={60}
              loop={true}
            />
          </div>
          <p className="text-gray-800 text-lg mt-3 pt-3">
            I am a <strong>Backend developer</strong> proficient in C/C++ for data structures and algorithms, exploring backend development. My skills in Python enable me to tackle various technical challenges effectively.
          </p>
          <div className="flex space-x-5 py-6 mt-7">
            <div>
              <h1 className="text-xl font-bold text-gray-800">Available On</h1>
              <ul className="flex space-x-5 py-2">
                <li>
                  <a href="https://x.com/madhujsays?t=dMEBcUAM2hlbaJzd6emBNA&s=09" target="_blank">
                    <RiTwitterXLine className="text-2xl  hover:text-blue-600 cursor-pointer hover:scale-110 hover:text-4xl duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/madhuj2705/?hl=en" target="_blank">
                    <FaInstagram className="text-2xl  hover:text-blue-600 cursor-pointer hover:scale-110 hover:text-4xl duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/madhuj-agrawal-8491b328b/" target="_blank">
                    <FaLinkedin className="text-2xl hover:text-blue-600 cursor-pointer hover:scale-110 hover:text-4xl duration-200" />
                  </a>
                </li>
                
              </ul>
            </div>
            
          </div>
        </div>
        <div className="md:w-1/2 md:ml-52 md:mt-20 mt-8 order-1">
          <img src="profile.jpg" className="rounded-full border-r-2 w-[460px] h-[450px]" alt="Manan Daxini" />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Home;