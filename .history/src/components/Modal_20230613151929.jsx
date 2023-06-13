const Modal = () => {
  return (
    <div className="absolute w-full h-full backdrop-blur-sm inset-0 flex justify-center items-center z-[999]">
      <div className="min-w-[400px] max-w-full bg-zinc-800 rounded-sm">
        <header className="w-full border-b border-zinc-700 py-2 px-4 font-semibold text-xl">
          Select Offering
        </header>

        <div className="p-4"></div>
      </div>
    </div>
  );
};

export default Modal;
