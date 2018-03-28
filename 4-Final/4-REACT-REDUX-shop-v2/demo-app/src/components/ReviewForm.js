import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addNewReview } from '../actions';
import { bindActionCreators } from 'redux';

class ReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            stars: 5,
            author: '',
            comment: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggelForm() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleInputChange(event) {
        let target = event.target;
        let name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        let newReview = {
            stars: this.state.stars,
            author: this.state.author,
            comment: this.state.comment,
        }

        let { actions, productId } = this.props;
        actions.addNewReview(newReview, productId);

        this.setState({
            isOpen: false,
            stars: 5,
            author: '',
            comment: ''
        });

    }

    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen) {
            return <button onClick={() => { this.toggelForm() }} className="btn btn-default"><span className="glyphicon glyphicon-plus"></span></button>
        } else {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Review Form</div>
                    <div className="panel-body">
                        <form noValidate onSubmit={(e) => { this.handleFormSubmit(e) }}>
                            <div className="form-group">
                                <label> Stars </label>
                                <select value={this.state.stars} ref="stars" name="stars" onChange={this.handleInputChange} className="form-control">
                                    {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                                </select>
                                {this.state.stars < 4 ? 'stars must be > 4' : ''}
                            </div>
                            <div className="form-group">
                                <label> Author </label>
                                <input value={this.state.author} ref="author" name="author" onChange={this.handleInputChange} type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label> Comment </label>
                                <textarea defaultValue={this.state.comment} ref="comment" name="comment" onChange={this.handleInputChange} className="form-control">
                                </textarea>
                            </div>
                            <button className="btn btn-primary">submit</button>
                            <button onClick={() => { this.toggelForm() }} type="button" className="btn btn-danger">cancel</button>
                        </form>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}



function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ addNewReview }, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(ReviewForm);