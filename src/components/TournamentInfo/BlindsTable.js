import React from 'react'
import { blindsLevels } from '../../data/blindsLevels'
export default function BlindsTable() {
	return (
		<div className='BlindsTable | my-6 w-full flex justify-start'>
			<div>
				<div className='text-xl lg:text-4xl pb-4'>Estructura de Ciegas:</div>
				<table className='border border-collapse'>
					<thead>
						<tr key={"header"}>
							<td className='pr-6 text-base border pl-1 py-[0.15rem] lg:text-2xl'>Nivel</td>
							<td className='pr-6 text-base border pl-1 py-[0.15rem] lg:text-2xl'>Ciega chica</td>
							<td className='pr-6 text-base border pl-1 py-[0.15rem] lg:text-2xl'>Ciega grande</td>
						</tr>
					</thead>
					<tbody>
					{
						blindsLevels.map((level, index) => {
							if(index<21){
								return(
										<tr key={index} className='text-sm lg:text-xl'>
										<td className='border pl-1 py-[0.15rem] lg:pl-2'>{index+1}</td>
										<td className='border pl-1 py-[0.15rem] lg:pl-2'>{level.smallBlind}</td>
										<td className='border pl-1 py-[0.15rem] lg:pl-2'>{level.bigBlind}</td>
										</tr>	
									)
							}
						})
					}
					</tbody>
				</table>
			</div>
		</div>
	)
}
