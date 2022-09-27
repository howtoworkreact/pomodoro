import "./App.css";
import { useState } from "react";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

export default function App() {
  const [title, setTitle] = useState("Let the countdown begin....");
  const [timeLeft, setTimeLeft] = useState(25 * 60);

  function startTimer() {
    setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) {
          return timeLeft - 1;
        }
        return 0;
      });
    }, 1000);
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-8">
        <div className=" text-4xl text-[#395B57] ">
          <h2>{title}</h2>
        </div>
        <div className="text-9xl text-[#395B57] flex flex-row">
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
        <div className="flex flex-row  gap-4 font-semibold text-[#395B57]">
          <button
            onClick={startTimer}
            className="bg-yellow-200 hover:bg-yellow-300 py-2 px-4 rounded-md"
          >
            Start
          </button>
          <button className="bg-yellow-200 hover:bg-yellow-300 py-2 px-4 rounded-md text-lg">
            Stop
          </button>

          <button className="bg-yellow-200 hover:bg-yellow-300 py-2 px-4 rounded-md">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
