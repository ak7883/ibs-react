import React, { Component } from 'react';
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
        let { value, onHit } = this.props;
        this.setState({
            count: this.state.count + Number.parseInt(value)
        });
        onHit(e, value); // Emitting event
    }
    render() {
        console.log('HitButton-component rendered..');
        let { value } = this.props;
        let { count } = this.state;
        return (
            <div style={{ float: 'left' }}>
                <div className="well">
                    <button onClick={(e) => { this.handleBtnClick(e) }} className="btn btn-danger">
                        {value}   =>  <span className="badge">{count}</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default HitButton;