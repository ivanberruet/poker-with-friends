import React from 'react'

export default function Prizes(props) {
	const {players, eliminatedPlayers, entry, reentry, className, winners, firstPercentage, secondPercentage, thirdPercentage} = props
	
	let acumMoney = (players + reentry - eliminatedPlayers) * (entry)

	let prizes = []
	let percentages = [firstPercentage, secondPercentage, thirdPercentage]
	for (let i = 0; i < winners; i++) {
		let prize = (players + reentry) * entry * percentages[i]/100
		prizes.push(<p key={i}>{i+1}º Puesto: {Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS', maximumFractionDigits: 0}).format(prize)}</p>)
	}

	return (
		<div className={`Right Section | ${className} text-white flex flex-col items-center`}>
			<div className='flex flex-col gap-14 text-2xl'>
				<h1 className='text-5xl underline underline-offset-4'>Premios</h1>
				<p>Pozo acumulado: {Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS', maximumFractionDigits: 0}).format(acumMoney)}</p>
				{prizes}
			</div>
		</div>
	)
}
