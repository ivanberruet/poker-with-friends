import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default function MoneyConfig(props) {
	const {className, entry, setEntry, winners, setWinners, firstPercentage, setFirstPercentage, secondPercentage, setSecondPercentage, thirdPercentage, setThirdPercentage} = props
	
	const handleChange = (e, setState) => {
		if(!isNaN(parseInt(e.target.value))){
			setState(parseInt(e.target.value))
		}
	}

	const handleMinus = (state, setState) => {
		if(state > 1){
			setState(state - 1)
		}
	}
	const handlePlus = (state, setState) => {
		if(state < 3){
			setState(state + 1)
		}
	}
	const Percentages = () => {
		let aux = []
		for(let i = 0; i < winners; i++){
			let state, setState
			if(i===0){
				state = firstPercentage
				setState = setFirstPercentage
			}
			else if (i===1){
				state = secondPercentage
				setState = setSecondPercentage
			}
			else{
				state = thirdPercentage
				setState = setThirdPercentage
			}
			aux.push(
				<div key={i+1}>
					<div className='flex'>
						<p>{`Porcentaje ${i+1}°:`}</p>
						<input 
						type="text"
						placeholder='...' 
						size={10} 
						defaultValue={state} 
						className={`outline-none bg-transparent ml-2 w-20 rounded-md`} 
						onChange={(e)=>handleChange(e,setState)} 
						/>
					</div>
				</div>
			)		
		}
		return aux
	}
	
	return (
		<div className={`${className} w-full flex flex-col gap-6`}>
			<div className='FreeConfigItem | flex'>
				<p>Valor de la entrada ($):</p>
				<input 
				type="text"
				placeholder='...' 
				size={10} 
				defaultValue={entry} 
				className={`outline-none bg-transparent ml-2 w-20 rounded-md`} 
				onChange={(e)=>handleChange(e,setEntry)} 
				/>
			</div>

			<div className='AddingConfigItem | flex'>
				<p className='mr-2'>Ganadores:</p>
				<span className='flex items-center cursor-pointer' onClick={() => handleMinus(winners,setWinners)}>
					<FontAwesomeIcon icon={faMinus} className="text-gold px-2"/>
				</span>
				<input 
				type="text"
				size={1} 
				value={winners}
				className={`outline-none bg-transparent w-max rounded-md text-center`} 
				readOnly={true}
				/>
				<span className='flex items-center cursor-pointer'>
					<FontAwesomeIcon icon={faPlus} className="text-gold px-2" onClick={() => handlePlus(winners,setWinners)}/>
				</span>
		</div>

			<div className='flex flex-col ml-6 gap-4'>
					{Percentages()}
			</div>

		</div>
	)
}
