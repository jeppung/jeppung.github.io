import { FaGithub, FaLinkedin } from "react-icons/fa6";

const SocialMediaList = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <a
        target="_blank"
        aria-label="linkedin"
        href="https://linkedin.com/in/jeppung"
      >
        <FaLinkedin size={30} />
      </a>
      <a target="_blank" aria-label="github" href="https://github.com/jeppung">
        <FaGithub size={30} />
      </a>
    </div>
  );
};

export default SocialMediaList;
