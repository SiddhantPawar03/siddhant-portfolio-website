import React from 'react';
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Trophy,
} from "lucide-react";

interface Qualification {
    title?: string;
    data?: Array<any>; 
}

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Siddhant Pawar",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91-762088****",
  },
  {
    icon: <MailIcon size={20} />,
    text: "siddhantpawar1203@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 12 Jan, 2003",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Tech in Computer Engineering (2024)",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Pune, India",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Vishwakarma Institute of Technology",
        qualification: "Bachelors of Technology",
        years: "2020 - Current",
      },
      {
        university: "Dr. Kalmadi Shamarao High School",
        qualification: "High School",
        years: "2018 - 2020",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Red Hat",
        role: "Software Engineer Intern",
        years: "Jan 2024 - Current",
      },
      {
        company: "Flytbase",
        role: "Software Development Engineer Intern",
        years: "Jul 2023 - Jan 2024",
      },
      {
        company: "EasyGold Pvt. Ltd.",
        role: "Full Stack Developer Intern",
        years: "May 2023 - Jun 2023",
      },
      {
        company: "The Robotics Forum",
        role: "Machine Learning Researcher",
        years: "Jul 2023 - Jan 2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, Tailwind CSS",
      },
      {
        name: "Full-Stack Developer, Front-end/Back-end Development",
      },
      {
        name: "Javascript, Typescript, PHP",
      },
      {
        name: "SQL, No-SQL Database, Redis",
      },
      {
        name: "React JS, Angular 16",
      },
      {
        name: "Express JS, Nest JS",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      // {
      //   imgPath: "/about/wordpress.svg",
      // },
    ],
  },
];

const achievementData = [
  {
    title: "hackathon",
    data: [
      {
        name: "Smart India Hackathon",
        year: "2022",
        desc: "Secured rank 1 among 50+ national level participants & 100+ college level participants"
      },
      {
        name: "Binance Hackathon",
        year: "2022",
        desc: "Secured rank 1 among 250+ national level participants",
      },
      {
        name: "IEEE Hackathon",
        year: "2022",
        desc: "Secured 2nd rank among 150+ national level participants",
      },
      {
        name: "WCE Hackathon",
        year: "2022",
        desc: "Secured rank 1 among 250+ national level participants",
      },
    ],
  },
  {
    title: "open-source",
    data: [
      {
        name: "GirlScript Summer of Code",
        year: "2023",
        desc: "Mentored more than 50+ active participants & reviewed more than 300+ pull requests",
      },
      {
        name: "Hack Club RAIT",
        year: "2022",
        desc: "Designated as Project Admin",
      },
      {
        name: "GirlScript Summer of Code",
        year: "2022",
        desc: "Secured rank 1 for following repositorie & secured to be among 100/8k participants",
      },
    ],
  },
];

const About = () => {
    const getData = (arr: { title: string }[], title: string) => {
        return arr.find((item) => item.title === title);
    };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/hero/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              
              <TabsList className="w-full flex flex-wrap justify-center xl:grid xl:grid-cols-3xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="achievements">
                  Achievements
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Ready to deliver unmatched service quality from day one!</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">Self-motivated individual and driven technology professional with comprehensive accomplishments. Demonstrated success developing and seamlessly executing plans in complex organizational structures. Skilled in Communication, Problem Solving, Leadership, Team Management, C++ (Programming Language) and Python (Programming Language). Strong engineering professional with a Bachelor of Technology - BTech focused in Computer Engineering from Vishwakarma Institute Of Technology.</p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                        {infoData.map((item,index)=> {
                            return (
                                <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                    <div className="text-primary">{item.icon}</div>
                                    <div>{item.text}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="text-primary">Language Skill</div>
                        <div className="border-b border-border"></div>
                        <div>English, Hindi, Marathi</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                        <div className="flex flex-col gap-y-6">
                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                <Briefcase />
                                <h4 className="capitalize font-medium">
                                    {getData(qualificationData, 'experience')?.title}
                                </h4>
                            </div>
                            <div className="flex flex-col gap-y-8">
                                {getData(qualificationData, 'experience')?.data.map((item,index) => {
                                    const {company, role, years} = item;
                                    return (
                                        <div className="flex gap-x-8 group" key={index}>
                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                <div className="text-base font-medium">{years}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                <GraduationCap size={28} />
                                <h4 className="capitalize font-medium">
                                    {getData(qualificationData, 'education')?.title}
                                </h4>
                            </div>
                            <div className="flex flex-col gap-y-8">
                                {getData(qualificationData, 'education')?.data.map((item,index) => {
                                    const {university, qualification , years} = item;
                                    return (
                                        <div className="flex gap-x-8 group" key={index}>
                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                <div className="text-base font-medium">{years}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                    <div className="text-center xl:text-left">
                        <h3 className="h3 mb-8">What I Use Everyday</h3>

                        <div className="mb-16">
                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                            <div className="border-b border-border mb-4"></div>
                            <div>
                                {getData(skillData, 'skills')?.data.map((item,index) => {
                                    const {name} = item;
                                    return (
                                        <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                            <div className="font-medium">{name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                            <div className="border-b border-border mb-4"></div>
                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                {getData(skillData, 'tools')?.data.map((item,index) => {
                                    const {imgPath} = item;
                                    return (
                                        <div key={index}>
                                            <Image 
                                                src={imgPath}
                                                width={48}
                                                height={48}
                                                alt=''
                                                priority
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="achievements">
  <div>
    <h3 className="h3 mb-8 text-center xl:text-left">My Achievements</h3>
    <div className="grid md:grid-cols-2 gap-y-8">
      {achievementData.map((achievement, index) => (
        <div key={index} className="flex flex-col gap-y-6">
          <div className="flex gap-x-4 items-center text-[22px] text-primary">
            <Trophy />
            <h4 className="capitalize font-medium">{achievement.title}</h4>
          </div>
          <div className="flex flex-col gap-y-8">
            {achievement.data.map((item, index) => (
              <div key={index} className="flex gap-x-8 group">
                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                </div>
                <div>
                  <div className="font-semibold text-xl leading-none mb-2">{item.name}</div>
                  <div className="text-lg leading-none text-muted-foreground mb-4">{item.year}</div>
                  <div className="text-base font-medium">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</TabsContent>

              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
