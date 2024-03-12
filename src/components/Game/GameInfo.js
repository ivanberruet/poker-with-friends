import React from 'react'
import { blindsLevels } from '../../data/blindsLevels'

export default function GameInfo(props) {
	const {className, players, reentry, eliminatedPlayers, playerChips, currentLevel} = props
	let playersLeft = players - eliminatedPlayers
	let inGameChips = playerChips*(players+reentry)
	let averageChips = Math.round(inGameChips/playersLeft)
	let bigBlind = currentLevel == 0 ? blindsLevels[0].bigBlind : blindsLevels[currentLevel-1].bigBlind
	let averageBlinds = Math.round(averageChips/bigBlind)

	return (
		<div className={`Left Section | ${className} text-white flex flex-col items-center`}>
			<div className='flex flex-col gap-14 text-2xl'>
				<h1 className='text-5xl underline underline-offset-4'>Información</h1>
				<p>Fichas en juego: {Intl.NumberFormat('es-AR').format(inGameChips)}</p>
				<p>Promedio de fichas: {Intl.NumberFormat('es-AR').format(averageChips)} ({averageBlinds} BB)</p>
				<p>Jugadores restantes: {playersLeft} / {players}</p>
			</div>
		</div>
	)
}
