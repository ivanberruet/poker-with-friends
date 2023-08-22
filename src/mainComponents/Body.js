import React, { useState } from 'react'
import Info from '../components/Info'
import Timer from '../components/Timer'
import ExtraInfo from '../components/ExtraInfo'

export default function Body() {
	const [time, setTime] = useState(10)
	const [currentLevel, setCurrentLevel] = useState(0)
	const [isValid, setIsValid] = useState(true)
	const [isStarted, setIsStarted] = useState(false)

	return (
		<div className='bg-gradient-to-t from-green-900 to-green-600 flex-1 flex flex-col'>
			<Info time={time} setTime={setTime} currentLevel={currentLevel} isValid={isValid} setIsValid={setIsValid} isStarted={isStarted} />
			<Timer time={time} setCurrentLevel={setCurrentLevel} isValid={isValid} setIsStarted={setIsStarted} />
			<ExtraInfo />
		</div>
	)
}
