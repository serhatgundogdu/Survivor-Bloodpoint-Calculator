function App() {
  return (
    <div className="container mx-auto mt-8">
      <header className="w-full border-b border-zinc-700 py-3">
        <h1 className="text-2xl font-bold">Dead By Daylight BPS Calculator</h1>
      </header>

      <section>
        <input type="number" placeholder="Enter your blood point.." />
      </section>

      <section>
        <h2 className="text-xl font-bold">Select Offerings</h2>
      </section>
    </div>
  );
}

export default App;
