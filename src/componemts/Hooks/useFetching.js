import { useState } from 'react';

export const useFetching = (callBack) => {
  const [isLoading, setIsLoadiand] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoadiand(true);
      await callBack();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoadiand(false);
    }
  };
  return [fetching, isLoading, error];
};
