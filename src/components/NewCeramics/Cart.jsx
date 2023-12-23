import React from 'react'
import './Cart.css'


const Cart = ({img, desc, price}) => {
	return (
		<div className="cart">
			<img src={img} alt="cart image" className="cart_img" />
			<p className="cart_desc">
			{desc}
			</p>
			<p className="cart_price">
			{price}
			</p>
		</div>
	)
}

export default Cart