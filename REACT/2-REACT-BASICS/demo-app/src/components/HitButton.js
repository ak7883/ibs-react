import React, { Component } from 'react';
import './HitButton.css'
class HitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('HitButton-component instantiated..');
        //this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    handleBtnClick(e) {
        this.setState({
            count: this.state.count + 1
        });
        let onHit = this.props.onHit;
        onHit(e); // Emitting event
    }
    render() {
        console.log('HitButton-component rendered..');
        let { label } = this.props;
        let { count } = this.state;
        return (
            <div className="well hit-button">
                <button onClick={(e) => { this.handleBtnClick(e) }} className="btn btn-danger">
                    {label}   ==>  <span className="badge">{count}</span>
                </button>
            </div>
        );
    }
}

export default HitButton;