import React, { useState } from 'react'
import ConfigMenu from '../components/Configuration/ConfigMenu'
import ChipsConfig from '../components/Configuration/ChipsConfig';
import TimeConfig from '../components/Configuration/TimeConfig';
import PlayersConfig from '../components/Configuration/PlayersConfig';
import MoneyConfig from '../components/Configuration/MoneyConfig';


export default function Configuration(props) {
	const {players, setPlayers, openConfig, setOpenConfig, time, setTime, reentry, setReentry, entry, setEntry, startingLevel, setStartingLevel, eliminatedPlayers, setEliminatedPlayers, setInGameChips, setPlayerChips, winners, setWinners, firstPercentage, setFirstPercentage, secondPercentage, setSecondPercentage, thirdPercentage, setThirdPercentage} = props
	const [chipsOpen, setChipsOpen] = useState(false)
	const [timeOpen, setTimeOpen] = useState(false)
	const [playersOpen, setPlayersOpen] = useState(false)
	const [moneyOpen, setMoneyOpen] = useState(false)
	const sectionsClass  = 'pl-8 py-10 bg-slate-700 text-xl'
	
	return (
		<div className="ConfigurationBox | absolute w-full z-20 flex flex-col items-start text-2xl font-normal text-white bg-slate-800">
			<ConfigMenu 
				openConfig={openConfig} setOpenConfig={setOpenConfig} 
				chipsOpen={chipsOpen} setChipsOpen={setChipsOpen} 
				timeOpen={timeOpen} setTimeOpen={setTimeOpen}
				playersOpen={playersOpen} setPlayersOpen={setPlayersOpen}
				moneyOpen={moneyOpen} setMoneyOpen={setMoneyOpen}
			/>

			{playersOpen ? <PlayersConfig players={players} setPlayers={setPlayers} className={sectionsClass} reentry={reentry} setReentry={setReentry} eliminatedPlayers={eliminatedPlayers} setEliminatedPlayers={setEliminatedPlayers} /> : null}

			{moneyOpen ? <MoneyConfig className={sectionsClass} entry={entry} setEntry={setEntry} winners={winners} setWinners={setWinners} firstPercentage={firstPercentage} setFirstPercentage={setFirstPercentage} secondPercentage={secondPercentage} setSecondPercentage={setSecondPercentage} thirdPercentage={thirdPercentage} setThirdPercentage={setThirdPercentage} /> : null}

			{timeOpen ? <TimeConfig time={time} setTime={setTime} className={sectionsClass} startingLevel={startingLevel} setStartingLevel={setStartingLevel} /> : null}

			{chipsOpen ? <ChipsConfig players={players} className={sectionsClass} setInGameChips={setInGameChips} reentry={reentry} setPlayerChips={setPlayerChips} /> : null}

		</div>
	)
}
