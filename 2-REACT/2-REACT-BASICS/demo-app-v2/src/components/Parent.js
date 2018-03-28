import React, { Component } from 'react';
import Child from './Child';
import PropTypes from 'prop-types';

class Parent extends Component {
    constructor(props) {
        super(props);
    }

    getChildContext() {
        return { color: "purple", message: "this is from parent-context" };
    }

    render() {
        return (
            <div className="well">
                <span className="badge">parent</span>
                <Child />
            </div>
        );
    }
}

Parent.childContextTypes = {
    color: PropTypes.string,
    message: PropTypes.string
};

export default Parent;