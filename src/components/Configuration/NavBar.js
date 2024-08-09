import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import MenuOption from './MenuOption'


export default function NavBar(props) {
	const {openNavBar,setOpenNavBar, setChipsOpen, setTimeOpen, setPlayersOpen, setMoneyOpen, setThemeOpen } = props
	const Items = document.querySelectorAll('.Menu li')
	const handleClick = (id) => {
		if(id==='Fichas'){
			setChipsOpen(true)
			setTimeOpen(false)
			setPlayersOpen(false)
			setMoneyOpen(false)
			setThemeOpen(false)
		}
		else if(id==='Tiempo'){
			setChipsOpen(false)
			setTimeOpen(true)
			setPlayersOpen(false)
			setMoneyOpen(false)
			setThemeOpen(false)
		}
		else if(id==='Jugadores'){
			setChipsOpen(false)
			setTimeOpen(false)
			setPlayersOpen(true)
			setMoneyOpen(false)
			setThemeOpen(false)
		}
		else if(id==='Dinero'){
			setChipsOpen(false)
			setTimeOpen(false)
			setPlayersOpen(false)
			setMoneyOpen(true)
			setThemeOpen(false)
		}
		else if(id==='Tema'){
			setChipsOpen(false)
			setTimeOpen(false)
			setPlayersOpen(false)
			setMoneyOpen(false)
			setThemeOpen(true)
		}

		for (let i = 0; i < Items.length; i++) {
			if(Items[i].id===id){
				Items[i].classList.add('active')
			}
			else{
				Items[i].classList.remove('active')
			}
		}
	}

	return (
		<div className='Menu | w-full flex justify-between items-center lg:pr-8'>
			<ul className='flex flex-col w-full lg:flex-row'>
				<MenuOption id={"Jugadores"} handleClick={handleClick} />
				<MenuOption id={"Dinero"} handleClick={handleClick} />
				<MenuOption id={"Tiempo"} handleClick={handleClick} />
				<MenuOption id={"Fichas"} handleClick={handleClick} />
				<MenuOption id={"Tema"} handleClick={handleClick} />
			</ul>
			<FontAwesomeIcon icon={faXmark} className="text-gray-300 text-3xl cursor-pointer absolute top-5 right-8 lg:block" onClick={() => setOpenNavBar(!openNavBar)} />
		</div>
	)
}
