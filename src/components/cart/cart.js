import React from 'react';
import './cart.css';
import { Link } from "react-router-dom";

class Cart extends React.Component {

    removeDrink = (e) => {
        e.preventDefault();
        this.props.removeDrink(e.target.id.value);
    };

    render() {
        return (
            <div className="container">
                <h1>Coffee Time</h1>

                <Link style={{ textDecoration: 'none' }} className="cart-link" to="/shop">Магазын</Link>
                <div style={{ 'flexWrap': 'wrap' }} className="d-flex align-items-center justify-content-between">
                    {this.props.drinks.map((elem, i) =>
                        <form key={i} onSubmit={this.removeDrink}>
                            <input type="hidden" name="id" value={i}/>
                            <div style={{ 'marginTop': '20px' }} className="cup">
                                <img style={{ 'width': '100%' }} src={elem.img} alt="cup"/>
                                <p style={{ 'color': 'black', 'fontSize': '15px' }}>{elem.name}</p>
                                <p style={{ 'color': 'black', 'fontSize': '15px' }}>{elem.sugar} Сахара</p>
                                <button className="btn btn-outline-danger">Удалить</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        );
    }

}

export default Cart;
