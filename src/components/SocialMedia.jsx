import Link from "next/link";
import clsx from "clsx";
import { BsTwitter, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const HuggingFaceIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zM9 9.75a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 9 9.75zm6 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm-8 5.5h10a.5.5 0 0 1 .4.8C16.4 17.5 14.3 18.75 12 18.75s-4.4-1.25-5.4-2.7a.5.5 0 0 1 .4-.8z" />
  </svg>
);

export const SocialMediaProfiles = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/swarim-abdussamad",
    icon: BsLinkedin,
  },
  {
    title: "Instagram",
    href: "https://instagram.com/swarimkt",
    icon: BsInstagram,
  },
  {
    title: "X",
    href: "https://x.com/swarimkt",
    icon: BsTwitter,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/swarim.abdussamad",
    icon: BsFacebook,
  },
  {
    title: "Hugging Face",
    href: "https://huggingface.co/SWARIM",
    icon: HuggingFaceIcon,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
