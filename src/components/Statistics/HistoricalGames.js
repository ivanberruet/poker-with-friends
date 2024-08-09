import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { historical } from '../../data/historical';
export default function HistoricalGames() {
	const reversedHistorical = [...historical].reverse();

	return (
    <div className='w-full pt-4 pb-8'>
			<table className='mt-2 border border-collapse lg:mt-4'>
				<caption className='text-left text-xl lg:text-3xl pb-4'>Historial de torneos</caption>
				<thead>
					<tr>
						<th className='border px-2 text-base lg:text-2xl lg:py-6 lg:px-6'>Mes/Año</th>
						<th className='border px-1 text-lg lg:text-4xl lg:py-6 lg:px-6'><FontAwesomeIcon icon={faTrophy} className='text-gold px-1' /></th>
						<th className='border px-1 text-lg lg:text-4xl lg:py-6 lg:px-6'><FontAwesomeIcon icon={faTrophy} className='text-silver px-1' /></th>
						<th className='border px-1 text-lg lg:text-4xl lg:py-6 lg:px-6'><FontAwesomeIcon icon={faTrophy} className='text-bronze px-1' /></th>
					</tr>
				</thead>
				<tbody>
					{reversedHistorical.map((game, index) => (
						<tr key={index} className='text-xs lg:text-xl font-normal'>
							<td className='px-2 py-1 border lg:px-4 lg:py-2 font-semibold w-max'>{game.month.slice(0,3)} {game.year}</td>
							<td className='px-2 py-1 border text-center lg:px-6 lg:py-3'>{game.firstPlace}</td>
							<td className='px-2 py-1 border text-center lg:px-6 lg:py-3'>{game.secondPlace}</td>
							<td className='px-2 py-1 border text-center lg:px-6 lg:py-3'>{game.thirdPlace}</td>
						</tr>
					))}
				</tbody>
			</table>
    </div>
  );
}
