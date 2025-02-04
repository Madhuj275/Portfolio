import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-4xl font-bold text-blue-800 mb-5">About Me</h1>
        <p className="text-gray-800 leading-relaxed">
          Welcome! I’m <strong className="text-blue-600">Madhuj Agrawal</strong>, a third-year BTech student at <strong className="text-blue-600">Ramdeobaba University (RBU)</strong>, specializing in <strong className="text-blue-600">Computer Science and Engineering</strong>. My journey began with a passion for <strong className="text-blue-600">Backend development</strong>, which has evolved into a comprehensive skill set.
        </p>
        <p className="text-gray-800 leading-relaxed pt-3">
          I am proficient in <strong className="text-red-600">C and C++</strong> for data structures and algorithms, actively enhancing my <strong className="text-green-600">backend skills</strong> and experienced with <strong className="text-purple-600"> Python</strong>. I am dedicated to solving complex problems and delivering efficient solutions.
        </p>
        

        <hr className="my-6 border-t-2 border-gray-400" />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3 flex items-center"><FaGraduationCap className="mr-2" /> Education & Training</h2>
          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li><strong className="text-blue-600">BTech</strong>, Ramdeobaba University, 2026</li>
            <li><strong className="text-blue-600">Computer Science and Engineering</strong>, Ramdeobaba University, 2026</li>
          </ul>
        </div>

        <hr className="my-6 border-t-2 border-gray-400" />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3 flex items-center"><FaBriefcase className="mr-2" /> Skills and Expertise</h2>
          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li><strong className="text-red-600">Languages:  C/C++, Python,Java, JavaScript, R , HTML+CSS, Solidity</strong></li>
            <li><strong className="text-red-600">Libraries: C++ STL, Python Libraries for ML (e.g., PyTorch, OpenCV, CatBoost), ReactJS</strong></li>
            <li><strong className="text-red-600">Web Dev Tools: Node.js, VSCode, Git, GitHub</strong></li>
            <li><strong className="text-red-600">Relevant Coursework: Data Structures & Algorithms, OS, OOPS, DBMS, Software Engineering,Blockchain</strong></li>
            <li><strong className="text-red-600">Soft Skills: Effective Communication, Presentation, Public Speaking,Teamwork</strong></li>
          </ul>
        </div>

        {/* <hr className="my-6 border-t-2 border-gray-400" /> */}

        {/* <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3"><FaBriefcase className="mr-2" /> Professional Experience</h2>
          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li>Various projects (details pending).</li>
            <li>Internship at (Company Name).</li>
            <li>Developed (specific skills or products).</li>
          </ul>
        </div> */}

        {/* <hr className="my-6 border-t-2 border-gray-400" />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Mission Statement</h2>
          <p className="text-gray-800 leading-relaxed">
            My mission is to leverage my technical skills to create impactful solutions, continuously learn, and exceed expectations through innovative problem-solving and collaboration.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default About;
