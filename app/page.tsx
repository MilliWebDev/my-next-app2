//import Image from "next/image";
//import Link from 'next/link';
import NavLinks from "./ui/nav-links";
import Card from "./ui/card";
//import Create from "./ui/background";
import Image from "next/image";

export default function Home() {

  return (
    <>
    <div className="h-screen w-screen overflow-x-hidden bg-slate-100">
     <header className="w-screen">
      <NavLinks />
      </header>
      <main>
      <section id="featureditems" className="mt-5">
        <div className="w-full p-2 gap-5 flex justify-around">
          <div className="flex items-center">
            <div>
              <Image src="/icons/delivery.svg" alt="alt" width={80} height={80} />
            </div>
            <div>
              <p>Livraison rapide</p>
            </div>
            
          </div>
          <div className="flex items-center">
            <div>
              <Image src="/icons/time.svg" alt="alt" width={80} height={80} />
            </div>
            <div>
              <p>Livraison à temps</p>
            </div>
            
          </div>

          <div className="flex items-center">
            <div>
              <Image src="/icons/products.svg" alt="alt" width={80} height={80} />
            </div>
            <div>
              <p>Produits de qualités</p>
            </div>
            </div>

            <div className="flex items-center">
            <div>
              <Image src="/icons/energy.svg" alt="alt" width={80} height={80} />
            </div>
            <div>
              <p>De nouveaux produits</p>
            </div>
            </div>

            <div className="flex items-center">
            <div>
              <Image src="/icons/saving.svg" alt="alt" width={80} height={80} />
            </div>
            <div>
              <p>Economisez sur vos achats</p>
            </div>
            </div>
        </div>
      </section>
      <section id="lessfavorites" className="w-full h-[500px] grid grid-cols-2  my-5 shadow-lg">
        <div className="flex justify-center items-center border border-red-700 mr-5 ">
          <div className="border border-fuchsia-600">
          <Image
                   src="/articles/shoes.png"
                   width={200}
                   height={200}
                   alt="Screenshots of the dashboard project showing desktop version"
                   className={` mt-5`}  
                     />
          </div>
          <div>
            <p>I am testing my skills</p>
            <p>I am testing my skills</p>
            <p>I am testing my skills</p>
            <p>I am testing my skills</p>
          </div>
           
        </div>

        <div className="flex justify-center items-center border border-blue-800">
           <div>
           <Image
                   src="/articles/shoes.png"
                   width={200}
                   height={200}
                   alt="Screenshots of the dashboard project showing desktop version"
                   className={` mt-5`}  
                     />
           </div>
        </div>
      </section>
      </main>
    </div>
    </>
  );
}
