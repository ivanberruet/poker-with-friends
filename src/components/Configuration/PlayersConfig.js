import React, { useContext, useEffect, useRef, useState } from 'react'
import Confetti from 'react-confetti'
import { Toaster } from 'react-hot-toast';
import { TimeContext } from '../../App';
import RegisterForm from './RegisterForm';

const testPlayers = [
	{ID:1,Nombre:"Pedro",Apodo:"Tata"},
	{ID:2,Nombre:"Juan",Apodo:"Tate"},
	{ID:3,Nombre:"Maria",Apodo:"Tati"},
	{ID:4,Nombre:"Luis",Apodo:"Tato"},
	{ID:5,Nombre:"Carlos",Apodo:"Tatu"},
	{ID:6,Nombre:"Ana",Apodo:"Teta"},
	{ID:7,Nombre:"Pancho",Apodo:"Tete"},
	{ID:8,Nombre:"José",Apodo:"Teti"},
	{ID:9,Nombre:"Mara",Apodo:"Teto"},
	{ID:10,Nombre:"Lucas",Apodo:"Tetu"},
	{ID:11,Nombre:"Coco",Apodo:"Tita"},
	{ID:12,Nombre:"Adela",Apodo:"Tite"},
]

export default function PlayersConfig( {className, players, setPlayers, entryValue, setPoolSize, thereIsWinner, setThereIsWinner}) {
	const [newPlayer, setNewPlayer] = useState({name:'', nickName:''})
	const [selectedPlayer, setSelectedPlayer] = useState('')
	const [registeredPlayers, setRegisteredPlayers] = useState(testPlayers)

	const playerSelect = useRef(null)

	const timeInfo = useContext(TimeContext)
	
	// Functions
	function addPlayer (action, handleClose) {
		if(action == 'add'){
			if(newPlayer.name == ''){alert('Ingresa un nombre para el jugador');}
			else if(newPlayer.nickName == ''){alert('Ingresa un nick para el jugador');}
			else if(registeredPlayers.some(p => p.Nombre == newPlayer.name)){alert('Ya existe un jugador registrado con ese nombre. Por favor seleccione del listado.');handleClose();}
			else if(registeredPlayers.some(p => p.Apodo == newPlayer.nickName)){alert('Ya existe un jugador registrado con ese apodo. Por favor elige otro.');}
			else if(players.activePlayers.some(p => p.name === newPlayer.name)){alert('Jugador ya registrado');handleClose();}
			else{
				registerNewPlayer(newPlayer,handleClose)
				console.log("newPlayer to be Registered", newPlayer);
				
			}
		}
		else{
			if(playerSelect.current.value == '' ){alert('Seleccione un jugador de la lista');}
			else if(players.activePlayers.some(p => p.name === selectedPlayer.Nombre)){alert('Jugador ya registrado')}
			else{
				setPlayers(players => ({...players, activePlayers: [...players.activePlayers, {id: selectedPlayer.Nombre, name: selectedPlayer.Nombre, nickName: selectedPlayer.Apodo, reentry: false}]}))
				setPoolSize(players.activePlayers.length * entryValue)
				setSelectedPlayer('')
				playerSelect.current.value = ''
			}
		}
	}

	function deletePlayer(playerId, position, activeState) {

		let arr = activeState ? players.activePlayers : players.eliminatedPlayers
		console.log("arr", arr);
		
		const confirmation = confirm(`Are you sure you want to delete ${arr.find(p => p.id === playerId).name}?`)

		if(confirmation){
			const updatedActivePlayers = players.activePlayers.filter(p => p.id !== playerId)
			const updatedEliminatedPlayers = players.eliminatedPlayers.filter(p => p.id !== playerId)

			setPlayers(players => ({...players, activePlayers: updatedActivePlayers, eliminatedPlayers: updatedEliminatedPlayers}))
		}
	}

	function eliminatePlayer (playerId, index){
		const eliminatedPlayer = players.activePlayers.filter(p => p.id === playerId)[0]
		const updatedEliminatedPlayers = [
			{...eliminatedPlayer, 
				inGameTime: ` ${timeInfo.gameTimeHours < 10 ? "0" : ""}${timeInfo.gameTimeHours}:${ timeInfo.gameTimeMinutes < 10 ? "0" : ""}${timeInfo.gameTimeMinutes}:${ timeInfo.gameTimeSeconds < 10 ? "0" : ""}${timeInfo.gameTimeSeconds}`, //Tiempo neto de juego
				eliminatedTime: new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}) //Hora de eliminación
			},
			 ...players.eliminatedPlayers
		]
		const updatedActivePlayers = players.activePlayers.filter(p => p.id !== playerId)

		setPlayers(players => ({
			...players, 
			activePlayers: updatedActivePlayers, 
			eliminatedPlayers: updatedEliminatedPlayers 
		}))
		
		if(updatedActivePlayers.length === 1){setThereIsWinner(true)}
	}

	function rentryPlayer(playerId, index){

		const rentryPlayer = players.activePlayers.filter(p => p.id === playerId)[0]
		let  updatedReentryPlayer = {...rentryPlayer, reentry: !rentryPlayer.reentry}
		
		let updatedActivePlayers = [...players.activePlayers]
		updatedActivePlayers[index] = updatedReentryPlayer
		
		setPlayers(players => ({...players, activePlayers: updatedActivePlayers}))
	}

	async function registerNewPlayer(newPlayer, handleClose) {
		fetch("https://sheetdb.io/api/v1/kikoenwo2po1j?sheet=Jugadores", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(
				{
					"ID": "INCREMENT",
					"Nombre": newPlayer.name,
					"Apodo": newPlayer.nickName,
				}
			),
		})
			.then((r) => r.json())
			.then((data) => {
				console.log(data);
				console.log(newPlayer);
				setPlayers(players => ({...players, activePlayers: [...players.activePlayers, {id: newPlayer.name, name: newPlayer.name, nickName: newPlayer.nickName, reentry: false}]}))
				setPoolSize(players.activePlayers.length * entryValue)
				setNewPlayer('')
				updateRegisteredPlayers();
				handleClose();
			})
			.catch((error) => {
				console.log(error);
			});	
	}

	function updateRegisteredPlayers() {
		fetch("https://sheetdb.io/api/v1/kikoenwo2po1j?sheet=Jugadores")
			.then((res) => res.json())
			.then((data) => {
				setRegisteredPlayers(data)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	// Components

	const TableOfPlayers = () => (
		<div className="mt-4 relative overflow-x-auto shadow-md rounded-lg w-full lg:w-[50%]">
			<table className="w-full text-sm text-left rtl:text-right text-gray-400">
				<caption className="p-5 text-lg font-semibold text-left rtl:text-right text-white bg-gray-800">
						Jugadores
				</caption>
				<thead className="text-xs lg:text-base text-white uppercase bg-gray-700">
					<tr>
						<th scope="col" className="p-2 lg:px-6 lg:py-3">#</th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3">Nombre</th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3">Activo</th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3">Reentrada</th>
						<th></th>
					</tr>
				</thead>
				<tbody className="text-xs lg:text-base">
					{players.activePlayers.map((player, index) => (
						<tr key={index} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700 font-semibold">
							<td className="px-2 lg:px-6 py-1 lg:py-4"></td>
							<td className="px-2 lg:px-6 py-1 lg:py-4 text-white" id={`${player.id}_td`}>{player.nickName}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4"><ActiveSwitch playerId={player.id} state={true} index={index} /></td>
							<td className="px-2 lg:px-6 py-1 lg:py-4"><ReentrySwitch playerId={player.id} index={index} active={true} /></td>
							<td className='px-2 lg:px-6 py-1 lg:py-4'><DeleteIcon playerId={player.id} index={index} active={true} /></td>
						</tr>
					))}
					{players.eliminatedPlayers.map((player, index) => (
						<tr key={index} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700 font-semibold">
							<td className='px-2 lg:px-6 py-1 lg:py-4'>{players.activePlayers.length+index+1}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4 text-gray-400 line-through" id={`${player.id}_td`}>{player.nickName}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4"><ActiveSwitch playerId={player.id} state={false} /></td>
							<td className="px-2 lg:px-6 py-1 lg:py-4"><ReentrySwitch playerId={player.id} active={false} /></td>
							<td className='px-2 lg:px-6 py-1 lg:py-4'><DeleteIcon playerId={player.id} index={index} active={false} /></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
	const DeleteIcon = ({playerId, index, active}) =>(
		<button className="bin-button" onClick={() => {deletePlayer(playerId, index, active)}}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 39 7"
				className="bin-top"
			>
				<line strokeWidth="4" stroke="white" y2="5" x2="39" y1="5"></line>
				<line
					strokeWidth="3"
					stroke="white"
					y2="1.5"
					x2="26.0357"
					y1="1.5"
					x1="12"
				></line>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 33 39"
				className="bin-bottom"
			>
				<mask fill="white" id="path-1-inside-1_8_19">
					<path
						d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
					></path>
				</mask>
				<path
					mask="url(#path-1-inside-1_8_19)"
					fill="white"
					d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
				></path>
				<path strokeWidth="4" stroke="white" d="M12 6L12 29"></path>
				<path strokeWidth="4" stroke="white" d="M21 6V29"></path>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 89 80"
				className="garbage"
			>
				<path
					fill="white"
					d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
				></path>
			</svg>
		</button>
	)
	const ActiveSwitch = ({playerId, state, index}) => (
		<>
			<label className="switch">
				<input type="checkbox" value="" className="sr-only peer" defaultChecked={state} disabled={state ? false : true} onChange={() => eliminatePlayer(playerId, index)}></input>
				<div className="slider"></div>
				<div className="slider-card">
					<div className="slider-card-face slider-card-front"></div>
					<div className="slider-card-face slider-card-back"></div>
				</div>
			</label>
		</>
	)
	const ReentrySwitch = ({playerId, index, active}) => {

		let playersArr = active ? players.activePlayers : players.eliminatedPlayers
		let defCheckValue = playersArr.find(p => p.id === playerId).reentry 
		
		return (
			<>
				<label className="switch">
					<input type="checkbox" value="" className="sr-only peer" disabled={active ? false : true} defaultChecked={defCheckValue} onChange={() => rentryPlayer(playerId, index)}></input>
					<div className="slider"></div>
					<div className="slider-card">
						<div className="slider-card-face slider-card-front"></div>
						<div className="slider-card-face slider-card-back"></div>
					</div>
				</label>
			</>
			
	)}

	// Effects
	useEffect(() => {
		let registeredPlayers = players.activePlayers.length+players.eliminatedPlayers.length
		let activeReentryPlayers = players.activePlayers.filter(p => p.reentry).length
		let eliminatedReentryPlayers = players.eliminatedPlayers.filter(p => p.reentry).length
		let reentryPlayers = activeReentryPlayers+eliminatedReentryPlayers
	
		setPoolSize((registeredPlayers+reentryPlayers) * entryValue)
	}, [players])

	useEffect(() => {
		updateRegisteredPlayers();
	},[])

	console.log("registeredPlayers", registeredPlayers);
	console.log("GamePlayers", players);
	

	return (
		<div className={`PlayersConfig | ${className} w-full flex flex-col gap-4`}>
			<Toaster position="top-right" reverseOrder={false} className="toaster |" />
			<Confetti run={thereIsWinner} recycle={false} numberOfPieces={1000} tweenDuration={8000} className='Confetti |' />

			<div className="SelectPlayer | flex gap-2 items-center">
				<select ref={playerSelect} 
					name="registeredPlayers" 
					id="registeredPlayers" 
					className="input | block w-56 rounded-md py-1 px-2 ring-1 ring-inset ring-gray-400 text-gray-800 text-base cursor-pointer"
					defaultValue=""
					onChange={(e) => {setSelectedPlayer(registeredPlayers[e.target.value]);}}
				 >
					<option key={"default"} value="" disabled>Seleccionar jugador</option>
					{registeredPlayers.map((player, index) => (
						<option key={player.ID} value={index}>{player.Apodo}</option>
					))}
				</select>
				<button
					title="Agregar jugador"
					className="group cursor-pointer outline-none hover:rotate-90 duration-300"
					onClick={() => addPlayer("select")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32px"
						height="32px"
						viewBox="0 0 24 24"
						className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-focus:fill-zinc-800 group-state:stroke-zinc-200 group-state:fill-zinc-600 group-state:duration-0 duration-300"
					>
						<path
							d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
							strokeWidth="1.5"
						></path>
						<path d="M8 12H16" strokeWidth="1.5"></path>
						<path d="M12 16V8" strokeWidth="1.5"></path>
					</svg>
				</button>
			</div>

			<RegisterForm newPlayer={newPlayer} setNewPlayer={setNewPlayer} addPlayer={addPlayer} />

			<TableOfPlayers />
		</div>
	)
}
