import React, { useState } from 'react'
import Info from '../components/Info'
import Timer from '../components/Timer'
import ExtraInfo from '../components/ExtraInfo'
import Background from '../assets/poker-table.jpg'

export default function Body() {
	const [time, setTime] = useState(10)
	const [currentLevel, setCurrentLevel] = useState(0)
	const [isValid, setIsValid] = useState(true)
	const [isStarted, setIsStarted] = useState(false)

	return (
		<div className='Body | flex-1 flex flex-col bg-bg-poker-table bg-cover'>
			<div className="Overlay | w-full h-full flex flex-col justify-center items-center backdrop-brightness-50">
				<Info time={time} setTime={setTime} currentLevel={currentLevel} isValid={isValid} setIsValid={setIsValid} isStarted={isStarted} />
				<Timer time={time} setCurrentLevel={setCurrentLevel} isValid={isValid} setIsStarted={setIsStarted} />
				<ExtraInfo isStarted={isStarted} />
			</div>
		</div>
	)
}
