import React from 'react'
import './Cart.css'
const Cart = ({title, desc, icon}) => {
	return (
		<div className='cart'>
			<div className="cart_logo">
				<img src={icon} alt="icon in about" />
			</div>
			<p className="cart_title">
				{title}
			</p>
			<p className="cart_desc">
				{desc}
			</p>
		</div>
	)
}

export default Cart