import Image from "next/image";

const Card = () => {
    return (
      <div className={`mt-2 w-[100vw] h-50 rounded flex flex-col flex-wrap items-center shadow-lg transform transition duration-300 hover:scale-105 `}>
        <div>
        <Image
        src="/articles/shoes.png"
        width={200}
        height={200}
        alt="Screenshots of the dashboard project showing desktop version"
        className={` mt-5`}  
          />
        </div>
        <div>
          <p>Casquette</p>
        </div>
        <div>
          <p>25000</p>
        </div>
      </div>
    );
  };
  
  export default Card;