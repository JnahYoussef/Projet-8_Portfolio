import { motion } from "framer-motion";

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculer l'indice inverse pour le retard décalé
const reverseIndex = (index) => {
    const totalSteps = 6; 
    return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
        {/* rendu de 6 divs de mouvement, chacun représentant une étape de l'escalier.
        Chaque div aura la même animation définie par l'objet stairAnimation.
        Le délai de chaque div est calculé dynamiquement en fonction de son index relatif, créant un effet de décalage avec un délai décroissant pour chaque étape suivante.
        */}
        {[...Array(6)].map((_, index) => {
            return (
                <motion.div 
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration: 0.4, ease: "easeInOut", delay: reverseIndex(index) * 0.1,}}
                    className="h-full w-full bg-white relative"
                />
            );
        })}
    </>
  );
}

export default Stairs;