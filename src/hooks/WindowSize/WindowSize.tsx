import { useState, useEffect } from 'react';

type WindowSize = {
  width: number,
  height: number,
};

let getWindowSize: () => WindowSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

export function useWindowSize(): WindowSize {
  let [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    let handleResize = () => {
      setWindowSize(getWindowSize());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return windowSize
}
