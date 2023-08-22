import Body from "./mainComponents/Body";
import Header from "./mainComponents/Header";
import TournamentInfo from "./components/TournamentInfo";
function App() {
  return (
    <div className="App | flex flex-col">
			<div className="Container | min-h-screen flex flex-col">
				<Header />
				<Body />
			</div>
			<TournamentInfo />
    </div>
  );
}

export default App;
