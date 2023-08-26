import React from 'react'
import HistoricalTable from '../components/HistoricalTable'
import HistoricalGames from '../components/HistoricalGames'
import HistoricalWinners from '../components/HistoricalWinners'

export default function Statistics() {
	return (
		<div className='Statistics | bg-black w-full flex-1 text-white text-2xl px-8 pb-8 font-semibold lg:text-2xl'>
			<div className='w-full text-center underline underline-offset-2'>Estadísticas</div>
			
			<HistoricalWinners />

			<HistoricalTable />

			<HistoricalGames />
			
		</div>
	)
}
