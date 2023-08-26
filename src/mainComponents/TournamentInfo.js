import React from 'react'
import BlindsTable from '../components/BlindsTable'
import Rules from '../components/Rules'

export default function TournamentInfo() {
	return (
		<div className='TournamentInfo | bg-gray-950 w-full flex-1 text-white text-2xl px-8 py-8 font-semibold lg:text-2xl'>
			<Rules />
			<BlindsTable />
		</div>
	)
}
