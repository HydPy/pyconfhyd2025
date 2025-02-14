import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Heading, Paragraph } from "./Typography";
import Link from "next/link";
import Icon from "./Icon";

export default function Volunteer({ volunteer }) {
  const { name, imgUrl, imgAlt, role, socials } = volunteer;
  
  return (
    <div className="flex flex-row p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md gap-4 shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
      {/* Avatar on left */}
      <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden flex-shrink-0">
        <Image
          className="object-cover"
          src={imgUrl}
          alt={imgAlt}
          fill={true}
          priority
        />
      </div>

      {/* Content on right */}
      <div className="flex flex-col flex-grow">
        <Heading
          tagLevel={5}
          level={5}
          className="text-xl font-semibold text-secondary-600 dark:text-secondary-400"
        >
          {name}
        </Heading>
        <Paragraph className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {role}
        </Paragraph>
        
        {/* Social Icons */}
        {socials && (
          <div className="py-4 flex flex-wrap gap-5">
            {socials.map((social, index) => (
              <Link
                key={index}
                className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50 mr-1"
                href={social.url}
                target="_blank"
                aria-label={social.ariaLabel}
                rel="noopener noreferrer"
              >
                <Icon name={social.name} size={25} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}