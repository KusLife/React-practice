import { useState } from 'react';

export const useFetching = (callBack) => {
  const [isLoading, setIsLoadiand] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (...args) => {
    try {
      setIsLoadiand(true);
      await callBack(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoadiand(false);
    }
  };
  return [fetching, isLoading, error];
};
