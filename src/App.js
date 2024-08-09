import { createContext, useEffect, useState } from 'react';
import Game from "./mainComponents/Game";
import Game2 from './mainComponents/Game2';
import Statistics from "./mainComponents/Statistics";
import Info from "./mainComponents/Info";
import Menu from './mainComponents/Menu';
import ConfigurationIcon from './components/Configuration/ConfigurationIcon';
import {BOX_IVAN} from "../src/data/Chips/BOX_IVAN";
import {BOX_LUCA} from "../src/data/Chips/BOX_LUCA";
import {BOX_IVAN_SILVIO} from "../src/data/Chips/BOX_IVAN_SILVIO";
import {SUITCASE_IVAN} from "../src/data/Chips/SUITCASE_IVAN";
import {SUITCASE_BRENDA} from "../src/data/Chips/SUITCASE_BRENDA";
import {SUITCASE_SEBA_B} from "../src/data/Chips/SUITCASE_SEBA_B";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

export const TimeContext = createContext(null);

function App() {
const [openNavBar, setOpenNavBar] = useState(false)
const [players, setPlayers] = useState({activePlayers: [], eliminatedPlayers: []})
const [entryValue, setEntryValue] = useState(5000)
const [poolSize, setPoolSize] = useState(0)
const [prizes, setPrizes] = useState({winners: 2, percenteges:[70,30]})
const [timePerLevel, setTimePerLevel] = useState(15)
const [levelInfo, setLevelInfo] = useState({startingLevel:1, currentLevel:1})
const [chips, setChips] = useState({
	inGame: 0, 
	average: 0,
	available: [BOX_IVAN, BOX_LUCA, BOX_IVAN_SILVIO, SUITCASE_IVAN,SUITCASE_BRENDA, SUITCASE_SEBA_B],
	toBeUsed: {},
})
const [theme, setTheme] = useState("Blue")

const [gameTimeSeconds, setGameTimeSeconds] = useState(0)
const [gameTimeMinutes, setGameTimeMinutes] = useState(0)
const [gameTimeHours, setGameTimeHours] = useState(0)

const [thereIsWinner, setThereIsWinner] = useState(false)

const [isStarted, setIsStarted] = useState(false);
const [startTime, setStartTime] = useState(null);
const [startDate, setStartDate] = useState(null);

function saveInfo(data){
	// Add one line to the sheet
	fetch("https://sheetdb.io/api/v1/kikoenwo2po1j", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},

		body: JSON.stringify(data),
	})
		.then((r) => r.json())
		.then((data) => {
			// The response comes here
			console.log(data);
		})
		.catch((error) => {
			// Errors are reported there
			console.log(error);
		});	

}

async function sendEmail(finalPositions) {
	emailjs.init("bGX9fGQnqNMQiArIr")
	const serviceId = "service_ztie9j8";
	const templateId = "template_htmql9m";
	const params = {
		winner: finalPositions[0].name,
		second: finalPositions[1].name,
		third: finalPositions[2].name
	}
	try {
		await emailjs.send(serviceId, templateId, params);
		toast.success("Resultados enviados al buzón de entrada");
	} catch (error) {
		console.log(error);
	} 
}


// Debug
// console.log("App - players", players);
// console.log("App - chips", chips);
// console.log("App - levelInfo", levelInfo);
// console.log("App - startDate", startDate);

useEffect(() => {
	if (isStarted){
		document.getElementById('StartButton').classList.add('hidden')
		setStartTime(new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}))
		setStartDate(new Date().toLocaleDateString())
	}
},[isStarted])

useEffect(() => {
	if (thereIsWinner) {
		const finishTime = new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false})
		
		let finalResults = [
			{...players.activePlayers[0], 
				inGameTime: ` ${gameTimeHours < 10 ? "0" : ""}${gameTimeHours}:${ gameTimeMinutes < 10 ? "0" : ""}${gameTimeMinutes}:${ gameTimeSeconds < 10 ? "0" : ""}${gameTimeSeconds}`, //Tiempo neto de juego
				eliminatedTime: "-" //Hora de eliminación
			},
			...players.eliminatedPlayers
		]
		
		let data = finalResults.map((player, index) => {
			let prize = 0
			if(index === 0){prize = prizes.percenteges[0]*poolSize/100}
			else if(index === 1){prize = prizes.percenteges[1]*poolSize/100}

			if(prizes.winners === 3 && index === 2){prize = prizes.percenteges[2]*poolSize/100}


			return {
				"Fecha": startDate,
				"Inicio": startTime,
				"Final": finishTime,
				"Posición": index+1,
				"Jugador": player.name,
				"Reentrada": player.reentry ? "Si" : "No",
				"Eliminado": player.eliminatedTime,
				"Neto": player.inGameTime,
				"Premio": prize,
			}
		})

		// Testing data
		// data ={
		// 	"Fecha": "2022-11-30",
		// 	"Posición": 1,
		// 	"Jugador": "Ivan",
		// 	"Reentrada": "Si",
		// 	"Inicio": "11:00",
		// 	"Eliminado": "11:30",
		// 	"Final": "11:30",
		// 	"Neto": "11:00"
		// }
				
		console.log(data);
		
		saveInfo(data)
		
		sendEmail(finalResults)
		
	}
}, [thereIsWinner])


return (
    <div className="App | w-full flex flex-col bg-gray-950">
			<ConfigurationIcon openNavBar={openNavBar} setOpenNavBar={setOpenNavBar} className={theme==="Original" ? "right-8" : "right-[50%] translate-x-[50%]"} />
			{openNavBar ? 
			<TimeContext.Provider value={{gameTimeHours: gameTimeHours, gameTimeMinutes: gameTimeMinutes, gameTimeSeconds: gameTimeSeconds}} >
			<Menu openNavBar={openNavBar} setOpenNavBar={setOpenNavBar}
				players={players} setPlayers={setPlayers}
				poolSize={poolSize} setPoolSize={setPoolSize}
				prizes={prizes} setPrizes={setPrizes}
				entryValue ={entryValue} setEntryValue={setEntryValue}
				timePerLevel={timePerLevel} setTimePerLevel={setTimePerLevel}
				levelInfo={levelInfo} setLevelInfo={setLevelInfo}
				chips={chips} setChips={setChips}
				theme={theme} setTheme={setTheme}
				thereIsWinner={thereIsWinner} setThereIsWinner={setThereIsWinner}
			/> 
			</TimeContext.Provider> 
			: null
			}
			{
				theme === "Original"
				? <Game players={players} poolSize={poolSize} prizes={prizes} timePerLevel={timePerLevel} levelInfo={levelInfo} setLevelInfo={setLevelInfo} chips={chips} />
				: <Game2 players={players}
					poolSize={poolSize} 
					prizes={prizes} 
					timePerLevel={timePerLevel} 
					levelInfo={levelInfo} setLevelInfo={setLevelInfo} 
					chips={chips} 
					gameTimeSeconds={gameTimeSeconds} setGameTimeSeconds={setGameTimeSeconds} 
					gameTimeMinutes={gameTimeMinutes} setGameTimeMinutes={setGameTimeMinutes} 
					gameTimeHours={gameTimeHours} setGameTimeHours={setGameTimeHours}
					isStarted={isStarted} setIsStarted={setIsStarted}
				/>
			}
			<Info timePerLevel={timePerLevel} prizes={prizes} entryValue={entryValue} />

			<Statistics />
		</div>
  );
}

export default App;
