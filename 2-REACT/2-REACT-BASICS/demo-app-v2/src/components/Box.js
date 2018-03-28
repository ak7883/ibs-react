import React, { Component } from 'react';

class Box extends Component {
    renderChildren() {
        let { children } = this.props;
        let childComps = children.map(child => {
            return (
                <div className="list-group-item">
                    {child}
                </div>
            );
        });
        return childComps;
    }
    render() {
        return (
            <div className="well">
                <div className="list-group">
                    {this.renderChildren()}
                </div>
            </div>
        );
    }
}

export default Box;