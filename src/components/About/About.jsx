import React from 'react';
import Cart from './Cart/Cart';
import { DataAbout } from '../../data.js';
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
				<h2 className="about_title">What makes our brand different</h2>
				<div className="cart_blocks">
				{DataAbout.map((item, index) => (
					<Cart
						icon={item.icon}
						title={item.title}
						desc={item.desc}
					/>
				))}
				</div>
			</div>
    </div>
  );
};

export default About;
