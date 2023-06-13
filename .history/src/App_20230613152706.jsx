import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [point, setPoint] = useState(32000);

  const [offerings, setOfferings] = useState({
    your: null,
    survivors: [null, null, null],
    killer: null,
  });

  const calcPoints = (point) => {
    let lastPoint = point;

    return lastPoint;
  };

  return (
    <>
      <Modal />
      <div className="container mx-auto mt-8">
        <header className="w-full border-b border-zinc-700 py-3 mb-6">
          <h1 className="text-2xl font-bold">
            Dead By Daylight BPS Calculator
          </h1>
        </header>

        <section className="max-w-[500px] mx-auto">
          <input
            value={point}
            onChange={(e) => setPoint(e.target.value)}
            type="number"
            placeholder="Enter your bloodpoint.."
            className="bg-transparent border border-gray-600 rounded-md py-2 px-2 outline-none w-full text-white placeholder:text-gray-400 appearance-none "
          />
        </section>

        <section className="flex-col justify-center mb-10 mt-10">
          <h2 className="text-2xl font-bold text-center mb-4 text-zinc-100">
            Select Offerings
          </h2>
          <div className="flex flex-col gap-2 items-center justify-center mt-2.5 ">
            <h3 className="">Your</h3>
            {(offerings.your && (
              <img
                src="OfferingsBack.webp"
                alt="offering"
                srcset=""
                className="h-20 md:h-32"
              />
            )) || (
              <img
                src="OfferingsBack.webp"
                alt="offering"
                srcset=""
                className="h-20 md:h-32"
              />
            )}
          </div>
          <div className="flex gap-2 items-center justify-center">
            {offerings.survivors.map((offering, index) => (
              <img
                src="OfferingsBack.webp"
                alt="offering"
                srcset=""
                className=" h-20 md:h-32 transform hover:-scale-x-100"
              />
            ))}
          </div>
          <div className="flex gap-2 items-center justify-center mt-2.5 ">
            {(offerings.killer && (
              <img
                src="OfferingsBack.webp"
                alt="offering"
                srcset=""
                className="h-20 md:h-32"
              />
            )) || (
              <img
                src="OfferingsBack.webp"
                alt="offering"
                srcset=""
                className="h-20 md:h-32"
              />
            )}
          </div>
        </section>
        <section className="flex justify-center py-10 border-t border-zinc-700  ">
          <h3 className="font-semibold text-4xl">
            {calcPoints(point) || 0} Bloodpoints
          </h3>
        </section>
      </div>
    </>
  );
}

export default App;
