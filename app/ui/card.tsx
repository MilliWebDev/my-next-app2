

const Card = () => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Love</h2>
          <p className="text-gray-600 mb-4">Gotta try again</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Learn More
          </button>
        </div>
      </div>
    );
  };
  
  export default Card;