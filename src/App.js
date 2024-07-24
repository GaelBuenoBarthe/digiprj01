import 'bootstrap/dist/css/bootstrap.min.css';
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
  let onCallBack = (e) => {console.log("App: ")}

  return (
    <div>
      <Tick message="Horloge Digi 2024-M05"
        cb={onCallBack}
      />
    </div>
  );
}

export default App;
