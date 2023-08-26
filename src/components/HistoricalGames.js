import React from 'react'
import { historical } from '../data/historical';
export default function HistoricalGames() {
	const reversedHistorical = [...historical].reverse();

	return (
    <div className='w-full py-8'>
      <h2 className='text-lg lg:text-4xl'>Historial de Torneos:</h2>
      {reversedHistorical.map((game, index) => (
        <div key={index} className='py-4 text-base lg:text-xl'>
          <h3 className=''>{game.month} {game.year}</h3>
          <p className='pl-2 py-1'>1° {game.firstPlace}</p>
          <p className='pl-2 py-1'>2° {game.secondPlace}</p>
          <p className='pl-2 py-1'>3° {game.thirdPlace}</p>
        </div>
      ))}
    </div>
  );
}
