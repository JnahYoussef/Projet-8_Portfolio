
import { FaGithub, FaLinkedinIn, } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/JnahYoussef"},
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/youssef-jnah-3926951b8/"},
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
       {socials.map((item, index) => (
        <a
          href={item.path}
          key={index}
          target="_blank"
          rel="noopener noreferrer" // Renforce la sécurité
          className={iconStyles}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default Socials;