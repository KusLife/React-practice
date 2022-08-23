import { useRef, useEffect } from 'react';

export const useObserver = (ref, isLoading, canLoad, callBack) => {
  const observer = useRef();
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    function cb(entries, obsesrver) {
      if (entries[0].isIntersecting && canLoad) {
        // console.log(page);
        callBack();
      }
    }

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
