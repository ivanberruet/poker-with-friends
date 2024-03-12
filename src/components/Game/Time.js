import React from 'react'

export default function Time(props) {
	const {currtentTime, gameTimeHours, gameTimeMinutes, gameTimeSeconds, isStarted} = props
	return (
		<>
			<span className='text-white absolute left-5 bottom-2 lg:left-10 lg:bottom-10 lg:text-4xl'>Hora: {currtentTime}</span>
		 	<span className='text-white absolute right-5 bottom-2 lg:right-10 lg:bottom-10 lg:text-4xl'>Tiempo de Juego:
				{isStarted
					? ` ${gameTimeHours < 10 ? "0" : ""}${gameTimeHours}:${ gameTimeMinutes < 10 ? "0" : ""}${gameTimeMinutes}:${gameTimeSeconds < 10 ? "0" : ""}${gameTimeSeconds}`
				: " 00:00:00"
				}
			</span>
		</>
	)
}
