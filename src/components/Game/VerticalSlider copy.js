
import { useSpring, animated, config } from '@react-spring/web';
import { useState, useEffect } from 'react';
import {blindsLevels} from '../../data/blindsLevels';

const VerticalSliderCopy = () => {
	
	const [currentLevel, setCurrentLevel] = useState(0);
  const [currentItem, setCurrentItem] = useState(blindsLevels[0]);
  const [nextItem, setNextItem] = useState(blindsLevels[1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLevel((prevLevel) => (prevLevel + 1) % blindsLevels.length);
      setCurrentItem(blindsLevels[currentLevel % blindsLevels.length]);
      setNextItem(blindsLevels[(currentLevel + 1) % blindsLevels.length]);
    }, 5000);

    return () => clearInterval(timer);
  }, [blindsLevels.length, currentLevel, blindsLevels]);

  const itemProps = useSpring({
    from: { opacity: 0, transform: 'translateY(100%)' },
    to: { opacity: 1, transform: 'translateY(0%)' },
    reset: false,
    reverse: currentLevel % 2 !== 0,
    config: config.default,
  });

  const nextItemProps = useSpring({
    from: { opacity: 0, transform: 'translateY(100%)' },
    to: { opacity: 1, transform: 'translateY(0%)' },
    reset: false,
    reverse: currentLevel % 2 !== 0,
    config: config.default,
  });

	return (
    <div className='text-white'>
      <animated.div style={itemProps}>
        <div>
          <p>{`Current Blinds: ${currentItem.smallBlind}/${currentItem.bigBlind}`}</p>
        </div>
      </animated.div>
      <animated.div style={nextItemProps}>
        <div>
          <p>{`Next Blind: ${nextItem.smallBlind}/${nextItem.bigBlind}`}</p>
        </div>
      </animated.div>
    </div>
  );
};
export default VerticalSliderCopy;