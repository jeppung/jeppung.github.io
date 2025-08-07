import { useState } from "react";
import SocialMediaList from "./SocialMediaList";
import TechStack from "./TechStack";

const Profile = () => {
  const [isProfileHovered, setIsProfileHovered] = useState<boolean>(false);

  return (
    <div className="relative -top-10">
      <div className="flex flex-col items-center">
        <div
          className="flex flex-col items-center"
          onMouseEnter={() => setIsProfileHovered(true)}
          onMouseLeave={() => setIsProfileHovered(false)}
        >
          <TechStack isShowed={isProfileHovered} />
          <div className="relative">
            <img
              src="/memoji.webp"
              className="text-center relative -bottom-5 z-0 pointer-events-none select-none"
              draggable={false}
              width={166}
              height={209}
              alt="memoji"
            />
            <div className="h-full -bottom-5 w-full absolute z-10 bg-linear-to-t from-[#000000] from-5% to-transparent mask-[url(/memoji.webp)]" />
          </div>
        </div>
        <div className="text-center z-20">
          <h1 className="text-4xl font-semibold">JEPPUNG</h1>
          <p className="text-sm mt-1">Frontend Engineer | Software Engineer</p>
          <div className="mt-4">
            <SocialMediaList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
