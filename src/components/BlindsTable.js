import React from 'react'
import { blindsLevels } from '../data/blindsLevels'

export default function BlindsTable() {
	return (
		<div className='BlindsTable | my-4 w-full'>
			<div>
				<span className='underline underline-offset-4'>Estructura de Ciegas:</span>
				<table className='mt-2 border border-collapse lg:mt-4'>
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
							return(
									<tr key={index} className='text-sm'>
										<td className='border pl-1 py-[0.15rem]'>{index}</td>
										<td className='border pl-1 py-[0.15rem]'>{level.smallBlind}</td>
										<td className='border pl-1 py-[0.15rem]'>{level.bigBlind}</td>
									</tr>	
							)
						})
					}
					</tbody>
				</table>
			</div>
		</div>
	)
}
