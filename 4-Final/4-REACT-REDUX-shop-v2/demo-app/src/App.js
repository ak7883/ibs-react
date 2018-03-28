import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Product from './components/Product';
import ViewCart from './components/ViewCart';

import { loadProducts } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      viewCart: false,
      cart: [],
    }
  }

  toggleCart() {
    this.setState({
      viewCart: !this.state.viewCart
    });
  }

  addToCart(item) {
    this.setState({
      cart: this.state.cart.concat(item)
    });
  }


  renderProducts() {
    let { viewCart, cart } = this.state;
    let { products } = this.props;
    if (viewCart) {
      return <ViewCart items={cart} />
    } else
      return products.map((product, idx) => {
        return (
          <Product key={idx} product={product} onBuy={(item) => { this.addToCart(item) }} />
        )
      });
  }

  componentDidMount() {
    let { actions } = this.props;
    actions.loadProducts();
  }

  render() {
    let { title } = this.props;
    let { cart } = this.state;
    return (
      <div className="container">
        <div className="page-header">{title}</div>
        <span className="badge">{cart.length}</span> item(s) in cart  | <a href="#" onClick={() => this.toggleCart()}> {this.state.viewCart ? 'View Products' : 'View Cart'}</a>
        <hr />
        <div className="list-group">
          {this.state.message}
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}
App.defaultProps = {
  title: 'shopIT'
}

function mapStateToProps(state) {
  let products = state.products;
  return { products }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadProducts }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
