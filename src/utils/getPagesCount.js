import { useMemo } from 'react';

export const getPagesCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

// older version which not as efficient as that uses hoock
export const getPagesArreyCounter = (totalPages) => {
  const result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};

// most efficient and now in work
export const usePagesArreyCounter = (totalPages) => {
  const pagesArray = useMemo(() => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
    console.log(result)

    }
    return result;
  }, [totalPages]);
  return pagesArray;
};
