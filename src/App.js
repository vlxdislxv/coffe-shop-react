import React from 'react';
import Cart from './components/cart/cart'
import Shop from './components/shop/shop'
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends React.Component {

    state = {
        cartDrinks: []
    };

    setCDrinks = (item) => {
        let arr = this.state.cartDrinks;
        arr.push(item);
        this.setState({cartDrinks: arr});
    };

    removeCDrinks = (id) => {
        let arr = this.state.cartDrinks;
        arr.splice(id, 1);
        this.setState({cartDrinks: arr});
    };

    render() {
        return (
            <Router>
                <div className="container">
                    <Route path="/cart" render={() => (<Cart removeDrink={this.removeCDrinks} drinks={this.state.cartDrinks}/>)} />
                    <Route path="/shop" render={() => (<Shop setDrink={this.setCDrinks}/>)} />
                    <Redirect from="/" to="shop" />
                </div>
            </Router>
        );
    }

}

export default App;
