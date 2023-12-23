import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import NewCeramics from '../NewCeramics/NewCeramics'

const Home = () => {
	return (
		<div className='home'>
			<Header />
			<About /> 
			<NewCeramics />
		</div>
	)
}

export default Home