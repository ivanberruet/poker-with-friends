import React, { useEffect, useState } from 'react'
import NavBar from '../components/Configuration/NavBar'
import ChipsConfig from '../components/Configuration/ChipsConfig';
import TimeConfig from '../components/Configuration/TimeConfig';
import PlayersConfig from '../components/Configuration/PlayersConfig';
import MoneyConfig from '../components/Configuration/MoneyConfig';
import handleChipsTobeUsed from '../utils/handleChipsTobeUsed'
import ThemeConfig from '../components/Configuration/ThemeConfig';


export default function Menu(props) {
	const {openNavBar, setOpenNavBar, players, setPlayers, poolSize, setPoolSize, prizes, setPrizes, entryValue, setEntryValue, timePerLevel, setTimePerLevel, levelInfo, setLevelInfo, chips, setChips, theme, setTheme, thereIsWinner, setThereIsWinner} = props

	//Nav Links
	const [chipsOpen, setChipsOpen] = useState(false)
	const [timeOpen, setTimeOpen] = useState(false)
	const [playersOpen, setPlayersOpen] = useState(false)
	const [moneyOpen, setMoneyOpen] = useState(false)
	const [themeOpen, setThemeOpen] = useState(false)

	const sectionsClass  = 'p-8 bg-slate-700 text-xl min-h-screen'
	
	useEffect(() => {
		// console.log("Menu - Executing useEffect");
		let registeredPlayers = players.activePlayers.length+players.eliminatedPlayers.length
		let activeReentryPlayers = players.activePlayers.filter(p => p.reentry).length
		let eliminatedReentryPlayers = players.eliminatedPlayers.filter(p => p.reentry).length
		let reentryPlayers = activeReentryPlayers+eliminatedReentryPlayers
		
		// console.log("Menu - registeredPlayers",registeredPlayers);
		// console.log("Menu - activePlayers",players.activePlayers.length);
		// console.log("Menu - reentryPlayers",reentryPlayers);
		
		setChips(
			{...chips, 
				toBeUsed: handleChipsTobeUsed(chips, players),
				inGame: (registeredPlayers+reentryPlayers) * handleChipsTobeUsed(chips, players)[0].value,
				average: players.activePlayers.length > 0 ? Math.floor((registeredPlayers+reentryPlayers) * handleChipsTobeUsed(chips, players)[0].value /  players.activePlayers.length) : 0
			}
		)
	}, [players, chips.available])

	// console.log("Menu - chips", chips);

	return (
		<div className="ConfigurationBox | absolute w-full z-20 flex flex-col items-start text-base md:text-2xl font-normal text-white bg-slate-800">
			<NavBar openNavBar={openNavBar} setOpenNavBar={setOpenNavBar} 
				chipsOpen={chipsOpen} setChipsOpen={setChipsOpen} 
				setTimeOpen={setTimeOpen}
				setPlayersOpen={setPlayersOpen}
				setMoneyOpen={setMoneyOpen}
				setThemeOpen={setThemeOpen}
			/>

			{playersOpen ? <PlayersConfig className={sectionsClass} players={players} setPlayers={setPlayers} entryValue={entryValue} setPoolSize={setPoolSize} thereIsWinner={thereIsWinner} setThereIsWinner={setThereIsWinner} /> : null}

			{moneyOpen ? <MoneyConfig className={sectionsClass} entryValue={entryValue} setEntryValue={setEntryValue} prizes={prizes} setPrizes={setPrizes} players={players} poolSize={poolSize} setPoolSize={setPoolSize} /> : null}

			{timeOpen ? <TimeConfig className={sectionsClass} timePerLevel={timePerLevel} setTimePerLevel={setTimePerLevel} levelInfo={levelInfo} setLevelInfo={setLevelInfo} /> : null}

			{chipsOpen ? <ChipsConfig className={sectionsClass} chips={chips} setChips={setChips} players={players} /> : null} 

			{themeOpen ? <ThemeConfig className={sectionsClass} theme={theme} setTheme={setTheme} /> : null}

		</div>
	)
}
