"use client";

import { useState } from "react"; // Importer useState pour gérer l'état du formulaire
import axios from "axios"; // Importer axios pour envoyer les requêtes HTTP
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://submit-form.com/Liltai6Jd', formData);

      if (response.status === 200) {
        setStatus("Message envoyé avec succès !");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" }); // Réinitialiser le formulaire
      }
    } catch (error) {
      setStatus("Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 1, duration: 0.4, ease: "easeIn"}}} 
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulaire */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">Travaillons ensemble</h3>
              <p className="text-white/60">N&apos;hésitez pas à me contacter, je suis ouvert à toute opportunité de travail qui correspond à mes compétences et à mes intérêts.</p>
              {/* Champs du formulaire */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="sr-only" htmlFor="firstName">Nom</label>
                <Input 
                  type="text" 
                  placeholder="Nom" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                />
                <label className="sr-only" htmlFor="lastName">Prénom</label>
                <Input 
                  type="text" 
                  placeholder="Prénom" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                />
                <label className="sr-only" htmlFor="email">Email</label>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                />
                <label className="sr-only" htmlFor="phone">Téléphone</label>
                <Input 
                  type="tel" 
                  placeholder="Téléphone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>
              {/* Select Service */}
              <Select value={formData.service} onChange={(value) => setFormData({ ...formData, service: value })}>
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
              {/* Message */}
              <label className="sr-only" htmlFor="message">Message</label>
              <Textarea 
                className="h-[100px]" 
                placeholder="Ecrivez votre message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
              />
              {/* Button */}
              <Button type="submit" size="md" className="max-w-40">Envoyer</Button>
              {status && <p className="text-center mt-4 text-white">{status}</p>}
            </form>
          </div>

          {/* Contact Info */}
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
};

export default Contact;
