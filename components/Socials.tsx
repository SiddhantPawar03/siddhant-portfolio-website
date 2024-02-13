"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const icons = [
  {
    path: "https://www.linkedin.com/in/siddhant-pawar-398a05201/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/SiddhantPawar03",
    name: <RiGithubFill />,
  },
  {
    path: "https://twitter.com/SiddhantP03",
    name: <RiTwitterFill />,
  },
  // {
  //   path: "/",
  //   name: <Ri />,
  // },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target='_blank'>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
