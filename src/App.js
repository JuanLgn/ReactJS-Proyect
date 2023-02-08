import './App.css';
import { FunctionalComponent, FunctionalComponentBootstrap } from './components/FunctionalComponents/NavBar';


function App() {
  return (
    <div className="App">
      <FunctionalComponentBootstrap></FunctionalComponentBootstrap>
      <header className="App-header">
        <FunctionalComponent/>
      </header>
      
    </div>
  );
}

export default App;
