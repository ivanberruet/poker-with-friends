import Body from "./mainComponents/Body";
import TournamentInfo from "./components/TournamentInfo";
function App() {
  return (
    <div className="App | flex flex-col">
			<div className="Container | min-h-screen flex flex-col">
				<Body />
			</div>
			<TournamentInfo />
    </div>
  );
}

export default App;
