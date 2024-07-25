import React ,{useState} from "react";

export default function MonComposant04() {
    let [count, setCount] = useState(1);
    return [
        <div>
            <h1>Hooks :{count}</h1>
            <button className="btn btn-primary hover-primary-dark" onClick={() => setCount(count + 1)}>Incrémenter</button>
            <button className="btn btn-danger hover-danger-dark" onClick={() => setCount(count - 1)}>Décrémenter</button>
        </div>
    ]
}
