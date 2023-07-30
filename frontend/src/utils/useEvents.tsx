import useSWR from 'swr';

export default function useEvents(index: number, queryParams: string = '') {
  const fetcher = (url: string, queryParams: string = '') => {
    console.log(`${url}${queryParams}`);
    return fetch(`${url}${queryParams}`).then((res) => res.json());
  };

  const {
    data: events,
    error,
    isLoading,
  } = useSWR(
    [`https://instatus-task.vercel.app/events?page=${index}`, queryParams],
    fetcher,
  );

  return {
    events,
    isLoading,
    error,
  };
}
