import React from 'react'
import { blindsLevels } from '../data/blindsLevels'
export default function BlindsTable() {
	return (
		<div className='BlindsTable | my-6 w-full flex justify-center'>
			<div>
				<span className='text-xl'>Estructura de Ciegas:</span>
				<table className='mt-4 border border-collapse lg:mt-4'>
					<thead>
						<tr key={"header"}>
							<td className='pr-6 text-base border pl-1 py-[0.15rem]'>Nivel</td>
							<td className='pr-6 text-base border pl-1 py-[0.15rem]'>Ciega chica</td>
							<td className='pr-6 text-base border pl-1 py-[0.15rem]'>Ciega grande</td>
						</tr>
					</thead>
					<tbody>
					{
						blindsLevels.map((level, index) => {
							if(index<21){
								return(
										<tr key={index} className='text-sm'>
										<td className='border pl-1 py-[0.15rem]'>{index}</td>
										<td className='border pl-1 py-[0.15rem]'>{level.smallBlind}</td>
										<td className='border pl-1 py-[0.15rem]'>{level.bigBlind}</td>
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
