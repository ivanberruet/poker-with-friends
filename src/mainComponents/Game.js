import React, { useState } from 'react'
import GameInfo from '../components/GameInfo'
import GameExtraInfo from '../components/GameExtraInfo'
import GameTimer from '../components/GameTimer'

export default function Game() {
	const [time, setTime] = useState(15)
	const [currentLevel, setCurrentLevel] = useState(0)
	const [isValid, setIsValid] = useState(true)
	const [isStarted, setIsStarted] = useState(false)

	return (
		<div className="Container | min-h-screen flex flex-col">
			<div className='Game | flex-1 h-full flex flex-col bg-poker-table bg-cover'>
				<div className="Overlay | w-full flex-1 flex flex-col justify-center items-center backdrop-brightness-75">
					<GameInfo 
						time={time} 
						setTime={setTime} 
						currentLevel={currentLevel} 
						isValid={isValid} 
						setIsValid={setIsValid} 
						isStarted={isStarted} 
					/>
					<GameTimer 
						time={time} 
						setCurrentLevel={setCurrentLevel} 
						isValid={isValid} 
						isStarted={isStarted} 
						setIsStarted={setIsStarted}
					/>
					<GameExtraInfo isStarted={isStarted} />
				</div>
			</div>
		</div>
	)
}
