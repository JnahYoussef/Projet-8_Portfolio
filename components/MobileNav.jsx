"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { DialogTitle, Description } from "@radix-ui/react-dialog";

const links = [
    {
        name: "Accueil",
        path: "/"
    },
    {
        name: "A propos",
        path: "/about"
    },
    {
        name: "Projets",
        path: "/projects"
    },
    {
        name: "Contact",
        path: "/contact"
    }
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Titre obligatoire pour l'accessibilité */}
                <DialogTitle className="sr-only">Menu de navigation</DialogTitle>
                
                {/* Description pour l'accessibilité */}
                <Description className="sr-only"> Utilisez ce menu pour naviguer entre les sections principales de l&apos;application.</Description>

                {/*logo */}
                <div className="mt-32 mb-40 text-center texte-2xl">
                    <Link href={"/"}>
                        <h1 className="text-4xl font-semibold">
                            Youssef<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/*navigation */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transation-all`}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;