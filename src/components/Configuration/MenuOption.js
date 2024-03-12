import React from 'react'

export default function MenuOption({id, handleClick}) {
	return (
		<li className='border-b-2 lg:border-r-2 border-slate-900 px-10 py-5 cursor-pointer hover:bg-slate-900' 
		onClick={(e)=>handleClick(e.target.id)} 
		id={id}
		>
			{id}
		</li>
	)
}
