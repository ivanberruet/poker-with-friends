import Game from "./mainComponents/Game";
import Statistics from "./mainComponents/Statistics";
import TournamentInfo from "./mainComponents/TournamentInfo";
function App() {
  return (
    <div className="App | flex flex-col bg-gray-950">
			<Game />
			<TournamentInfo />
			<Statistics />
		</div>
  );
}

export default App;
