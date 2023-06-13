import { useState } from "react";
import Modal from "./components/Modal";
import { Offering } from "./components/Offering";

function App() {
  const [point, setPoint] = useState(32000);

  const [offerings, setOfferings] = useState({
    your: null,
    survivors: [null, null, null],
    killer: null,
  });

  const [modal, setModal] = useState(false);

  const calcPoints = (point) => {
    let lastPoint = point;

    return lastPoint;
  };

  return (
    <>
      {modal && (
        <Modal
          closeModal={() => setModal(false)}
          data={{
            offerings,
            setOfferings: (val) => setOfferings(val),
            ...modal,
          }}
        />
      )}
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
            <button
              type="button"
              onClick={() =>
                setModal({
                  offeringType: "your",
                  killer: false,
                })
              }
            >
              <Offering data={offerings.your} />
            </button>
          </div>
          <div className="flex gap-2 items-center justify-center mt-2.5">
            {offerings.survivors.map((offering, key) => (
              <button
                key={key}
                type="button"
                onClick={() =>
                  setModal({
                    offeringType: "survivors",
                    survivorIndex: key,
                    killer: false,
                  })
                }
              >
                <Offering data={offering} />
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center justify-center mt-2.5 ">
            <button
              type="button"
              onClick={() =>
                setModal({
                  offeringType: "killer",
                  killer: true,
                })
              }
            >
              <Offering data={offerings.killer} />
            </button>
          </div>
        </section>
        <section className="flex justify-center py-10 border-t border-zinc-700  ">
          <h3 className="font-bold text-4xl">
            {calcPoints(point) || 0} Bloodpoints
          </h3>
        </section>
      </div>
    </>
  );
}

export default App;
