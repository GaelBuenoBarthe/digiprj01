import React from "react";

export default class MonForm02 extends React.Component {
    constructor(props) {
        super(props);
        this.inputNom = React.createRef();
    }

    onSubmitForm02=(e)=>{
        e.preventDefault();
        console.log(this.inputNom.current.value);
    }

    render(){
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>Nom:</label>
                <input type="texte" name="nom" ref={this.inputNom} placeholder="Entrez votre nom" required/>
                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        )
    }
}