import React from 'react';

class Tick extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

/**
 * Lorsque je monte le composant apres l appel du constructeur
 */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

/**
 * Lorsque je demonte le composant
 */
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render () {
    return (
        <div>
            <h1>Horloge</h1>
            <h2>il est :{new Date().toLocaleTimeString()}.
            </h2>
        </div>
        );
    }
}

export default Tick;