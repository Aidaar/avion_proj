import React from 'react';
import './NewCeramics.css';
import Cart from './Cart';
import { DataCer } from '../../data.js'



const NewCeramics = () => {
	return (
		<div className='new_ceramics'>
			<div className="container">
				<h2 className="new_ceramics-title">New ceramics</h2>
				<div className="cart_block">
					{
						DataCer.map((item) => (
								<Cart 
									img={item.img}
									desc={item.desc}
									price={item.price}
								/>
						))
					}
					
				</div>
			</div>
		</div>
	)
}

export default NewCeramics