"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";


import WorkSliderBtns from "@/components/WorkSliderBtns";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiNotion } from "react-icons/si";
import { TbSeo, TbLayoutKanban } from "react-icons/tb";
import { DiScrum } from "react-icons/di";

const stackIcons = {
  "Html 5": <FaHtml5 className="text-4xl" />,
  "Css 3": <FaCss3 className="text-4xl" />,
  "Javascript": <FaJs className="text-4xl" />,
  "React": <FaReact className="text-4xl" />,
  "Node.js": <FaNodeJs className="text-4xl" />,
  "Sass": <FaSass className="text-4xl" />,
  "Next": <SiNextdotjs className="text-4xl" />,
  "MongoDB": <SiMongodb className="text-4xl" />,
  "Express": <SiExpress className="text-4xl" />,
  "Tailwind.css": <SiTailwindcss className="text-4xl" />,
  "SEO": <TbSeo className="text-4xl" />,
  "Notion": <SiNotion className="text-4xl" />,
  "Kanban": <TbLayoutKanban className="text-4xl" />,
  "Agile": <DiScrum className="text-4xl" />,
};

const works = [
  {
    num: '01',
    category: 'Frontend',
    title: "Booki",
    description: "Créer la page d'accueil d'une agence de voyage.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/work/Booki.webp",
    live: "https://jnahyoussef.github.io/Projet-2_Booki/",
    github: "https://github.com/JnahYoussef/Projet-2_Booki.git",
  },
  {
    num: '02',
    category: 'Frontend',
    title: "Sophie Bluel",
    description: "Créer une page web dynamique du portfolio d’une architecte d’intérieur.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/Sophie_Bluel.webp",
    live: "https://jnahyoussef.github.io/Projet_3_Sophie-Bluel/",
    github: "https://github.com/JnahYoussef/Projet_3_Sophie-Bluel.git",
  },
  {
    num: '03',
    category: 'Frontend',
    title: "Nina Carducci",
    description: "Optimiser le référencement d'un site de photographe.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "SEO" }, { name: "Accessibilité" }],
    image: "/assets/work/Nina_Carducci.webp",
    live: "https://jnahyoussef.github.io/Projet_4_Nina-Carducci/",
    github: "https://github.com/JnahYoussef/Projet_4_Nina-Carducci.git",
  },
  {
    num: '04',
    category: 'Frontend',
    title: "Kasa",
    description: "Créer une application web de location immobilière.",
    stack: [{ name: "Html 5" }, { name: "Javascript" }, { name: "React" }, { name: "Node.js" }, { name: "Sass" }],
    image: "/assets/work/Kasa.webp",
    live: "",
    github: "https://github.com/JnahYoussef/Projet-5_Kasa.git",
  },
  {
    num: '05',
    category: 'Backend',
    title: "Mon Vieux Grimoire",
    description: "Développer le back-end d'un site de notation de livres.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
    image: "/assets/work/Mon_Vieux_Grimoire.webp",
    live: "",
    github: "https://github.com/JnahYoussef/P6_Mon-Vieux-Grimoire.git",
  },
  {
    num: '06',
    category: 'Gestion de projets',
    title: "Menu Maker by Qwenta",
    description: "Planifier le développement d'un site de création de menus de restaurants.",
    stack: [ { name: "Notion" }, { name: "Kanban" }, { name: "Agile" }],
    image: "/assets/work/Menu_Maker_by_Qwenta.webp",
    live: "",
    github: "https://github.com/JnahYoussef/Projet_7_Gestion_de_projet.git",
  },
  {
    num: '07',
    category: 'Frontend',
    title: "Portfolio",
    description: "Créer et publier mon portfolio de développeur.",
    stack: [ { name: "Next"}, { name: "Tailwind.css" }, { name: "React" }, { name: "Node.js" }],
    image: "/assets/work/portfolio.webp",
    live: "",
    github: "https://github.com/JnahYoussef/Projet_8_Portfolio.git",
  },
];

const Projects = () => {
  const [work, setWork] = useState(works[0]);

  const handleSlideChange = (swiper) => {
    //obtenir l'index de la diapositive active
    const currentIndex = swiper.activeIndex;
    // mettre à jour le projet on se basant sur l'index de la diapositive active
    setWork(works[currentIndex]);
  };
  
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 1, duration: 0.4, ease: "easeIn"}}} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {work.num}
              </div>
              {/* project title */}
              <h2 className="text-5xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {work.title}
              </h2>
              {/* project description */}
              <p className="text-[18px] text-white/60">
                {work.description}
              </p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {work.stack.map((item, index) => (
                  <li key={index} className="text-2xl text-accent">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger>
                          {/* Affichage de l'icône avec le tooltip */}
                          <div className="flex items-center justify-center">
                            {stackIcons[item.name] || item.name}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>{item.name}</TooltipContent> {/* Nom de la stack */}
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>

              {/*border*/}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live prject button*/}
                {work.live && (                 //afficher l'icon si le lien existe
                  <Link href={work.live} target="_blank" rel="noopener noreferrer"> {/* ouvrir le lien dans un nouvel onglet */}
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Démo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github prject button*/}
                <Link href={work.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {works.map((work, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/5 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={work.image} 
                          fill 
                          className="object-cover object-top" 
                          alt={work.title} 
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons*/}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
);
}

export default Projects;