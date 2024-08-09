import React, { useState, useEffect } from 'react'
import { blindsLevels } from '../data/blindsLevels'
import { faCheck } from '@fortawesome/free-solid-svg-icons' 
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Game2(props) {

	const {players, poolSize, prizes, timePerLevel,	levelInfo, setLevelInfo,	chips, gameTimeSeconds, setGameTimeSeconds, gameTimeMinutes, setGameTimeMinutes, gameTimeHours, setGameTimeHours, isStarted, setIsStarted} = props

	let bigBlind = blindsLevels[levelInfo.currentLevel-1].bigBlind
	let inGameChips = new Intl.NumberFormat('es-AR').format(chips.inGame)
	let averageChips = new Intl.NumberFormat('es-AR').format(chips.average)
	let averageBBs = new Intl.NumberFormat('es-AR').format(Math.floor(chips.average/bigBlind))
	let activePlayers = players.activePlayers.length
	let registeredPlayers = players.activePlayers.length+players.eliminatedPlayers.length


	const TableOfPlayers = ({playerList}) => (
		<div className="relative overflow-x-auto shadow-md rounded-lg w-full">
			<table className="w-full text-sm text-left text-gray-400">
				<thead className="text-xs lg:text-base text-white uppercase border-b border-gray-700">
					<tr>
						<th scope="col" className="p-2 lg:px-6 lg:pb-3 lg:pt-2">#</th>
						<th scope="col" className="p-2 lg:px-6 lg:pb-3 lg:pt-2">Nombre</th>
						<th scope="col" className="p-2 lg:px-6 lg:pb-3 lg:pt-2">Reentrada</th>
					</tr>
				</thead>
				<tbody className="text-xs lg:text-base">
					{playerList.map((player, index) => {
						let className, position
						if(player.eliminatedTime){
							className = 'text-gray-400 line-through'
							position = players.eliminatedPlayers.findIndex((p) => p.name === player.name) + players.activePlayers.length + 1;					
						}
						else{
							className = 'text-white'
							position = ''							
						} 

						
						return (
							<tr key={index} className="border-b border-gray-700 font-semibold">
								<td className="px-2 lg:px-6 py-1 lg:py-3">{position}</td>
								<td className={`px-2 lg:px-6 py-1 lg:py-3 ${className}`} id={`${player.id}_td`}>{player.nickName}</td>
								<td className="px-2 lg:px-6 py-1 lg:py-3">{player.reentry ? <FontAwesomeIcon icon={faCheck} className='text-green-600' /> : <FontAwesomeIcon icon={faXmark} className='text-red-700' />}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)

	const xl = useMediaQuery('(min-width:1080px)');
	const xxl = useMediaQuery('(min-width:1440px)');
	let timerWidth = xxl ? 275 : xl ? 200 : 175 
	let timerStrokeWidth = xxl ? 16 : xl ? 14 : 12

	// Para Temporizador
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

	// Para Hora actual
	const localTime = new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', hour12: false})
	const [currtentTime, setCurrentTime] = useState(localTime)

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
			// console.log("TimeInfo - Execuiting updateGameTime");
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

	let activeReentryPlayers = players.activePlayers.filter(p => p.reentry).length
	let eliminatedReentryPlayers = players.eliminatedPlayers.filter(p => p.reentry).length
	let reentryPlayers = activeReentryPlayers+eliminatedReentryPlayers


	return (
		<div className="Container | min-h-screen flex flex-col text-white">
			<div className="Game | min-h-full flex flex-col flex-1 bg-darkBlue p-8 xl:px-16">

					<div className='Time | flex justify-between mb-4'>
						<div className='lg:text-4xl flex flex-col xl:flex-row gap-2'>
							<span>Hora:</span>
							<span>{currtentTime}</span>
						</div>

						<div className='lg:text-4xl flex flex-col xl:flex-row gap-2'>
							<span>En juego:</span>
							<span>
								{isStarted
									? ` ${gameTimeHours < 10 ? "0" : ""}${gameTimeHours}:${ gameTimeMinutes < 10 ? "0" : ""}${gameTimeMinutes}`
								: " 00:00"
								}
							</span>
						</div>
					</div>

					<div className='Home Page | w-full grid grid-cols-1 lg:grid-cols-3 gap-6'>

						<div className='Blinds and Clock | gridItem isolate bg-white/5 shadow-lg rounded-xl p-6 lg:col-span-3 w-full flex flex-col lg:flex-row justify-around gap-6 lg:gap-0'>

							<div className='Current Blinds | h-fit flex-1 flex flex-col gap-2 justify-start '>
								<div className='Info | flex lg:flex-col items-center lg:justify-start lg:items-start w-full font-semibold'>
									<h1 className={`w-full lg:pb-2 text-2xl xl:text-4xl 2xl:text-5xl self-center`}>Ciega Grande</h1>
									<p className='text-5xl lg:text-8xl'>{`${blindsLevels[levelInfo.currentLevel-1].bigBlind}`}</p>
								</div>
								<div className='Info | flex lg:flex-col items-center lg:justify-start lg:items-start w-full font-semibold'>
									<h1 className={`w-full lg:pb-2 text-2xl xl:text-4xl 2xl:text-5xl self-center`}>Ciega Pequeña</h1>
									<p className='text-5xl lg:text-8xl'>{`${blindsLevels[levelInfo.currentLevel-1].smallBlind}`}</p>
								</div>
							</div>

							<div className={`Clock | flex flex-col gap:4 xl:gap-0`}>

								<div className="Button_Container | h-fit flex justify-center gap-8 pb-8">
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


								<div className='CountdownCircleTimer | flex justify-center'>
									<CountdownCircleTimer
										isPlaying={isRunning}
										// initialRemainingTime={100}
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
							</div>

							<div className='Next Blinds | h-fit flex-1 flex flex-col gap-2 justify-start lg:text-right opacity-20'>
								<div className='Info | flex lg:flex-col items-center lg:justify-start lg:items-end w-full font-semibold'>
									<h1 className={`w-full pb-2 text-2xl xl:text-4xl 2xl:text-5xl self-center`}>Ciega Grande</h1>
									<p className='text-5xl lg:text-8xl'>{`${blindsLevels[levelInfo.currentLevel].bigBlind}`}</p>
								</div>
								<div className='Info | flex lg:flex-col items-center lg:justify-start lg:items-end w-full font-semibold'>
									<h1 className={`w-full pb-2 text-2xl xl:text-4xl 2xl:text-5xl self-center`}>Ciega Pequeña</h1>
									<p className='text-5xl lg:text-8xl'>{`${blindsLevels[levelInfo.currentLevel].smallBlind}`}</p>
								</div>
							</div>

						</div>

						<div className='Chips and Info | gridItem isolate bg-white/5 shadow-lg rounded-xl p-6 flex flex-col gap-4 xl:text-2xl'>
								<p><span className='font-semibold'>Fichas:</span> {inGameChips}</p>
								<p><span className='font-semibold'>Promedio:</span> {averageChips} ({averageBBs} BB)</p>
								<p><span className='font-semibold'>Jugadores:</span> {activePlayers} / {registeredPlayers}</p>
								<p><span className='font-semibold'>Reentradas:</span> {reentryPlayers}</p>
						</div>

						<div className='Players | gridItem isolate bg-white/5 shadow-lg rounded-xl p-6 lg:col-span-2 lg:row-span-2 flex gap-6'>
							{
								players.activePlayers.concat(players.eliminatedPlayers).length < 7
								? <TableOfPlayers playerList={players.activePlayers.concat(players.eliminatedPlayers)} />
								: 
								 <>
								  <TableOfPlayers playerList={players.activePlayers.concat(players.eliminatedPlayers).slice(0,7)} />
								  <TableOfPlayers playerList={players.activePlayers.concat(players.eliminatedPlayers).slice(7,players.activePlayers.concat(players.eliminatedPlayers).length)} />
								 </>
							}
						</div>

						<div className='Prizes | gridItem isolate bg-white/5 shadow-lg rounded-xl p-6 flex flex-col gap-4 lg:text-2xl'>
							<p className='text-3xl 
							
							lg:text-5xl mb-4'><span className='font-semibold'>Pozo:</span> ${new Intl.NumberFormat('es-AR').format(poolSize)}</p>
							{prizes.percenteges.map((percentage, index) => (
								<p key={index}><span className='font-semibold'>{index+1}º Puesto:</span> ${new Intl.NumberFormat('es-AR').format(percentage*poolSize/100)}</p>
							))}
						</div>

					</div>

			</div>
		</div>
	)
}
