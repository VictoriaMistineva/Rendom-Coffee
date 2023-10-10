import { useEffect, useRef, useCallback } from 'react';

const useSwipe = (callback = () => {}, { isActive = true, size = 100 }) => {
  const startPosition = useRef(-1);

  const handleStart = useCallback((e) => {
    startPosition.current = e.changedTouches[0]?.pageY;
  }, []);

  const handleFinish = useCallback(
    (e) => {
      if (e.changedTouches[0]?.pageY - startPosition.current >= size)
        callback();
    },
    [callback, size]
  );

  useEffect(() => {
    if (isActive) {
      window.addEventListener('touchstart', handleStart);
      window.addEventListener('touchend', handleFinish);
    } else {
      window.removeEventListener('touchstart', handleStart);
      window.removeEventListener('touchend', handleFinish);
    }

    return () => {
      window.removeEventListener('touchstart', handleStart);
      window.removeEventListener('touchend', handleFinish);
    };
  }, [handleStart, handleFinish, isActive]);
};

export default useSwipe;
