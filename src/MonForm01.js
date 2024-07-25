import React, { Component } from 'react';

class MonForm01 extends Component {
    constructor(props) {
        super(props);
        this.state = {nom: '',prenom: '',email: '',age: ''};
    }

    handleChangeNom = (e) => {
        this.setState({nom: e.target.value});
    }
    
    handleChangePrenom = (e) => {
        this.setState({prenom: e.target.value});
    }
    
    handleChangeEmail = (e) => {
        this.setState({email: e.target.value});
    }
    
    handleChangeAge = (e) => {
        this.setState({age: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { nom, prenom, age } = this.state;
        console.log('Nom : ' + nom + ' Prenom : ' + prenom + ' Email : ' + this.state.email + ' Age : ' + age);
    }
    
    render() {
        return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="card rounded-3" style={{
                width: "30rem",
                borderRadius: "20px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                backgroundImage: "url('/form.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="card-body d-flex-col">
                    <h5 className="flex card-title text-center" style={{color: 'white'}}>Formulaire</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group mt-3">
                            <label style={{fontWeight: "bold", color: 'white'}}>Nom:</label>
                            <input type="text" name="nom" className="form-control"  style={{
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                            border: "1px solid #fff",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            color: "#000"
                        }} value={this.state.nom} onChange={this.handleChangeNom} placeholder='Entrez votre nom' required />
                        </div>
                        <div className="form-group mt-3">
                            <label style={{fontWeight: "bold", color: 'white'}}>Prénom:</label>
                            <input type="text" name="prenom" className="form-control"  style={{
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                            border: "1px solid #fff",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            color: "#000"
                        }} value={this.state.prenom} onChange={this.handleChangePrenom} placeholder='Entrez votre prénom' required />
                        </div>
                        <div className="form-group mt-3">
                            <label style={{fontWeight: "bold", color: 'white'}}>Âge:</label>
                            <input type="number" name="age" min='18' max='65' className="form-control" style={{
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                            border: "1px solid #fff",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            color: "#000"
                        }}  value={this.state.age} onChange={this.handleChangeAge} placeholder='Entrez votre âge' required/>
                        </div>
                        <div className="form-group mt-3">
                            <label style={{fontWeight: "bold", color: 'white'}}>Email:</label>
                            <input type="email" className="form-control" style={{
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                            border: "1px solid #fff",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            color: "#000"
                        }}  value={this.state.email} onChange={this.handleChangeEmail} placeholder='Entrez votre Email' required/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
                            <button type="submit" className="btn btn-primary hover-primary-dark">Soumettre</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>      
        );
    }
}

export default MonForm01;