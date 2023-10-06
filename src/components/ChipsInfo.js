import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import	chipsDistribution from '../utils/chipsDistribution'
import {PlayersContext} from '../mainComponents/Game'
import {BOX_SM} from "../data/Chips/BOX_SM";
import {BOX_MD} from "../data/Chips/BOX_MD";
import {SUITCASE_SM} from "../data/Chips/SUITCASE_SM";
import {SUITCASE_MD} from "../data/Chips/SUITCASE_MD";
import {SUITCASE_LG} from "../data/Chips/SUITCASE_LG";


export default function ChipsInfo() {
	let chips = [BOX_SM, BOX_MD, SUITCASE_SM,SUITCASE_MD, SUITCASE_LG];
	const players = useContext(PlayersContext).players
	const [chipNumbers, setChipNumbers] = useState(chipsDistribution(players,chips))
	const [TooltipDivOpen, setTooltipDiv] = useState(false)
	const [totalChips,total_value,player_chips, player_value, remaining_chips, remaining_value] = chipNumbers

	const handleClick = () => {
		showTooltipDiv()
		hideTooltipText()
		setTooltipDiv(!TooltipDivOpen)
	}
	const showTooltipText = () => {
		document.getElementById('TooltipText').classList.remove('hidden')	
	}
	const hideTooltipText = () => {
		document.getElementById('TooltipText').classList.add('hidden')
	}
	const showTooltipDiv = () => {
		document.getElementById('TooltipDiv').classList.toggle('hidden')
	}
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

	return (
		<div className="ChipsInfo | absolute top-4 right-4 flex flex-col justify-center items-end gap-1 text-base font-normal">
			<div 
			id="ChipsInfoIcon" 
			className="ChipsInfoIcon | flex justify-center items-center cursor-pointer"
			onMouseOver={() => TooltipDivOpen ? hideTooltipText() : showTooltipText()}
			onMouseOut={() => hideTooltipText()}
			onClick={() => handleClick()}
			>
				<div className=" | bg-white rounded-full flex justify-center items-center"
>
				<FontAwesomeIcon icon={faCircleInfo} className="text-black text-3xl self-end" />
				</div>
			</div>

			<div id="TooltipText" className="TooltipText | bg-slate-800 rounded-lg py-2 px-4 text-white hidden">Información de las fichas</div>

			<div id="TooltipDiv" className='TooltipDiv | w-80 bg-slate-800 rounded-lg py-2 px-4 text-white hidden flex flex-col gap-4'>
				<span className='flex justify-between gap-1'>
					<label className='text-xs flex flex-col gap-1 item-center justify-center' htmlFor="BOX_SM">
						<p className='text-center'>Caja (Iván)</p>
						<input 
							type="checkbox" 
							name="Caja (Iván)" 
							id="BOX_SM"
							defaultChecked={true} 
							onClick={()=>handleCheck()}/>
					</label>
					<label className='text-xs flex flex-col gap-1 item-center justify-center' htmlFor="BOX_MM">
						<p className='text-center'>Caja (Luca)</p>
						<input 
							type="checkbox" 
							name="Caja (Luca)" 
							id="BOX_MD"
							defaultChecked={true} 
							onClick={()=>handleCheck()}/>
					</label>
					<label className='text-xs flex flex-col gap-1 item-center justify-center' htmlFor="SUITCASE_SM">
						<p className='text-center'>Maletín (Iván)</p>
						<input 
							type="checkbox" 
							name="Maletín (Iván)" 
							id="SUITCASE_SM"
							defaultChecked={true} 
							onClick={()=>handleCheck()}/>
					</label>
					<label className='text-xs flex flex-col gap-1 item-center justify-center' htmlFor="SUITCASE_MD">
						<p className='text-center'>Maletín (Brenda)</p>
						<input 
							type="checkbox" 
							name="Maletín (Brenda)" 
							id="SUITCASE_MD"
							defaultChecked={true} 
							onClick={()=>handleCheck()}/>
					</label>
					<label className='text-xs flex flex-col gap-1 item-center justify-center' htmlFor="SUITCASE_LG">
						<p className='text-center'>Maletín (Seba)</p>
						<input 
							type="checkbox" 
							name="Maletín (Seba)" 
							id="SUITCASE_LG"
							defaultChecked={true} 
							onClick={()=>handleCheck()}/>
					</label>
				</span>
				<span className='flex flex-col gap-1'>
					<p className='font-bold'>Fichas Totales: ${total_value}</p> 
					<p>Negras: {totalChips.black}</p> 
					<p>Azules: {totalChips.blue}</p> 
					<p>Verdes: {totalChips.green}</p> 
					<p>Rojas: {totalChips.red}</p> 
					<p>Blancas: {totalChips.white}</p> 
				</span>
				<span className='flex flex-col gap-1'>
					<p className='font-bold'>Fichas por jugador: ${player_value}</p> 
					<p>Negras: {player_chips.black}</p> 
					<p>Azules: {player_chips.blue}</p> 
					<p>Verdes: {player_chips.green}</p> 
					<p>Rojas: {player_chips.red}</p> 
					<p>Blancas: {player_chips.white}</p> 
				</span>
				<span className='flex flex-col gap-1'>
					<p className='font-bold'>Fichas sobrantes: ${remaining_value}</p> 
					<p>Negras: {remaining_chips.black}</p> 
					<p>Azules: {remaining_chips.blue}</p> 
					<p>Verdes: {remaining_chips.green}</p> 
					<p>Rojas: {remaining_chips.red}</p> 
					<p>Blancas: {remaining_chips.white}</p> 
				</span>
			</div>
		</div>
	)
}
