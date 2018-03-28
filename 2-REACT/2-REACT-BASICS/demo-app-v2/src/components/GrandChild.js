import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GrandChild extends Component {
    render() {
        return (
            <div className="well">
                <span className="badge">grand-child</span>
                <hr />
                {this.context.color} - 
                {this.context.message}
            </div>
        );
    }
}

GrandChild.contextTypes = {
    color: PropTypes.string,
    message: PropTypes.string
};

export default GrandChild;