import React from 'react'

export default function MoneyInfo({className, poolSize, prizes}) {
	
	return (
		<div className={`Right Section | ${className} text-white flex flex-col items-center pb-20`}>
			<div className='flex flex-col gap-6 xl:gap-14 xl:text-2xl'>
			<h1 className='text-xl xl:text-5xl underline underline-offset-4 text-center lg:text-left'>Premios</h1>
				<p>Pozo acumulado: ${new Intl.NumberFormat('es-AR').format(poolSize)}</p>
				{prizes.percenteges.map((percentage, index) => (
					<h1 key={index}>{index+1}º Puesto: ${new Intl.NumberFormat('es-AR').format(percentage*poolSize/100)}</h1>
				))}
			</div>
		</div>
	)
}
