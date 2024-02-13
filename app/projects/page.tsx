"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { TabsContent } from "@radix-ui/react-tabs";

const projectData = [
  // {
  //   image: "/work/3.png",
  //   category: "react js",
  //   name: "Nexa Website",
  //   description:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laudantium incidunt quis maxime facere possimus ullam nisi numquam quisquam voluptas consequatur voluptatum corrupti, fugiat eius! Voluptates amet pariatur quo ipsum?",
  //   link: "/",
  //   github: "/",
  // },
  {
    image: "/",
    category: "full stack",
    name: "Online Auction Portal",
    description:"Revolutionize auctions with our ReactJS & NestJS-powered app. Leveraging microservices & Redis for seamless bidding & management. Experience innovation in real-time!",
    link: "/",
    github: "/",
  },
  {
    image: "/",
    category: "express js",
    name: "Crime Prediction & Reporting Portal",
    description:
      "Empowering citizens to report and track crimes nationwide. Our platform offers seamless crime registration and utilizes machine learning for predictive analysis. Access cluster maps and anticipate crime rates based on Indian Penal Code and Special & Local Laws",
    link: "/",
    github: "https://github.com/SiddhantPawar03/crime-prediction-reporting-system",
  },
  {
    image: "/work/1.png",
    category: "express js",
    name: "QuestForge",
    description:
      "Effortlessly generate custom question papers across subjects with topic-based selection. Set marks distribution and save papers for easy access.",
    link: "/",
    github: "https://github.com/SiddhantPawar03/QuestForge",
  },
  {
    image: "/work/1.png",
    category: "full stack",
    name: "Virtual Hospital Management System",
    description:"Virtual Hospital Management System: Connect patients with preferred doctors seamlessly on one platform for efficient healthcare access.",
    link: "/",
    github: "https://github.com/SiddhantPawar03/virtual-hospital-management-system",
  },
  {
    image: "/work/1.png",
    category: "express js",
    name: "Blog Website",
    description:"Discover and publish blogs effortlessly on our platform. Access previous posts and contribute your own content seamlessly.",
    link: "/",
    github: "https://github.com/SiddhantPawar03/blog-website",
  },
  {
    image: "/work/2.png",
    category: "express js",
    name: "To-do list",
    description:"Effortlessly manage tasks with our intuitive to-do list platform. Stay organized, track progress, and accomplish goals with ease.",
    link: "/",
    github: "https://github.com/SiddhantPawar03/todolist-v1",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}/>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
