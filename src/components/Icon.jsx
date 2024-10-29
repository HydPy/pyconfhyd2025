import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdVolunteerActivism } from 'react-icons/md';

const icons = {
  Facebook: FaFacebook,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  X: FaXTwitter,
  HamburgerMenu: GiHamburgerMenu,
  VolunteerActivism: MdVolunteerActivism,
};

export const Icon = ({ name, size = 36, className = '', padding = 0 }) => {
  const ReactIcon = icons[name];
  const iconProps = {
    size: size,
    className: className,
    style: {
      padding: padding,
    },
  };

  return <ReactIcon {...iconProps} />;
};

export default Icon;
