import React from "react";
import MonForm01 from './MonForm01';

export default class MonForm02 extends React.Component {
    constructor(props) {
        super(props);
        this.monForm = React.createRef();
    }

    onSubmitForm02=(e)=>{
        e.preventDefault();
        console.log(this.monForm.current.nom);
    }

    render(){
        return (
            <form onSubmit={this.onSubmitForm02} ref={this.monForm}>
                <label>Nom:</label>
                <input type="texte" name="nom" ref={this.inputNom} placeholder="Entrez votre nom" required/>
                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        )
    }
}