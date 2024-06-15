import React from 'react'

export default function Prizes(props) {
	const {players, eliminatedPlayers, entry, reentry, className, winners, firstPercentage, secondPercentage, thirdPercentage} = props
	
	let acumMoney = (players + reentry) * (entry)

	let prizes = []
	let percentages = [firstPercentage, secondPercentage, thirdPercentage]
	for (let i = 0; i < winners; i++) {
		let prize = (players + reentry) * entry * percentages[i]/100
		prizes.push(<p key={i} className='w-max'>{i+1}º Puesto: {Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS', maximumFractionDigits: 0}).format(prize)}</p>)
	}

	return (
		<div className={`Right Section | ${className} text-white flex flex-col my-16 lg:mt-0 items-center w-[366px]`}>
			<div className='w-min flex flex-col gap-6 lg:gap-14 text-xl lg:text-2xl'>
				<h1 className='w-full text-4xl lg:text-5xl underline underline-offset-4 text-center lg:text-left'>Premios</h1>
				<p className='w-max'>Pozo acumulado: {Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS', maximumFractionDigits: 0}).format(acumMoney)}</p>
				{prizes}
			</div>
		</div>
	)
}
