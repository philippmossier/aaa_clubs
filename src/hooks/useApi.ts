import { useEffect, useState } from 'react';

type Data<T> = {
  state: 'LOADING' | 'ERROR' | 'SUCCESS';
  error: string;
  data: T[];
};

export const useApi = <T>(url: string) => {
  const [data, setData] = useState<Data<T>>({
    state: 'LOADING',
    error: '',
    data: [],
  });
  const setPartData = (partialData: Partial<Data<T>>) => setData({ ...data, ...partialData });

  useEffect(() => {
    setPartData({
      state: 'LOADING',
    });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPartData({
          state: 'SUCCESS',
          data,
        });
      })
      .catch(() => {
        setPartData({
          state: 'ERROR',
          error: 'fetch failed',
        });
      });
  }, []);
  return data;
};
