
import './App.css';
import Tick from './Tick';



/**
 * Comp01 est un composant react (JSX))
 * @returns un render
 */
function Comp01(props) {
  return(<h1>{props.message}</h1>)
}

function App() {
  return (
    <div>
      <Comp01 message="Digi 01"/>
      <Tick date={new Date().toLocaleTimeString()}/>
    </div>
  );
}

export default App;
