import React, { useState } from 'react'
import Info from '../components/Info'
import Timer from '../components/Timer'
import ExtraInfo from '../components/ExtraInfo'

export default function Body() {
	const [time, setTime] = useState(10)
	const [currentLevel, setCurrentLevel] = useState(0)
	const [isValid, setIsValid] = useState(true)

	return (
		<div className='bg-primary flex-1 flex flex-col'>
			<Info time={time} setTime={setTime} currentLevel={currentLevel} isValid={isValid} setIsValid={setIsValid} />
			<Timer time={time} setCurrentLevel={setCurrentLevel} isValid={isValid} />
			<ExtraInfo />
		</div>
	)
}
