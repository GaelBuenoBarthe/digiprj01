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

    onStop =(e)=> {this.componentWillUnmount()}
    onStart =(e)=> {this.componentDidMount()}

    render () {
        return (
            <div className="d-flex justify-content-center flex-column align-items-center">
                <h1 className="text-center">{this.props.message}</h1>
                <h2 className="text-center">il est :{new Date().toLocaleTimeString()}.
                </h2>
                <div>
                    <button onClick={this.onStop} className="btn btn-danger">Stop</button>
                    <button onClick={this.onStart} className="btn btn-primary">Start</button>
                </div>
                <br/>
                <button onClick={this.props.cb} className="btn btn-warning">App</button>
            </div>
        );
    }
}

export default Tick;