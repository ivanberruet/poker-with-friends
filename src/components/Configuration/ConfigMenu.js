import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import MenuOption from './MenuOption'


export default function ConfigMenu(props) {
	const {openConfig,setOpenConfig, setChipsOpen, setTimeOpen, setPlayersOpen, setMoneyOpen } = props
	const Items = document.querySelectorAll('.Menu li')
	const handleClick = (id) => {
		if(id==='Fichas'){
			setChipsOpen(true)
			setTimeOpen(false)
			setPlayersOpen(false)
			setMoneyOpen(false)
		}
		else if(id==='Tiempo'){
			setChipsOpen(false)
			setTimeOpen(true)
			setPlayersOpen(false)
			setMoneyOpen(false)
		}
		else if(id==='Jugadores'){
			setChipsOpen(false)
			setTimeOpen(false)
			setPlayersOpen(true)
			setMoneyOpen(false)
		}
		else if(id==='Dinero'){
			setChipsOpen(false)
			setTimeOpen(false)
			setPlayersOpen(false)
			setMoneyOpen(true)
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
		<div className='Menu | w-full flex justify-between items-center pr-8'>
			<ul className='flex'>
				<MenuOption id={"Jugadores"} handleClick={handleClick} />
				<MenuOption id={"Dinero"} handleClick={handleClick} />
				<MenuOption id={"Tiempo"} handleClick={handleClick} />
				<MenuOption id={"Fichas"} handleClick={handleClick} />
			</ul>
			<FontAwesomeIcon icon={faXmark} className="text-gray-300 text-3xl cursor-pointer" onClick={() => setOpenConfig(!openConfig)} />
		</div>
	)
}
