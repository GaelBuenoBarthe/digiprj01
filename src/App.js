import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MonForm01 from './MonForm01';
import MonForm02 from './MonForm02';
import MonForm03 from './MonForm03';
import MonComposant04 from './MonComposant04';



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
      <Comp01 message="Tests React"/>
      <MonForm01/>
      <MonComposant04/>

    </div>
  );
}

export default App;
