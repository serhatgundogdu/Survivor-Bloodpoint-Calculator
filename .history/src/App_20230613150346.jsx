import { useState } from "react";

function App() {
  const [point, setPoint] = useState(32000);

  const [offerings, setOfferings] = useState({
    survivors: [null, null, null, null],
    killer: null,
  });

  const calcPoints = (point) => {
    let lastPoint = point;

    return lastPoint;
  };

  return (
    <div className="container mx-auto mt-8">
      <header className="w-full border-b border-zinc-700 py-3 mb-6">
        <h1 className="text-2xl font-bold">Dead By Daylight BPS Calculator</h1>
      </header>

      <section className="max-w-[500px] mx-auto">
        <input
          value={point}
          onChange={(e) => setPoint(e.target.value)}
          type="number"
          placeholder="Enter your blood point.."
          className="bg-transparent border border-gray-600 rounded-md py-2 px-2 outline-none w-full text-white placeholder:text-gray-400 appearance-none "
        />
      </section>

      <section className="flex-col justify-center">
        <h2 className="text-xl font-bold">Select Offerings</h2>
        <div className="flex gap-2 items-center justify-center">
          {offerings.survivors.map((offering, index) => (
            <img
              src="OfferingsBack.webp"
              alt="offering"
              srcset=""
              className="h-32"
            />
          ))}
        </div>
        <div className="flex gap-2 items-center justify-center">
          {(offerings.killer && (
            <img
              src="OfferingsBack.webp"
              alt="offering"
              srcset=""
              className="h-32"
            />
          )) || (
            <img
              src="OfferingsBack.webp"
              alt="offering"
              srcset=""
              className="h-32"
            />
          )}
        </div>
      </section>
      <section className="flex justify-center ">
        <h3 className="font-semibold ">{calcPoints(point)}</h3>
      </section>
    </div>
  );
}

export default App;
