import { offerings as dataOfferings } from "../data/offerings.js";

const Modal = ({ closeModal, data = {} }) => {
  console.log(data);

  const selectHandle = (val) => {
    if (data.offeringType != "survivors") {
      data?.setOfferings({
        ...data.offerings,
        [data.offeringType]: val,
      });
    } else {
      data?.setOfferings({
        ...data.offerings,
        survivors: data.offerings.survivors.map((survivor, key) => {
          if (key === data.survivorIndex) {
            return val;
          }
          return survivor;
        }),
      });
    }

    closeModal();
  };

  return (
    <div className="absolute w-full h-full backdrop-blur-sm inset-0 flex justify-center items-center z-[999]">
      <div className="min-w-[400px] max-w-full bg-zinc-800 rounded-md">
        <header className="flex items-center justify-between w-full px-4 py-2 text-xl font-semibold border-b border-zinc-700">
          <h3>Select Offering</h3>
          <button
            onClick={closeModal}
            className="text-zinc-100 hover:text-zinc-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        <div className="p-4">
          <div>
            {dataOfferings.map((offering, key) => (
              <button
                key={key}
                type="button"
                onClick={() => selectHandle(offering)}
              >
                <img
                  className="hover:opacity-70"
                  src={`offerings/${offering.image}`}
                />
              </button>
            ))}
          </div>
          <button
            className="inline-flex items-center justify-center w-full px-4 py-2 mt-4 bg-blue-400 rounded-md hover:bg-blue-500"
            onClick={() => selectHandle(null)}
          >
            Remove Offering
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
