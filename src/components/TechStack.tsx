import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const TechStack = ({ isShowed }: { isShowed: boolean }) => {
  return (
    <div
      className={`absolute -top-[20%] transition-all ${
        isShowed ? "scale-100" : "scale-0"
      }`}
    >
      <div className="w-fit h-16 rounded-3xl bg-black border-2 border-[#242424] p-5 flex items-center gap-3 transition-all relative z-10">
        <RiTailwindCssFill
          size={30}
          className="transition-all hover:w-14 hover:scale-150"
        />
        <RiReactjsFill
          size={30}
          className="transition-all hover:w-14 hover:scale-150"
        />
        <RiNextjsFill
          size={30}
          className="transition-all hover:w-14 hover:scale-150"
        />
        <SiTypescript
          size={22}
          className="transition-all hover:w-14 hover:scale-150"
        />
      </div>
      <div className="w-full h-2 flex justify-center relative">
        <div className="w-5 h-5 bg-black rotate-45 -top-[150%] absolute border-2 border-[#242424] border-t-transparent border-l-transparent z-50" />
      </div>
    </div>
  );
};

export default TechStack;
