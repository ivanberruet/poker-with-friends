import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function ConfigurationIcon(props) {
	const {openConfig, setOpenConfig} = props
	const [TooltipDivOpen, setTooltipDiv] = useState(false)

	const handleClick = () => {
		openConfiguration()
		hideTooltipText()
		setTooltipDiv(!TooltipDivOpen)
	}
	const showTooltipText = () => {
		document.getElementById('TooltipText').classList.remove('hidden')	
	}
	const hideTooltipText = () => {
		document.getElementById('TooltipText').classList.add('hidden')
	}
	const openConfiguration = () => {
		setOpenConfig(!openConfig)
	}

	return (
		<div className="ConfigurationIcon | absolute top-6 right-8 flex flex-col justify-center items-end gap-1 text-base font-normal z-10">
			<div 
			id="ChipsInfoIcon" 
			className="ChipsInfoIcon | flex justify-center items-center cursor-pointer"
			onMouseOver={() => TooltipDivOpen ? hideTooltipText() : showTooltipText()}
			onMouseOut={() => hideTooltipText()}
			onClick={() => handleClick()}
			>
				<div className=" |  rounded-full flex justify-center items-center">
					<FontAwesomeIcon icon={faGear} className="text-white text-3xl self-end" />
				</div>
			</div>

			<div id="TooltipText" className="TooltipText | bg-slate-800 rounded-lg py-2 px-4 text-white hidden">Configuración</div>
		</div>
	)
}
