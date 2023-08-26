import React from 'react'
import logo from '../assets/PokerStars.png'

export default function Header() {
	return (
		<div className='bg-slate-950 flex justify-center'>
			<img src={logo} alt="logo" className='w-10 py-4' />
		</div>
	)
}
