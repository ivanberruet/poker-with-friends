import React, { useState, createContext } from 'react'
import TimeInfo from '../components/Game/TimeInfo'
import MoneyInfo from '../components/Game/MoneyInfo'
import InGameInfo from '../components/Game/InGameInfo'
import GameLevel from '../components/Game/GameLevel'
import { blindsLevels } from '../data/blindsLevels'

export default function Game(props) {
	const {players, poolSize, prizes, timePerLevel,	levelInfo, setLevelInfo,	chips} = props

	return (
		<div className="Container | min-h-screen flex flex-col">
			<div className='Game | h-full flex flex-col flex-1 bg-poker-table bg-cover'>
				<div className="Overlay | w-full flex-1 flex flex-col items-center backdrop-brightness-75">
					<div className='Home Page | w-full flex flex-col lg:flex-row items-center justify-around p-8 xl:py-16 gap-6'>
						
						<InGameInfo className="flex-1" players={players} chips={chips} levelInfo={levelInfo} />

						<TimeInfo className="flex-1" levelInfo={levelInfo} setLevelInfo={setLevelInfo} timePerLevel={timePerLevel} />

						<MoneyInfo className="flex-1" poolSize={poolSize} prizes={prizes} />

					</div>
				</div>
			</div>
		</div>
	)
}
