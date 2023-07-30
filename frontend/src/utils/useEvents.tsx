import useSWR from 'swr';

export default function useEvents(index: number) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const {
    data: events,
    error,
    isLoading,
  } = useSWR(`https://instatus-task.vercel.app/events?page=${index}`, fetcher);

  return {
    events,
    isLoading,
    error,
  };
}
