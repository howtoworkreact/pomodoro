import "./App.css";

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-8">
        <div className=" text-4xl text-neutral-700">
          <h2>POMODORO</h2>
        </div>
        <div className="text-9xl text-neutral-700">
          <span>00</span>
          <span>:</span>
          <span>00</span>
        </div>
        <div className="flex flex-row  gap-4 font-semibold text-gray-800">
          <button className="bg-yellow-200 hover:bg-yellow-300 py-2 px-4 rounded-md text-lg">
            Stop
          </button>
          <button className="bg-yellow-200 hover:bg-yellow-300 py-2 px-4 rounded-md">
            Start
          </button>
          <button className="bg-yellow-200 hover:bg-yellow-300 py-2 px-4 rounded-md">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
