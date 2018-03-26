import React, { Component } from 'react';

class TotalHitCountDisplay extends Component {
    constructor(props) {
        super(props);
        console.log('TotalHitCountDisplay-component instantiated..');
    }
    render() {
        console.log('TotalHitCountDisplay-component rendered..');
        let { value } = this.props;
        return (
            <div className="alert alert-info">
                Total Hit Count : <span>{value}</span>
            </div>
        );
    }
}

export default TotalHitCountDisplay;