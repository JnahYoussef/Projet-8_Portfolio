import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/*logo */ }
            <Link href={"/"}>
                <h1 className="text-4xl font-semibold">
                    Youssef<span className="text-accent">.</span>
                </h1>
            </Link>

            {/*desktop navigation & hire me button*/}
            <div className="hidden xl:flex">
                <Nav />
                <Link href={"/contact"}>
                        <Button className="ml-4">Contactez moi</Button>   
                </Link>
            </div>

            {/*mobile navigation */}
            <div className="xl:hidden">mobile nav</div>
        </div>
    </header>
    );
};

export default Header;