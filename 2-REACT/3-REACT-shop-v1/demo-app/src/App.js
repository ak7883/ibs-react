import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import classnames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac Pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          id: 2,
          name: 'Mobile',
          price: 18000,
          description: 'New  Pro',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    }
  }

  handleTabChange(tabIndex) {
    this.setState({
      tab: tabIndex
    });
  }

  renderBuyBtn(product) {
    if (product.canBuy) {
      return (<button className="btn btn-primary">buy</button>)
    } else {
      return null;
    }
  }
  renderTabPanel(product) {
    let { tab } = this.state;
    let panel;
    switch (tab) {
      case 2:
        panel = <div className="panel"> <p>Not Yet</p></div>
        break;
      case 3:
        panel = <div className="panel"> <p>None Yet</p></div>
        break;
      default:
        panel = <div className="panel"> <p>{product.description}</p></div>
    }
    return panel;
  }

  renderProducts() {
    let { products, tab } = this.state;
    return products.map((product, idx) => {
      return (
        <div className="list-group-item" key={idx}>
          <div className="row">
            <div className="col-xs-4 col-sm-3 col-md-3">
              <img className="img-responsive" src={product.image} alt="product" />
            </div>
            <div className="col-xs-8 col-sm-9 col-md-9">
              <h3>{product.name}</h3>
              <h4>&#8377;{product.price}</h4>
              {this.renderBuyBtn(product)}
              <hr />
              <ul className="nav nav-tabs">
                <li className={classnames({active:tab===1,foo:true})}><a href="#" onClick={() => { this.handleTabChange(1) }}>Description</a></li>
                <li className={classnames({active:tab===2,foo:false})}><a href="#" onClick={() => { this.handleTabChange(2) }}>Specification</a></li>
                <li className={classnames({active:tab===3,foo:false})}><a href="#" onClick={() => { this.handleTabChange(3) }}>Reviews</a></li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    let { title } = this.props;
    return (
      <div className="container">
        <div className="page-header">{title}</div>
        <div className="list-group">
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
