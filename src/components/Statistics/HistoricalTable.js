import React from 'react'
import { historical } from '../../data/historical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'


export default function HistoricalTable() {
	const players = {};

  historical.forEach((item) => {
    const { firstPlace, secondPlace, thirdPlace } = item;

    // Initialize the player if not already present
    if (!players[firstPlace]) {
      players[firstPlace] = {
        first: 0,
        second: 0,
        third: 0,
      };
    }
    if (!players[secondPlace]) {
      players[secondPlace] = {
        first: 0,
        second: 0,
        third: 0,
      };
    }
    if (!players[thirdPlace]) {
      players[thirdPlace] = {
        first: 0,
        second: 0,
        third: 0,
      };
    }

    // Increment the count for each player in the respective position
    players[firstPlace].first++;
    players[secondPlace].second++;
    players[thirdPlace].third++;
  });

  // Sort the players based on their number of first-place finishes, then second-place and third-place finishes
  const sortedPlayers = Object.keys(players).sort((a, b) => {
    const firstPlaceDiff = players[b].first - players[a].first;
    const secondPlaceDiff = players[b].second - players[a].second;
    const thirdPlaceDiff = players[b].third - players[a].third;
    return firstPlaceDiff || secondPlaceDiff || thirdPlaceDiff;
  });

  return (
		<div className='w-full flex justify-center lg:justify-start'>
			<table className='mt-2 border border-collapse lg:mt-4'>
				<thead>
					<tr>
						<th className='border pl-1 text-lg lg:text-2xl lg:py-6 lg:px-6'>Jugador</th>
						<th className='border pl-1 text-lg lg:text-4xl lg:py-6 lg:px-6'><FontAwesomeIcon icon={faTrophy} className='text-gold px-1' /></th>
						<th className='border pl-1 text-lg lg:text-4xl lg:py-6 lg:px-6'><FontAwesomeIcon icon={faTrophy} className='text-silver px-1' /></th>
						<th className='border pl-1 text-lg lg:text-4xl lg:py-6 lg:px-6'><FontAwesomeIcon icon={faTrophy} className='text-bronze px-1' /></th>
					</tr>
				</thead>
				<tbody>
					{sortedPlayers.map((player, index) => (
						<tr key={index} className='text-base lg:text-xl'>
							<td className='px-1 py-1 border lg:px-4 lg:py-2'>{player}</td>
							<td className='px-1 py-1 border text-center lg:px-4 lg:py-2'>{players[player].first}</td>
							<td className='px-1 py-1 border text-center lg:px-4 lg:py-2'>{players[player].second}</td>
							<td className='px-1 py-1 border text-center lg:px-4 lg:py-2'>{players[player].third}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
  );
}
