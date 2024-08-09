import React from 'react'
import { blindsLevels } from '../../data/blindsLevels'

export default function InGameInfo(props) {
	const {className, players, chips, levelInfo} = props

	let bigBlind = blindsLevels[levelInfo.currentLevel-1].bigBlind
	let inGameChips = new Intl.NumberFormat('es-AR').format(chips.inGame)
	let InGameBBs = new Intl.NumberFormat('es-AR').format(Math.floor(chips.inGame/bigBlind))
	let averageChips = new Intl.NumberFormat('es-AR').format(chips.average)
	let averageBBs = new Intl.NumberFormat('es-AR').format(Math.floor(chips.average/bigBlind))
	let activePlayers = players.activePlayers.length
	let registeredPlayers = players.activePlayers.length+players.eliminatedPlayers.length


	return (
		<div className={`Left Section | ${className} text-white flex flex-col items-center`}>
			<div className='flex flex-col gap-6 xl:gap-14 xl:text-2xl'>
				<h1 className='text-xl xl:text-5xl underline underline-offset-4 text-center lg:text-left'>Información</h1>
				<p>Fichas en juego: {inGameChips} ({InGameBBs} BB)</p>
				<p>Promedio de fichas: {averageChips} ({averageBBs} BB)</p>
				<p>Jugadores activos: {activePlayers} / {registeredPlayers}</p>
			</div>
		</div>
	)
}
