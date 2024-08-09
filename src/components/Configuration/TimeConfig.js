import React from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function TimeConfig(props) {
	const {className, timePerLevel, setTimePerLevel, levelInfo, setLevelInfo} = props

	// Class Components
	const classNames = (...classes) => {
		return classes.filter(Boolean).join(' ')
	}

	// Components
	const TimePerLevelPop = () => {
			return (
			<Listbox value={timePerLevel} onChange={(value) => setTimePerLevel(value)}>
				{({ open }) => (
					<div className='flex items-center gap-2'>
						<Label className="block font-semibold text-lg">Tiempo por nivel:</Label>
						<div className="relative w-32 text-base">
							<ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1 pl-2 pr-10 text-left text-gray-900 shadow-sm ring-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
								<span className="flex items-center">
									<span className="ml-3 block truncate">{timePerLevel}</span>
								</span>
								<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
								<FontAwesomeIcon icon={faChevronDown} className="h-4 w-4 text-gray-400" aria-hidden="true" />
								</span>
							</ListboxButton>
	
							<ListboxOptions
								transition
								className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm data-[open]:!top-auto"
							>
								{[...Array(30).keys()].map((item) => (
									<ListboxOption
										key={item}
										className={({ focus }) =>
											classNames(
												focus ? 'bg-indigo-600 text-white' : '',
												!focus ? 'text-gray-900' : '',
												'relative cursor-default select-none py-2 pl-3 pr-9',
											)
										}
										value={item+1}
									>
										{({ levelOption, focus }) => (
											<>
												<div className="flex items-center">
													<span className={classNames(levelOption ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
														{item+1}
													</span>
												</div>
	
												{levelOption ? (
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

	const InitialLevelPop = () => {
			return (
			<Listbox value={levelInfo.startingLevel} onChange={(value) => setLevelInfo({...levelInfo, startingLevel: value, currentLevel: value})}>
				{({ open }) => (
					<div className='flex items-center gap-2'>
						<Label className="block font-semibold text-lg">Nivel inicial:</Label>
						<div className="relative w-32 text-base">
							<ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1 pl-2 pr-10 text-left text-gray-900 shadow-sm ring-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
								<span className="flex items-center">
									<span className="ml-3 block truncate">{levelInfo.startingLevel}</span>
								</span>
								<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
								<FontAwesomeIcon icon={faChevronDown} className="h-4 w-4 text-gray-400" aria-hidden="true" />
								</span>
							</ListboxButton>
	
							<ListboxOptions
								transition
								className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm data-[open]:!top-auto"
							>
								{[...Array(29).keys()].map((item) => (
									<ListboxOption
										key={item}
										className={({ focus }) =>
											classNames(
												focus ? 'bg-indigo-600 text-white' : '',
												!focus ? 'text-gray-900' : '',
												'relative cursor-default select-none py-2 pl-3 pr-9',
											)
										}
										value={item+1}
									>
										{({ levelOption, focus }) => (
											<>
												<div className="flex items-center">
													<span className={classNames(levelOption ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
														{item+1}
													</span>
												</div>
	
												{levelOption ? (
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

	// Debug
	// console.log("TimeCongig - levelInfo", levelInfo);

	return (
		<div className={`${className} w-full flex flex-col gap-6 | TimeConfig`}>
			<TimePerLevelPop />
			<InitialLevelPop />
		</div>
	)
}
