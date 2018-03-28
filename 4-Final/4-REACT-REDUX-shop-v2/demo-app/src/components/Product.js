import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm';
import { connect } from 'react-redux';

import { loadReviews } from '../actions';
import { bindActionCreators } from 'redux';

class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tab: 1
        }
    }

    handleTabChange(tabIndex) {
        this.setState({
            tab: tabIndex
        });
    }

    renderBuyBtn() {
        let { product, onBuy } = this.props;
        if (product.canBuy) {
            return (<button onClick={() => { onBuy(product) }} className="btn btn-primary">buy</button>)
        } else {
            return null;
        }
    }

    renderReviews(product) {
        let { actions, reviews = [] } = this.props;
        return reviews.map((review, idx) => <Review review={review} key={idx} />);
    }

    renderTabPanel() {
        let { tab } = this.state;
        let { product, onNewReview } = this.props;
        let panel;
        switch (tab) {
            case 2:
                panel = <div className="panel"> <p>Not Yet</p></div>
                break;
            case 3:
                panel = (
                    <div className="panel">
                        {this.renderReviews(product)}
                        <ReviewForm productId={product.id} />
                    </div>
                )
                break;
            default:
                panel = <div className="panel"> <p>{product.description}</p></div>
        }
        return panel;
    }

    render() {
        let { tab } = this.state;
        let { product,actions } = this.props;
        return (
            <div>
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-xs-4 col-sm-3 col-md-3">
                            <img className="img-responsive" src={product.image} alt="product" />
                        </div>
                        <div className="col-xs-8 col-sm-9 col-md-9">
                            <h3>{product.name}</h3>
                            <h4>&#8377;{product.price}</h4>
                            {this.renderBuyBtn()}
                            <hr />
                            <ul className="nav nav-tabs">
                                <li className={classnames({ active: tab === 1, foo: true })}><a href="#" onClick={() => { this.handleTabChange(1) }}>Description</a></li>
                                <li className={classnames({ active: tab === 2, foo: false })}><a href="#" onClick={() => { this.handleTabChange(2) }}>Specification</a></li>
                                <li className={classnames({ active: tab === 3, foo: false })}><a href="#" onClick={() => { this.handleTabChange(3); actions.loadReviews(product.id); }}>Reviews</a></li>
                            </ul>
                            {this.renderTabPanel()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    onBuy: PropTypes.func
}


function mapStateToProps(state, props) {
    let productId = props.product.id;
    let reviews = state.reviews[productId];
    return { reviews };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ loadReviews }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);