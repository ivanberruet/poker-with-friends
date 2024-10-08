import React from 'react'
import { historical } from '../../data/historical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
export default function HistoricalWinners() {
	const winners = {};

  historical.forEach((game) => {
    const { firstPlace } = game;

    if (winners[firstPlace]) {
      winners[firstPlace]++;
    } else {
      winners[firstPlace] = 1;
    }
  });

  const sortedWinners = Object.entries(winners).sort((a, b) => b[1] - a[1]);

  const highestWins = sortedWinners[0][1];

  return (
    <div className="w-fit py-4 ">
      <div className="text-lg lg:text-4xl pb-4">Ganadores</div>
      <ul className="flex flex-col text-base lg:mt-4 font-normal gap-2">
        {sortedWinners.map(([winner, count]) => (
          <li className="list-disc list-inside lg:text-xl" key={winner}>
            {winner}: {count} {count === highestWins && <FontAwesomeIcon icon={faCrown} className="text-gold ml-1" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
