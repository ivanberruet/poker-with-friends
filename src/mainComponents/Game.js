import React, { useState, createContext } from 'react'
import GameTime from '../components/Game/GameTime'
import Prizes from '../components/Game/Prizes'
import GameInfo from '../components/Game/GameInfo'

export default function Game(props) {
	const {time, players, startingLevel, eliminatedPlayers, entry, reentry, playerChips, winners, firstPercentage, secondPercentage, thirdPercentage} = props
	const [currentLevel, setCurrentLevel] = useState(startingLevel)
	const [isStarted, setIsStarted] = useState(false)

	return (
		<div className="Container | min-h-screen flex flex-col">
			<div className='Game | h-full flex flex-col flex-1 bg-poker-table bg-cover'>
				<div className="Overlay | w-full flex-1 flex flex-col items-center backdrop-brightness-75">
					<div className='Home Page | w-full flex flex-col justify-center flex-1 pt-8 px-8 lg:pt-16 lg:px-32 lg:flex-row'>
						
						<GameInfo className="" players={players} reentry={reentry} eliminatedPlayers={eliminatedPlayers} playerChips={playerChips} currentLevel={currentLevel} />

						<GameTime className="flex-1"
							time={time} 
							setCurrentLevel={setCurrentLevel} 
							isStarted={isStarted} 
							setIsStarted={setIsStarted}
							currentLevel={currentLevel}
						/>

						<Prizes className="" players={players} eliminatedPlayers={eliminatedPlayers} reentry={reentry} entry={entry} winners={winners} firstPercentage={firstPercentage} secondPercentage={secondPercentage} thirdPercentage={thirdPercentage} />
					</div>
				</div>
			</div>
		</div>
	)
}
