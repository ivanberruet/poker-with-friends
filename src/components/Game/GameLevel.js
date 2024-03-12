import React from 'react'
import { blindsLevels } from '../../data/blindsLevels'

export default function GameLevel(props) {
	const {level, msg, className} = props
	return (
		<div className='Info | flex flex-col justify-start w-full px-10 text-xl font-semibold text-white lg:text-3xl lg:flex-row lg:items-center'>
			<div className={`w-full py-2 text-center ${className}`}>
				
				{`${msg}: ${blindsLevels[level].smallBlind}/${blindsLevels[level].bigBlind}`}
			</div>
		</div>
	)
}
