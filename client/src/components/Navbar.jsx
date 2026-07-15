import { FaRobot } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-6">
      <div className="flex items-center gap-3">
        <FaRobot className="text-3xl text-cyan-400" />
        <h1 className="text-2xl font-bold">
          SkillForge <span className="text-cyan-400">AI</span>
        </h1>
      </div>

      <div className="flex gap-8 text-gray-300">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Dashboard</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}