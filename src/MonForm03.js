import React from "react";

export default class MonForm03 extends React.Component {
    constructor(props) {
        super(props);
        this.numbers = [15,23,5,8,31]
    }

    creerListe = () => <ol> {this.creerItems()} </ol>
    creerItems = () => this.numbers.map(number => <li key={number.toString()}>{number}</li>)

    render() {
        return (
            <div>
                {this.creerListe()}   
            </div>
        )
    }
}
