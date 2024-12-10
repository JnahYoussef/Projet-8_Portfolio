"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import  { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: "(+33) 7 67 44 66 52",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: "jnah.youssf@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Addresse",
    content: "Paris, France",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 1, duration: 0.4, ease: "easeIn"}}} 
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form action="https://submit-form.com/Liltai6Jd" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">Travaillons ensemble</h3>
              <p className="text-white/60">N&apos;hésitez pas à me contacter, je suis ouvert à toute opportunité de travail qui correspond à mes compétences et à mes intérêts.</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Nom" />
                <Input type="text" placeholder="Prénom" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Téléphone" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="séléctionner un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>séléctionner un service</SelectLabel>
                    <SelectItem value="website">Site web</SelectItem>
                    <SelectItem value="application">Application mobile</SelectItem>
                    <SelectItem value="seo">SEO et Accessibilité</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[100px]" placeholder="Ecrivez votre message" />
              {/* button */}
              <Button  size="md" className="max-w-40">Envoyer</Button>
            </form>
          </div>
          {/* contact info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.content}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;