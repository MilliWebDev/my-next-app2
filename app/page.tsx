//import Image from "next/image";
//import Link from 'next/link';
import NavLinks from "./ui/nav-links";
import Card from "./ui/card";


export default function Home() {

  return (
    <>
    <div className="h-screen w-screen">
     <header>
      <NavLinks />
      </header>
      <main>
      <section id="maincards">
        <div className="w-screen p-5 gap-5 flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
       
      </main>
    </div>
    </>
  );
}
