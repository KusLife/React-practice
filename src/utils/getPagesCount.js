import { useMemo } from 'react';

export const getPagesCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArreyCounter = (totalPages) => {
  const result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};

// let's check and fix it later
export const usePagesArreyCounter = (totalPages) => {
  const pagesArray = useMemo(() => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
    }
    return result;
  }, [totalPages]);
  return pagesArray;
};
