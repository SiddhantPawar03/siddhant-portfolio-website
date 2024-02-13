"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

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
    category: "react js, nest js, redis",
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
    category: "php",
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
    <div className="container mx-auto">
      <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
        <h2 className="section-title mb-4">Latest Projects</h2>
        <p className="subtitle mb-8">Explore our latest projects, showcasing innovation and expertise. Stay updated on our cutting-edge endeavors driving impact and change.</p>
        <Link href='/projects'>
            <Button>All Projects</Button>
        </Link>
      </div>
      <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
        <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
            640: {
                slidesPerView: 2,
            },
        }}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{clickable: true}}
        >
            {projectData.slice(0,4).map((project, index) => {
                return (
                    <SwiperSlide key={index}>
                        <ProjectCard project={project}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
      </div>
    </div>
    </section>
  );
};

export default Work;
