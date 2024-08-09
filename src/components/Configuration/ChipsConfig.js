import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default function ChipsConfig(props) {
	
	const {className, chips, setChips} = props

	const [activeIndex, setActiveIndex] = useState(null);

	// Functions
	const handleChipsSwitch = (index) => {
		console.log("ChipsConfig - Execuiting handleChipsSwitch");
		setChips(chips => ({
			...chips, 
			available: chips.available.map((chip, i) => i === index ? {...chip, active: !chip.active} : chip),
		}))
	}

	const handleAccordionItemClick = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	 };


		// Components
	const ChipsSwitch = ({state, index}) => (
		<>
			<label className="switch">
				<input type="checkbox" value="" className="sr-only peer" defaultChecked={state} onChange={()=>handleChipsSwitch(index)}></input>
				<div className="slider"></div>
				<div className="slider-card">
					<div className="slider-card-face slider-card-front"></div>
					<div className="slider-card-face slider-card-back"></div>
				</div>
			</label>
		</>
	)

	const TableOfChips = () => {
		return (
			<div className="mt-4 relative overflow-x-auto shadow-md rounded-lg w-full">
			<table className="w-full text-sm text-left rtl:text-right text-gray-400">
				<caption className="p-5 text-lg font-semibold text-left rtl:text-right text-white bg-gray-800">
					Fichas
				</caption>
				<thead className="text-xs lg:text-base text-white uppercase bg-gray-700">
					<tr>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-white">Cajas / Maletines</th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-white"><FontAwesomeIcon icon={faCircle}  /></th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-red-500"><FontAwesomeIcon icon={faCircle}  /></th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-green-500"><FontAwesomeIcon icon={faCircle}  /></th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-blue-500"><FontAwesomeIcon icon={faCircle}  /></th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-black"><FontAwesomeIcon icon={faCircle}  /></th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-white">En uso</th>
						<th></th>
					</tr>
				</thead>
				<tbody className="text-xs lg:text-base">
					{chips.available.map((box, index) => (
						<tr key={index} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700 font-semibold">
							<td className="px-2 lg:px-6 py-1 lg:py-4 text-white min-w-[100px]">{box.name}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4">{box.white.quantity}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4">{box.red.quantity}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4">{box.green.quantity}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4">{box.blue.quantity}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4">{box.black.quantity}</td>
							<td className='px-2 lg:px-6 py-1 lg:py-4'><ChipsSwitch state={box.active} index={index} /></td>	
						</tr>
					))}
				</tbody>
			</table>
		</div>
		)
	}

	const TableOfChipsDistribution = () => {
		return (
			<div className="mt-4 relative overflow-x-auto shadow-md rounded-lg w-full">
			<table className="w-full text-sm text-left rtl:text-right text-gray-400">
				<caption className="p-5 text-lg font-semibold text-left rtl:text-right text-white bg-gray-800">
					Fichas
				</caption>
				<thead className="text-xs lg:text-base text-white uppercase bg-gray-700">
					<tr>
						<th scope="col" className="p-2 lg:px-6 lg:py-3"></th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-white"><FontAwesomeIcon icon={faCircle}  /></th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-red-500"><FontAwesomeIcon icon={faCircle}  /></th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-green-500"><FontAwesomeIcon icon={faCircle}  /></th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-blue-500"><FontAwesomeIcon icon={faCircle}  /></th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3 text-black"><FontAwesomeIcon icon={faCircle}  /></th>
						<th scope="col" className="p-2 lg:px-6 lg:py-3">Valor</th>
					</tr>
				</thead>
				<tbody className="text-xs lg:text-base">
					{chips.toBeUsed.map((item, index) => (
						<tr key={index} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700 font-semibold">
							<td className="px-2 lg:px-6 py-1 lg:py-4 text-white min-w-[100px]">{item.label}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4">{item.white.quantity}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4">{item.red.quantity}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4">{item.green.quantity}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4">{item.blue.quantity}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4">{item.black.quantity}</td>
							<td className="px-2 lg:px-6 py-1 lg:py-4 text-white">{item.value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
		)
	}

	const accordionData = [
		{title: "Fichas disponibles", children: <TableOfChips />},
		{title: "Distribución de fichas", children: <TableOfChipsDistribution />},
	]

	// Accordion
	const AccordionItem = ({title, children, isOpen, onClick}) => {
		return (
			<div className="Wrapper | lg:w-[50%] flex flex-col gap-4 ">

				<button className={`w-full flex justify-between border-b border-gray-300 dark:border-gray-600 py-1`} onClick={onClick}>
					<h1>{title}</h1>
					{isOpen ? <FontAwesomeIcon icon={faChevronUp} className="w-5 h-5"/> : <FontAwesomeIcon icon={faChevronDown} className="w-5 h-5" />}
				</button>

				<div className={`w-full ${isOpen ? 'visible' : 'collapse h-0'}`}>
					{children}
				</div>

			</div>
		)
	}

	// Debug
	// console.log("ChipsConfig - chips", chips);

	return (
		<div className={`${className} w-full flex flex-col gap-6 | ChipsConfig`}>

			{accordionData.map((item, index) => (
				<AccordionItem
					key={index}
					title={item.title}
					children={item.children}
					isOpen={activeIndex === index}
					onClick={() => handleAccordionItemClick(index)}
				/>
			))}
		</div>
	)
}
