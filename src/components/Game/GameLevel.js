import React from 'react'
import { blindsLevels } from '../../data/blindsLevels'

export default function GameLevel(props) {
	const {level, msg, className} = props

	// console.log("GameLevel - level", level)
	return (
		<div className='Info | flex flex-col justify-start w-full px-10 font-semibold text-white lg:flex-row lg:items-center'>
			<div className={`w-full pb-2 text-center ${className}`}>
				
				{`${msg}: ${blindsLevels[level-1].smallBlind}/${blindsLevels[level-1].bigBlind}`}
			</div>
		</div>
	)
}
