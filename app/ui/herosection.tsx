//import Image from "next/image";


const HeroSection = () => {
    return (
      <section className="mt-5 mx-10 relative bg-gradient-to-r from-blue-500 to-teal-500 text-white h-96 flex items-center justify-center rounded">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/hero.png')]">
        </div>
        <div className="relative z-10 text-center px-4 sm:px-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
            Welcome to Our Website!
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            We provide exceptional services to help your business grow. Explore our offerings.
          </p>
          <a href="#services" className="inline-block bg-white text-blue-500 py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition duration-300">
            Get Started
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;