import React from 'react'
import { useState, useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Time from './Time';
import GameLevel from './GameLevel';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function TimeInfo(props) {
	const {className, levelInfo, setLevelInfo, timePerLevel} = props
	const xl = useMediaQuery('(min-width:1080px)');
	const xxl = useMediaQuery('(min-width:1440px)');
	let timerWidth = xxl ? 275 : xl ? 200 : 175 
	let timerStrokeWidth = xxl ? 16 : xl ? 14 : 12

	// Para Temporizador
  const [isStarted, setIsStarted] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

	// Para Hora actual
	const localTime = new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', hour12: false})
	const [currtentTime, setCurrentTime] = useState(localTime)

	// Para tiempo de juego
	const [gameTimeSeconds, setGameTimeSeconds] = useState(0)
	const [gameTimeMinutes, setGameTimeMinutes] = useState(0)
	const [gameTimeHours, setGameTimeHours] = useState(0)

  const handleStart = () => {
		setIsRunning(true);
		setIsStarted(true);
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
				<div className='w-full flex flex-col items-center'>
					<span className='text-semibold text-white text-lg xl:text-2xl absolute top-10 2xl:top-14 m-auto'>Nivel {levelInfo.currentLevel}</span>
					<span className='w-full text-center font-semibold text-white text-4xl xl:text-5xl 2xl:text-6xl'>{`${minutes}:${seconds}`}</span>
				</div>
		)
	}

	// Hora actual
	setInterval(() => {
		setCurrentTime(new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', hour12: false}));
	}, 1000)
	
	// Tiempo acumulado de juego
	const updateGameTime = () =>{
		if(isStarted){
			console.log("TimeInfo - Execuiting updateGameTime");
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

	// Debug
	// console.log("TimeInfo - currtentTime", currtentTime);

  return (
    <div className={`Middle Section | ${className} flex flex-col gap:4 xl:gap-8`}>

			<div className="Button_Container | flex justify-center gap-10 pb-8">
				<button
					id='StartButton'
					className="text-white text-xl border border-gray-300 rounded-md px-4 py-2 shadow-md shadow-black inset-4 lg:text-4xl"
					onClick={isRunning || isPaused ? null : handleStart}
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


			<div className='CountdownCircleTimer | flex justify-center pb-8'>
				<CountdownCircleTimer
					isPlaying={isRunning}
					initialRemainingTime={0}
					duration={timePerLevel*60}
					// duration={10} // Para debug
					size={timerWidth}
					colors={['#1A9AEF', '#F7B801', '#A30000', '#A30000']}
					colorsTime={[timePerLevel*60*.5, timePerLevel*60*.25, 90, 0]}
					// colorsTime={[60, 15, 5, 0]} // Para debug
					trailColor= 'rgba(0, 0, 0, 0.3)'
					strokeWidth={timerStrokeWidth}
					updateInterval={1}
					onComplete={(te)=>{
						isStarted ? setLevelInfo({...levelInfo, currentLevel: levelInfo.currentLevel+1}) : console.log(te);
						return { shouldRepeat: true, delay: 0 }
					}}
					onUpdate={(rt)=> rt !==0 ? updateGameTime() : null}
				>
					{({ remainingTime, elapsedTime }) => children({ remainingTime, elapsedTime })}
				</CountdownCircleTimer>
			</div>

			<GameLevel level={levelInfo.currentLevel} msg="Nivel Actual" className="text-2xl xl:text-4xl 2xl:text-5xl" />
			<GameLevel level={levelInfo.currentLevel+1} msg="Nivel Siguiente" className="xl:text-xl 2xl:text-2xl" />

			<Time currtentTime={currtentTime} gameTimeHours={gameTimeHours} gameTimeMinutes={gameTimeMinutes} gameTimeSeconds={gameTimeSeconds} isStarted={isStarted}/>


		</div>
  );
}
