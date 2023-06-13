import { useState } from "react";

function App() {
  const [offerings, setOfferings] = useState({
    survivors: [null, null, null, null],
    killer: null,
  });

  return (
    <div className="container mx-auto mt-8">
      <header className="w-full border-b border-zinc-700 py-3 mb-6">
        <h1 className="text-2xl font-bold">Dead By Daylight BPS Calculator</h1>
      </header>

      <section className="max-w-[500px]">
        <input
          type="number"
          placeholder="Enter your blood point.."
          className="bg-transparent border border-gray-600 rounded-md py-2 px-2 outline-none w-full text-white placeholder:text-gray-400 appearance-none "
        />
      </section>

      <section>
        <h2 className="text-xl font-bold">Select Offerings</h2>
        <div>
          {offerings.survivors.map((offering, index) => (
            <img src="OfferingsBack.webp" alt="" srcset="" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
