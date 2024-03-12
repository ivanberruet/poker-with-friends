import React from 'react'
import { useState, useEffect } from 'react'
import	chipsDistribution from '../../utils/chipsDistribution'
import {BOX_SM} from "../../data/Chips/BOX_SM";
import {BOX_MD} from "../../data/Chips/BOX_MD";
import {SUITCASE_SM} from "../../data/Chips/SUITCASE_SM";
import {SUITCASE_MD} from "../../data/Chips/SUITCASE_MD";
import {SUITCASE_LG} from "../../data/Chips/SUITCASE_LG";

export default function ChipsConfig(props) {
	let chips = [BOX_SM, BOX_MD, SUITCASE_SM,SUITCASE_MD, SUITCASE_LG];
	const {className, players, setPlayerChips} = props

	const [chipNumbers, setChipNumbers] = useState(chipsDistribution(players,chips))
	const [totalChips,total_value,player_chips, player_value, remaining_chips, remaining_value] = chipNumbers
	
	const handleCheck = () => {
		let allChecks = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
		chips = []
		for (let i=0; i<allChecks.length; i++) {
		 if(allChecks[i].id === 'BOX_SM') {
			chips.push(BOX_SM)
		 }
		 if(allChecks[i].id === 'BOX_MD') {
			chips.push(BOX_MD)
		 }
		 if(allChecks[i].id === 'SUITCASE_SM') {
			chips.push(SUITCASE_SM)
		 }
		 if(allChecks[i].id === 'SUITCASE_MD') {
			chips.push(SUITCASE_MD)
		 }
		 if(allChecks[i].id === 'SUITCASE_LG') {
			chips.push(SUITCASE_LG)
		 }
		}
		setChipNumbers(chipsDistribution(players,chips))
	}

	useEffect(() => {
		setChipNumbers(chipsDistribution(players,chips))
	},[players])

	useEffect(() => {
		setPlayerChips(player_value)
	},[chipNumbers])

	return (
		<div className={`${className} w-full flex flex-col gap-6`}>
			<div className='flex flex-col lg:flex-row gap-3'>
				<p>Los valores asignados a cada color de ficha son:</p>
				<span className='font-semibold text-white'>Blanca ($5)</span>
				<span className='font-semibold text-red-500'>Roja ($10)</span>
				<span className='font-semibold text-green-500'>Verde($25)</span>
				<span className='font-semibold text-blue-500'>Azul ($50)</span>
				<span className='font-semibold text-black'>Negra ($100)</span>
			</div>

			<p>Seleccionar los maletines que se van a usar:</p>
			
			<div className='flex gap-12 flex-col lg:flex-row'>
				<span className='flex lg:flex-col gap-1 lg:gap-8 text-base lg:text-lg'>
					<label className='flex flex-col lg:flex-row gap-4 item-center' htmlFor="BOX_SM">
						<input 
							type="checkbox" 
							name="Caja (Iván)" 
							id="BOX_SM"
							defaultChecked={true} 
							onClick={()=>handleCheck()}/>
						<p className='text-center'>Caja (Iván)</p>
					</label>
					<label className='flex flex-col lg:flex-row gap-4 item-center' htmlFor="BOX_MD">
						<input 
							type="checkbox" 
							name="Caja (Luca)" 
							id="BOX_MD"
							defaultChecked={true} 
							onClick={()=>handleCheck()}/>
						<p className='text-center'>Caja (Luca)</p>
					</label>
					<label className='flex flex-col lg:flex-row gap-4 item-center' htmlFor="SUITCASE_SM">
						<input 
							type="checkbox" 
							name="Maletín (Iván)" 
							id="SUITCASE_SM"
							defaultChecked={true} 
							onClick={()=>handleCheck()}/>
						<p className='text-center'>Maletín (Iván)</p>
					</label>
					<label className='flex flex-col lg:flex-row gap-4 item-center' htmlFor="SUITCASE_MD">
						<input 
							type="checkbox" 
							name="Maletín (Brenda)" 
							id="SUITCASE_MD"
							defaultChecked={true} 
							onClick={()=>handleCheck()}/>
						<p className='text-center'>Maletín (Brenda)</p>
					</label>
					<label className='flex flex-col lg:flex-row gap-4 item-center' htmlFor="SUITCASE_LG">
						<input 
							type="checkbox" 
							name="Maletín (Seba)" 
							id="SUITCASE_LG"
							defaultChecked={true} 
							onClick={()=>handleCheck()}/>
						<p className='text-center'>Maletín (Seba)</p>
					</label>
				</span>

				<span className='flex flex-col gap-1'>
					<p className='font-bold'>Fichas Totales: ${total_value}</p> 
					<p className='font-semibold text-black'>Negras: {totalChips.black}</p> 
					<p className='font-semibold text-blue-500'>Azules: {totalChips.blue}</p> 
					<p className='font-semibold text-green-500'>Verdes: {totalChips.green}</p> 
					<p className='font-semibold text-red-500'>Rojas: {totalChips.red}</p> 
					<p className='font-semibold text-white'>Blancas: {totalChips.white}</p> 
				</span>

				<span className='flex flex-col gap-1'>
					<p className='font-bold'>Fichas por jugador: ${player_value}</p> 
					<p className='font-semibold text-black'>Negras: {player_chips.black}</p> 
					<p className='font-semibold text-blue-500'>Azules: {player_chips.blue}</p> 
					<p className='font-semibold text-green-500'>Verdes: {player_chips.green}</p> 
					<p className='font-semibold text-red-500'>Rojas: {player_chips.red}</p> 
					<p className='font-semibold text-white'>Blancas: {player_chips.white}</p> 
				</span>

				<span className='flex flex-col gap-1'>
					<p className='font-bold'>Fichas sobrantes: ${remaining_value}</p> 
					<p className='font-semibold text-black'>Negras: {remaining_chips.black}</p> 
					<p className='font-semibold text-blue-500'>Azules: {remaining_chips.blue}</p> 
					<p className='font-semibold text-green-500'>Verdes: {remaining_chips.green}</p> 
					<p className='font-semibold text-red-500'>Rojas: {remaining_chips.red}</p> 
					<p className='font-semibold text-white'>Blancas: {remaining_chips.white}</p> 
				</span>
			</div>

		</div>
	)
}
