import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    //return item ? JSON.parse(item) : initialValue;
    if (item) {
      console.log('had saved state');
      return JSON.parse(item);
    } else {
      console.log('Had no state');
      return JSON.stringify(initialValue);
    }
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
