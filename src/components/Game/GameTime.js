import React from 'react'
import { useState, useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Time from './Time';
import GameLevel from './GameLevel';

export default function GameTime(props) {
	const {time, currentLevel, setCurrentLevel, isStarted, setIsStarted, className} = props

	// Para Temporizador
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

	// Para Hora actual
	const localTime = new Date().toLocaleTimeString()
	const [currtentTime, setCurrentTime] = useState(localTime)

	// Para tiempo de juego
	const [gameTimeSeconds, setGameTimeSeconds] = useState(0)
	const [gameTimeMinutes, setGameTimeMinutes] = useState(0)
	const [gameTimeHours, setGameTimeHours] = useState(0)

  const handleStart = () => {
		setIsRunning(true);
		setIsStarted(true);
	};

  const handleStop = () => {
    setIsRunning(false);
		setIsPaused(false);
		setIsStarted(false);
		setCurrentLevel(0);
  };

  const handlePause = () => {
		setIsPaused(!isPaused);
    setIsRunning(!isRunning);
  };

	//Contador dentro del círculo
	const children = ({ remainingTime }) => {
		var minutes = "00"	;
		var seconds = "00";
		if(!isNaN(remainingTime)){
			minutes = Math.floor(remainingTime / 60)
			seconds = remainingTime % 60 >= 10 ? remainingTime % 60 : `0${remainingTime % 60}`
		}
			return(
				<div className='flex flex-col items-center'>
					<span className='text-semibold text-white text-md lg:text-2xl absolute top-7 lg:top-14 m-auto'>Nivel {currentLevel}</span>
					<span className='text-bold text-white text-4xl lg:text-6xl'>{`${minutes}:${seconds}`}</span>
				</div>
		)
	}

	// Hora actual
	setInterval(() => {
		setCurrentTime(new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', hour12: true}))
	}, 1000)
	
	// Tiempo acumulado de juego
	const updateGameTime = () =>{
		if(isStarted){
			setGameTimeSeconds(prevGameTimeSeconds => prevGameTimeSeconds + 1);

			if(gameTimeSeconds === 59){
				setGameTimeSeconds(0);
				setGameTimeMinutes(prevGameTimeMinutes => prevGameTimeMinutes + 1);
			}
			if(gameTimeMinutes === 59){
				setGameTimeMinutes(0);
				setGameTimeHours(prevGameTimeHours => prevGameTimeHours + 1);
			}
		}
	}

	useEffect(() => {
		if (isStarted){
			document.getElementById('StartButton').classList.add('hidden')
		}
	},[isStarted])



  return (
    <div className={`Middle Section | ${className} flex flex-col gap-6 lg:gap-8`}>

			<div className="Button_Container | flex justify-center gap-10 pt-8 pb-0 lg:pb-8 lg:pt-0">
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

			{/* CountdownCircleTimer */}
			<div className='CountdownCircleTimer | flex justify-center '>
				<CountdownCircleTimer
					isPlaying={isRunning}
					initialRemainingTime={0}
					duration={time*60}
					updateInterval={1}
					// duration={5} // Para debug
					size={window.innerWidth < 1024 ? 150 : 250}
					colors={['#1A9AEF', '#F7B801', '#A30000', '#A30000']}
					colorsTime={[time*60*.5, time*60*.25, 90, 0]}
					// colorsTime={[60, 15, 5, 0]} // Para debug
					trailColor= 'rgba(0, 0, 0, 0.3)'
					strokeWidth={window.innerWidth < 1024 ? 12 : 16}
					onComplete={()=>{ 
						setCurrentLevel(currentLevel+1)
						return { shouldRepeat: true, delay: 0 }
					}}
					onUpdate={() => updateGameTime()}
					>
					{({ remainingTime, elapsedTime }) => children({ remainingTime, elapsedTime })}
				</CountdownCircleTimer>
			</div>

			{
				currentLevel !=0 ?
				<>
				<GameLevel level={currentLevel-1} msg="Nivel Actual" className="text-3xl lg:text-5xl"/>

				<GameLevel level={currentLevel} msg="Siguiente Nivel" className="text-lg lg:text-2xl" />
				</>
				: null
			}
			
			<Time currtentTime={currtentTime} gameTimeHours={gameTimeHours} gameTimeMinutes={gameTimeMinutes} gameTimeSeconds={gameTimeSeconds} isStarted={isStarted}/>


		</div>
  );
}
