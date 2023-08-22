import React, { useState } from 'react'
import GameInfo from '../components/GameInfo'
import GameExtraInfo from '../components/GameExtraInfo'
import Timer from '../components/Timer'

export default function Body() {
	const [time, setTime] = useState(12)
	const [currentLevel, setCurrentLevel] = useState(0)
	const [isValid, setIsValid] = useState(true)
	const [isStarted, setIsStarted] = useState(false)

	return (
		<>
			<div className='Body | flex-1 flex flex-col bg-poker-table bg-cover'>
				<div className="Overlay | w-full h-full flex flex-col justify-center items-center backdrop-brightness-50">
					<GameInfo 
						time={time} 
						setTime={setTime} 
						currentLevel={currentLevel} 
						isValid={isValid} 
						setIsValid={setIsValid} 
						isStarted={isStarted} 
					/>
					<Timer 
						time={time} 
						setCurrentLevel={setCurrentLevel} 
						isValid={isValid} 
						isStarted={isStarted} 
						setIsStarted={setIsStarted}
					/>
					<GameExtraInfo isStarted={isStarted} />
				</div>
			</div>
		</>
	)
}
