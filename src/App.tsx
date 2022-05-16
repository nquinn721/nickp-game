import "./App.css";
import GameView from "./components/GameView";
import { Game } from "./game/Game";
function App() {
  const game = new Game();
  return (
    <div className="App">
      <GameView game={game} />
    </div>
  );
}
export default App;
