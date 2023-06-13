const Modal = () => {
  return (
    <div className="absolute w-full h-full backdrop-blur-sm inset-0 flex justify-center items-center z-[999]">
      <div className="max-w-[700px] bg-zinc-700 rounded-sm">
        <header className="w-full border-b-">Select Offering</header>
      </div>
    </div>
  );
};

export default Modal;
