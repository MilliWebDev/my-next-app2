//import Image from "next/image";
//import Link from 'next/link';
import NavLinks from "./ui/nav-links";
import HeroSection from "./ui/herosection";
import Card from "./ui/card";


export default function Home() {

  return (
    <>
    <div className="h-screen ">
     <header>
      <NavLinks />
      <HeroSection />
      </header>
      <main>
        <Card />
      </main>
    </div>
    </>
  );
}
