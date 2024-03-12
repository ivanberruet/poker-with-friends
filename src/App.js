import { useEffect, useState } from 'react';
import Game from "./mainComponents/Game";
import Statistics from "./mainComponents/Statistics";
import TournamentInfo from "./mainComponents/TournamentInfo";
import Configuration from './mainComponents/Configuration';
import ConfigurationIcon from './components/Configuration/ConfigurationIcon';
import { BOX_SM } from './data/Chips/BOX_SM';
import { BOX_MD } from './data/Chips/BOX_MD';
import { SUITCASE_SM } from './data/Chips/SUITCASE_SM';
import { SUITCASE_MD } from './data/Chips/SUITCASE_MD';
import { SUITCASE_LG } from './data/Chips/SUITCASE_LG';
import chipsDistribution from './utils/chipsDistribution';
function App() {
let chips = [BOX_SM, BOX_MD, SUITCASE_SM,SUITCASE_MD, SUITCASE_LG];

const [openConfig, setOpenConfig] = useState(false)
const [players, setPlayers] = useState(13)
const [reentry, setReentry] = useState(0)
const [eliminatedPlayers, setEliminatedPlayers] = useState(0)
const [entry, setEntry] = useState(5000)
const [time, setTime] = useState(15)
const [startingLevel, setStartingLevel] = useState(0)
const [playerChips, setPlayerChips] = useState(chipsDistribution(players,chips)[3])
const [winners, setWinners] = useState(3)
const [firstPercentage, setFirstPercentage] = useState(65)
const [secondPercentage, setSecondPercentage] = useState(25)
const [thirdPercentage, setThirdPercentage] = useState(10)

useEffect(() => {
	setPlayerChips(chipsDistribution(players,chips)[3])
}, [players])

let configurationIconProps = {openConfig,setOpenConfig}
let configurationProps = {
	players,
	setPlayers,
	openConfig,
	setOpenConfig,
	time,
	setTime,
	reentry,
	setReentry,
	entry,
	setEntry,
	startingLevel,
	setStartingLevel,
	eliminatedPlayers,
	setEliminatedPlayers,
	setPlayerChips,
	winners,
	setWinners,
	firstPercentage,
	setFirstPercentage,
	secondPercentage,
	setSecondPercentage,
	thirdPercentage,
	setThirdPercentage,
}
let gameProps = {
	time,
	players,
	startingLevel,
	eliminatedPlayers,
	entry,
	reentry,
	playerChips,
	winners,
	firstPercentage,
	secondPercentage,
	thirdPercentage
}
let tournamentInfoProps = {
	entry,
	winners,
	firstPercentage,
	secondPercentage,
	thirdPercentage,
	time
}

return (
    <div className="App | flex flex-col bg-gray-950">
			{/* <ConfigurationIcon openConfig={openConfig} setOpenConfig={setOpenConfig} /> */}
			<ConfigurationIcon {...configurationIconProps} />
			{openConfig ? <Configuration {...configurationProps}/> : null}

			<Game {...gameProps} />
			
			<TournamentInfo {...tournamentInfoProps}/>
			
			<Statistics />
		</div>
  );
}

export default App;
