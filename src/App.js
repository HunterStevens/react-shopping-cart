import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './context/ProductContext';
import {CartContext} from './context/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		console.log(item);
		// add the given item to the cart
		setCart([...cart, item]);
		console.log(cart);
	};

	return (
		<div className="App">

			{/* Routes */}
			<ProductContext.Provider value ={{products, addItem}}>
				<CartContext.Provider value ={cart}>
					<Navigation />
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
