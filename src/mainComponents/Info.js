import React from 'react'
import BlindsTable from '../components/TournamentInfo/BlindsTable'
import Rules from '../components/TournamentInfo/Rules'

export default function Info({timePerLevel, prizes, entryValue}) {

	return (
		<div className='TournamentInfo | bg-gray-950 w-full flex-1 text-white text-2xl px-8 py-8 font-semibold lg:text-2xl'>
			<Rules timePerLevel={timePerLevel} prizes={prizes} entryValue={entryValue} />
			<BlindsTable />
		</div>
	)
}
