import React from 'react'
import { historical } from '../data/historical';
export default function HistoricalGames() {
	const reversedHistorical = [...historical].reverse();

	return (
    <div className='w-full py-8'>
      <h2 className='text-lg'>Historial de Torneos:</h2>
      {reversedHistorical.map((game, index) => (
        <div key={index} className='py-4'>
          <h3 className='text-base'>{game.month} {game.year}</h3>
          <p className='text-base pl-2 py-1'>1° {game.firstPlace}</p>
          <p className='text-base pl-2 py-1'>2° {game.secondPlace}</p>
          <p className='text-base pl-2 py-1'>3° {game.thirdPlace}</p>
        </div>
      ))}
    </div>
  );
}
