import React, { Component } from 'react';
import GrandChild from './GrandChild';

class Child extends Component {
    render() {
        return (
            <div className="well">
                  <span className="badge">child</span>
                  <GrandChild />
            </div>
        );
    }
}

export default Child;