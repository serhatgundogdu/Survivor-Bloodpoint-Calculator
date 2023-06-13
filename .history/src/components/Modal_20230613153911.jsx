import offerings from "../data/offerings.js";

const Modal = ({ closeModal, data = {} }) => {
  return (
    <div className="absolute w-full h-full backdrop-blur-sm inset-0 flex justify-center items-center z-[999]">
      <div className="min-w-[400px] max-w-full bg-zinc-800 rounded-md">
        <header className="w-full border-b flex justify-between items-center border-zinc-700 py-2 px-4 font-semibold text-xl">
          <h3>Select Offering</h3>
          <button
            onClick={closeModal}
            className="text-zinc-100 hover:text-zinc-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          {offerings.map((offering, key) => (
            <button key={key} type="button" onClick={() => setModal(true)}>
              <img src="" alt="" srcset="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
