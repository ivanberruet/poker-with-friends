import React, { useEffect, useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function MoneyConfig(props) {
	const {className, entryValue, setEntryValue, players, poolSize, setPoolSize, prizes, setPrizes} = props
	const [entryPool, setEntryPool] = useState(0)
	const [reentryPool, setReentryPool] = useState(0)
	
	const firstPercentage = [100,70,65]
	const secondPercentage = [30,25]
	const thirdPercentage = 10

	let registeredPlayers = players.activePlayers.length+players.eliminatedPlayers.length
	let activeReentryPlayers = players.activePlayers.filter(p => p.reentry).length
	let eliminatedReentryPlayers = players.eliminatedPlayers.filter(p => p.reentry).length
	let reentryPlayers = activeReentryPlayers+eliminatedReentryPlayers
	
	
	// Functions
	function handleEntryChange (e, setState) {
		if(!isNaN(parseInt(e.target.value))){
			setState(parseInt(e.target.value))
		}
	}
	function handleWinnersChange (value) {
		setPrizes(() => {
			if(value === 1){
				return {winners: value, percenteges:[firstPercentage[0]]}
			}
			else if(value === 2){
				return {winners: value, percenteges:[firstPercentage[1], secondPercentage[0]]}
			}
			else if(value === 3){
				return {winners: value, percenteges:[firstPercentage[2], secondPercentage[1], thirdPercentage]}
			}
		})
	}
	const classNames = (...classes) => {
		return classes.filter(Boolean).join(' ')
	}

	// Components
	const MoneyTable = () => {
		return (
			<div className="MoneyTable | relative overflow-x-auto shadow-md rounded-lg max-w-[800px]">
			<table className="w-full text-sm text-left rtl:text-right text-gray-400">
				<caption className="p-5 text-lg font-semibold text-left rtl:text-right text-white bg-gray-800">	
					Dinero recaudado
				</caption>
				<thead className="text-xs lg:text-base text-white uppercase bg-gray-700">
								<tr className=''>
										<th scope="col" className="px-6 py-3">Entradas</th>
										<th scope="col" className="px-6 py-3">Reentradas</th>
										<th scope="col" className="px-6 py-3">Pozo</th>
								</tr>
				</thead>
				<tbody className="text-xs lg:text-base">
					<tr className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700 font-semibold">
										<td className="px-6 py-4 text-white">{registeredPlayers}</td>
										<td className="px-6 py-4 text-white">{reentryPlayers}</td>
										<td className="px-6 py-4 text-white">{"$"+poolSize}</td>
								</tr>
						</tbody>
				</table>
			</div>
		)
	}
	const WinnersPop = () => {
	
		return (
			<Listbox value={prizes.winners} onChange={(value)=> handleWinnersChange(value)}>
				{({ open }) => (
					<div className='flex items-center gap-2'>
						<Label className="block font-semibold text-lg">Cantidad de premios:</Label>
						<div className="relative w-32 text-base">
							<ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1 pl-2 pr-10 text-left text-gray-900 shadow-sm ring-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
								<span className="flex items-center">
									<span className="ml-3 block truncate">{prizes.winners}</span>
								</span>
								<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
								<FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 text-gray-400" aria-hidden="true" />
								</span>
							</ListboxButton>
	
							<ListboxOptions
								transition
								className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm data-[open]:!top-auto"
							>
								{[1,2,3].map((item) => (
									<ListboxOption
										key={item}
										className={({ focus }) =>
											classNames(
												focus ? 'bg-indigo-600 text-white' : '',
												!focus ? 'text-gray-900' : '',
												'relative cursor-default select-none py-2 pl-3 pr-9',
											)
										}
										value={item}
									>
										{({ winners, focus }) => (
											<>
												<div className="flex items-center">
													<span className={classNames(winners ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
														{item}
													</span>
												</div>
	
												{winners ? (
													<span
														className={classNames(
															focus ? 'text-white' : 'text-indigo-600',
															'absolute inset-y-0 right-0 flex items-center pr-4',
														)}
													>
														<FontAwesomeIcon icon={faCheck} className="h-4 w-4" aria-hidden="true" />
													</span>
												) : null}
											</>
										)}
									</ListboxOption>
								))}
							</ListboxOptions>
						</div>
					</div>
				)}
			</Listbox>
		)
	}
	const PrizesTable = () => {
		return (
			<div className="PrizesTable | relative overflow-x-auto shadow-md rounded-lg max-w-[800px]">
				<table className="w-full text-sm text-left rtl:text-right text-gray-400">
					<caption className="p-5 text-lg font-semibold text-left rtl:text-right text-white bg-gray-800">
								Premios
						</caption>
						<thead className="text-xs lg:text-base text-white uppercase bg-gray-700">
								<tr>
										<th scope="col" className="px-6 py-3">#</th>
										<th scope="col" className="px-6 py-3">Premio</th>
								</tr>
						</thead>
						<tbody className="text-xs lg:text-base">
							{[...Array(prizes.winners).keys()].map((item,index) => (
								<tr key={index} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700 font-semibold">
									<td className="px-6 py-4 text-white">{item+1}</td>
									<td className="px-6 py-4 text-white">{"$"+prizes.percenteges[index]*poolSize/100}</td>
								</tr>
							))}
						</tbody>
				</table>
			</div>
		)
	}

	useEffect(() => {
		setEntryPool(entryValue*registeredPlayers)
		setReentryPool(entryValue*reentryPlayers)
	}, [entryValue, players])

	useEffect(() => {
		setPoolSize(entryPool + reentryPool)
	}, [players, entryPool, reentryPool])
	
	return (
		<div className={`${className} w-full flex flex-col gap-6 | MoneyConfig`}>

			<div className='EntryValue | flex items-center gap-2 text-lg'>
				<label className="block font-semibold text-lg">Valor de la entrada ($):</label>
				<input  type="text" name="text" className="input | block w-56 rounded-md py-1 px-2 ring-1 ring-inset ring-gray-400 text-gray-800 text-base" pattern="\d+" placeholder="Ingrese un número..." defaultValue={entryValue} onChange={(e)=>handleEntryChange(e,setEntryValue)}></input>
			</div>

			<MoneyTable />

			<WinnersPop />

			<PrizesTable />

		</div>
	)
}
