import react, { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {
  const [aValue, setAValue] = useLocalStorage('isItDark');

  useEffect(() => {
    if (aValue) {
      console.log('dark mode should be on');
      document.body.classList.add('dark-mode');
    } else {
      console.log('dark mode should be off');
      document.body.classList.remove('dark-mode');
    }
  }, [setAValue]);

  return [aValue, setAValue];
};
