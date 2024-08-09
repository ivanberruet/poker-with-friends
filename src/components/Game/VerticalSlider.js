// import '../../VerticalSlider.css';
// import React, { useState, useEffect } from 'react';

// const VerticalSlider = ({ elements }) => {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [isExiting, setIsExiting] = useState(false);


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsExiting(true); // Trigger exiting state
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
//         setIsExiting(false); // Reset exiting state after the transition
//       }, 3000); // Adjust the timeout to match the transition duration
//     }, 3000); // Adjust the interval as needed

// 		return () => clearInterval(interval);
//   }, [elements.length]);
	
//   return (
//     <div className="vertical-slider">
//       {elements.map((element, index) => {
// 				const isActive = index === currentIndex;
//         const isSemiActive = index === currentIndex + 1;
//         const isHidden = index === currentIndex + 2;
// 				const isOld = index < currentIndex;

//         return (
//           <div
//             key={index}
//             id={index}
//             className={`slider-item ${isActive ? 'active' : ''} ${isSemiActive ? 'semiactive' : ''} ${isHidden ? 'next' : ''} ${isExiting && index === currentIndex ? 'exiting' : ''} ${isOld ? 'old' : ''}`}>
//             {element}
//           </div>
//         );
//       })}
//     </div>
//   );
// };


import { useTransition, animated } from '@react-spring/web'
import { useState, useEffect } from 'react';
import { blindsLevels } from '../../data/blindsLevels';

const VerticalSlider = ({currentLevel }) => {
	
	const [index, setIndex] = useState(0);
	
	const transitions = useTransition([blindsLevels[index], blindsLevels[index+1], blindsLevels[index+2]], {
    from: { transform: 'translateY(100%)', opacity: 0, scale: 0.6 },
    enter: { transform: 'translateY(0)', opacity: 1, scale: 1 },
    leave: { transform: 'translateY(-100%)', opacity: 0 },
		trail: 100 
  });
	
	useEffect(() => {
		console.log('currentLevel from VerticalSlider', currentLevel);
		if (currentLevel !== 0){setIndex(currentLevel - 1)}
	},[currentLevel])
	
	console.log('inedex from VerticalSlider', index);
	
  return (
		<div className='VerticalSlider | w-full h-[200px] flex flex-col items-center gap-8 bg-black overflow-y-hidden'>
			{
				transitions((style, item) => {
					return (
						<animated.div key={item.level} style={style} className='flex justify-center items-center px-4 py-2'>
							<p className='text-white'>{`Ciegas: ${item.smallBlind}/${item.bigBlind}`}</p>,
						</animated.div>
					)
				})
			}
		</div>
	)
}
export default VerticalSlider;