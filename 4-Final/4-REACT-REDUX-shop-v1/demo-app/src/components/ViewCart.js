import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class ViewCart extends Component {

    renderItems() {
        let { items } = this.props;
        return items.map((item, idx) => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Items in cart</div>
                <div className="panel-body">
                    <table className="table table-bordered">
                        <tbody>
                            {this.renderItems()}
                        </tbody>
                    </table>
                    <button className="btn btn-default pull-right">checkout</button>
                </div>
            </div>
        );
    }
}

ViewCart.propTypes = {
    items: PropsTypes.array.isRequired
}

export default ViewCart;