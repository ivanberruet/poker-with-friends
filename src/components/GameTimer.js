import React from 'react'
import { useState, useEffect } from 'react'
import audio from '../assets/countdown.mp3'
import GameExtraInfo from './GameExtraInfo';

export default function GameTimer(props) {
	const {time, setCurrentLevel, isValid, isStarted, setIsStarted} = props

	// Para Temporizador
	const [timerMinutes, setTimerMinutes] = useState(time);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
	const alarm = new Audio(audio);

	// Para Hora actual
	const localTime = new Date().toLocaleTimeString()
	const [currtentTime, setCurrentTime] = useState(localTime)

	// Para tiempo de juego
	const [gameTimeSeconds, setGameTimeSeconds] = useState(0)
	const [gameTimeMinutes, setGameTimeMinutes] = useState(0)
	const [gameTimeHours, setGameTimeHours] = useState(0)


	// Hora actual
	setInterval(() => {
		setCurrentTime(new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', hour12: true}))
	}, 1000)

	// Temporizador y Tiempo de juego
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {

				// Temporizador
        if (timerSeconds === 0) {
          if (timerMinutes === 0) {
						alarm.play()
						setCurrentLevel((prevLevel) => prevLevel + 1);
            handleStart();
            return;
          }
          setTimerMinutes((prevTimerMinutes) => prevTimerMinutes - 1);
          setTimerSeconds(59);
        } else {
          setTimerSeconds((prevTimerSeconds) => prevTimerSeconds - 1);
        }

				// Tiempo de juego
				setGameTimeSeconds((prevGameTimeSeconds) => {
					if (prevGameTimeSeconds === 59) {
						setGameTimeSeconds(0)
						setGameTimeMinutes((prevGameTimeMinutes) => {
							if (prevGameTimeMinutes === 59) {
								setGameTimeMinutes(0)
								setGameTimeHours((prevGameTimeHours) => prevGameTimeHours + 1)
							}
							return prevGameTimeMinutes + 1
						})
						return 0;
					}
					return prevGameTimeSeconds + 1
				})
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timerMinutes, timerSeconds, isStarted]);

	useEffect(() => {
		if (isStarted){
			document.getElementById('StartButton').classList.add('hidden')
		}
	},[isStarted])
  const handleStart = () => {
		if (isValid){
			setTimerMinutes(parseInt(time));
			setIsRunning(true);
			setIsStarted(true);
		}
	};

  const handleStop = () => {
    setTimerMinutes(0);
    setTimerSeconds(0);
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
	<div className="GameTimer | flex-1 w-full">
		<div className='hidden lg:flex w-full  justify-center text-white text-2xl'>Próximo nivel en:</div>
		<div className="Clock | w-full py-4 text-6xl text-white text-center lg:text-[10rem]">
			{isStarted
				? `${timerMinutes < 10 ? "0" : ""}${timerMinutes}:${timerSeconds < 10 ? "0" : ""}${timerSeconds}`
				: "00:00"
			}
		</div>
		<div className="Button_Container | flex-1 flex justify-center gap-10 py-8">
			<button
				id='StartButton'
				className="text-white text-xl border border-gray-300 rounded-md px-4 py-2 shadow-md shadow-black inset-4 lg:text-4xl"
				onClick={isRunning || isPaused ? handleStop : handleStart}
			>
				{isRunning || isPaused ? "Detener" : "Iniciar"}
				
			</button>
			{isRunning || isPaused ? (
				<button
					className="text-white text-xl border border-gray-300 rounded-md px-4 py-2 shadow-md shadow-black inset-4 lg:text-4xl"
					onClick={handlePause}
				>
					{isPaused ? "Reanudar" : "Pausar"}
				</button>
			) : null}
		</div>
		
		<GameExtraInfo isStarted={isStarted} />
			
		<span className='text-white absolute left-10 bottom-10 lg:text-4xl'>{currtentTime}</span>
		<span className='text-white absolute right-10 bottom-10 lg:text-4xl'>
			{isStarted
				? `${gameTimeHours < 10 ? "0" : ""}${gameTimeHours}:${ gameTimeMinutes < 10 ? "0" : ""}${gameTimeMinutes}:${gameTimeSeconds < 10 ? "0" : ""}${gameTimeSeconds}`
				: "00:00:00"
			}
		</span>

	</div>	
	)
}
