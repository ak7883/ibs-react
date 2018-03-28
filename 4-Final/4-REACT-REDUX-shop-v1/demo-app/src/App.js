import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Product from './components/Product';
import ViewCart from './components/ViewCart';

import * as actions from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      viewCart: false,
      cart: [],
      products: []
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

  addNewReview(productId, newReview) {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id === productId) {
          product.reviews = product.reviews.concat(newReview)
          return product;
        } else {
          return product;
        }
      })
    });
  }

  renderProducts() {
    let { products, viewCart, cart } = this.state;
    if (viewCart) {
      return <ViewCart items={cart} />
    } else
      return products.map((product, idx) => {
        return (
          <Product key={idx} product={product} onNewReview={(productId, newReview) => { this.addNewReview(productId, newReview) }} onBuy={(item) => { this.addToCart(item) }} />
        )
      });
  }

  componentDidMount() {
    // fetch('http://0.0.0.0:8080/api/products')
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(products => {
    //     this.setState({ products })
    //   });
    const store = this.props.store;

    let message = store.getState().status.message;
    this.setState({ message });

    store.subscribe(() => {
      let products = store.getState().products;
      let message = store.getState().status.message;
      this.setState({ products, message });
    });
    store.dispatch(actions.loadProducts());
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

export default App;
