import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="min-w-screen min-h-screen text-slate-200 flex justify-center items-center">
      <div className="flex flex-col items-center relative -top-10">
        <div className="relative">
          <img
            src="/memoji.webp"
            className="text-center relative -bottom-5 z-0 pointer-events-none select-none"
            draggable={false}
            alt="memoji"
          />
          <div className="h-full -bottom-5 w-full absolute z-10 bg-linear-to-t from-[#242424] from-5% to-transparent" />
        </div>
        <div className="text-center z-20">
          <h1 className="text-4xl font-semibold">JEPPUNG</h1>
          <p className="text-sm mt-1">Frontend Engineer | Software Engineer</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <a
              target="_blank"
              aria-label="linkedin"
              href="https://linkedin.com/in/jeppung"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              target="_blank"
              aria-label="github"
              href="https://github.com/jeppung"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
