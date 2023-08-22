import React from 'react'

export default function ExtraInfo() {
	return (
		<div className='flex-1 text-white text-xl pl-14 flex flex-col gap-4'>
			<div>Entrada: $3.000</div>
			<div><span className='underline underline-offset-4'>Ganadores</span>
				<ul className='flex flex-col text-base'>
					<li className='py-1 pt-2'>Sebastián Benitez: 3</li>
					<li className='py-1'>Iván Berruet: 1</li>
					<li className='py-1'>Sebastián Zupancic: 1</li>
					<li className='py-1'>Mirko Salinas: 1</li>
				</ul>
			</div>
		</div>
	)
}
