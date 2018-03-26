import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Message extends Component {
    constructor(props) {
        super(props)
        console.log('Message::constructor');
    }
    componentWillMount() {
        console.log('Message::componentWillMount');
    }
    render() {
        console.log('Message::render');
        let { message } = this.props;
        return (
            <div className="alert alert-info">
                {message} <button onClick={() => { this.forceUpdate() }}><span className="glyphicon glyphicon-refresh"></span></button>
            </div>
        );
    }
    componentDidMount() {
        console.log('Message::componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Message::componentWillReceiveProps');
        // console.dir(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Message::shouldComponentUpdate');
        if (this.props.message === nextProps.message) return false;
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Message::componentWillUpdate');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Message::componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('Message::componentWillUnmount');
    }


}
Message.defaultProps = {
    message: 'greetings'
}
Message.propTypes = {
    message: PropTypes.string.isRequired
}
Message.displayName = "greet-message";

export default Message;