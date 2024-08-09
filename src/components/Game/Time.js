import React from 'react'

export default function Time(props) {
	const {currtentTime, gameTimeHours, gameTimeMinutes, gameTimeSeconds, isStarted} = props
	// console.log("Time - currtentTime",currtentTime)
	return (
		<>
			<div className='text-white absolute left-10 bottom-10 lg:text-4xl flex flex-col xl:flex-row gap-2'>
				<span>Hora:</span>
				<span>{currtentTime}</span>
			</div>
		 	<div className='text-white absolute right-10 bottom-10 lg:text-4xl flex flex-col xl:flex-row gap-2'>
				<span>En juego:</span>
				<span>
					{isStarted
						? ` ${gameTimeHours < 10 ? "0" : ""}${gameTimeHours}:${ gameTimeMinutes < 10 ? "0" : ""}${gameTimeMinutes}:${gameTimeSeconds < 10 ? "0" : ""}${gameTimeSeconds}`
					: " 00:00:00"
					}
				</span>
			</div>
		</>
	)
}
