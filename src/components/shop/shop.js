import React from 'react';
import './shop.css';
import { Link } from "react-router-dom";
import Modal from '../modal/modal';

class Shop extends React.Component {

    state = {
        drinks: [
            {
                name: 'Коктель "ГрЯзный ДениС"',
                img: '../img/Layer 2 (2).jpg'
            },
            {
                name: 'Еспрэсо',
                img: '../img/Layer 2 (2).jpg'
            },
            {
                name: 'Виски с кофе',
                img: '../img/Layer 2 (2).jpg'
            },
            {
                name: 'Коктель "Коктель"',
                img: '../img/Layer 2 (2).jpg'
            }
        ]
    };

    addToCart = (e) => {
        e.preventDefault();
        let val = {
            name: e.target.name.value,
            img: e.target.img.value,
            sugar: e.target.sugar.value
        };

        console.log(val);
        this.props.setDrink(val);
    };

    render() {
        return (
            <div className="container">
                <h1>Coffee Time</h1>
                <p>Закажы лучий кофе уже сичас</p>


                <Link style={{ textDecoration: 'none' }} to="/cart" className="cart-link">
                    Корзына
                </Link>

                <div style={{ 'flexWrap': 'wrap' }} className="d-flex align-items-center justify-content-between">
                    {this.state.drinks.map((elem, i) =>
                        <form key={i} action="#" onSubmit={this.addToCart}>
                            <div style={{ 'marginTop': '20px' }} className="cup">
                                <img style={{ 'width': '100%' }} src={elem.img} alt="cup"/>
                                <p style={{ 'color': 'black', 'fontSize': '15px' }}>{elem.name}</p>
                                <button type="button" data-toggle="modal" data-target={"#modal" + i}
                                        style={{ 'alignSelf': 'flex-end' }} className="btn btn-outline-dark">Добавить</button>
                                <input name="name" type="hidden" value={elem.name}/>
                                <input name="img" type="hidden" value={elem.img}/>
                            </div>
                            <Modal id={i}/>
                        </form>
                    )}
                </div>
            </div>
        );
    }

}

export default Shop;
