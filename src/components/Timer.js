import React from 'react'
import { useState, useEffect } from 'react'
import audio from '../utils/countdown.mp3'

export default function Timer(props) {
	const {time, setCurrentLevel, isValid, setIsStarted} = props

	const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
	const alarm = new Audio(audio);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
						alarm.play()
						setCurrentLevel((prevLevel) => prevLevel + 1);
            handleStart();
            return;
          }
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const handleStart = () => {
		if (isValid){
			setMinutes(parseInt(time));
			setIsRunning(true);
			setIsStarted(true);
		}
	};

  const handleStop = () => {
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
		setIsPaused(false);
		setIsStarted(false);
		setCurrentLevel(0);
  };

  const handlePause = () => {
		setIsPaused(!isPaused);
    setIsRunning(!isRunning);
  };

	return (
		<div className="flex-1">
  <div className="w-full py-4 text-6xl text-white text-center">
    {`${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
  </div>
  <div className="flex justify-center gap-10 py-8">
    <button
      className="text-white text-xl border border-gray-300 rounded-md px-4 py-2 shadow-md shadow-black inset-4"
      onClick={isRunning || isPaused ? handleStop : handleStart}
    >
      {isRunning || isPaused ? "Detener" : "Iniciar"}
    </button>
    {isRunning || isPaused ? (
      <button
        className="text-white text-xl border border-gray-300 rounded-md px-4 py-2 shadow-md shadow-black inset-4"
        onClick={handlePause}
      >
        {isPaused ? "Reanudar" : "Pausar"}
      </button>
    ) : null}
  </div>
</div>

	)
}
