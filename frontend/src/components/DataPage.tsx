import { Event } from '../vite-env';
import LoadingRow from './LoadingRow';
import TableRow from './TableRow';
import { useEffect } from 'react';
import useEvents from '../utils/useEvents';

export default function DataPage({
  index,
  queryParams,
}: {
  index: number;
  queryParams: string;
}) {
  const { events, error, isLoading } = useEvents(index, queryParams);

  useEffect(() => {
    if (events)
      // loop over events and add to localstorage
      events?.forEach((event: Event) => {
        localStorage.setItem(`event_${event.id}`, JSON.stringify(event));
      });
  }, [events]);

  return (
    <>
      {error && <div>Failed to load</div>}
      <tbody className="border-x border-gray-100">
        {isLoading ? (
          <LoadingRow />
        ) : (
          <>
            {events &&
              events?.map((event: Event) => {
                return <TableRow key={event.id} event={event} />;
              })}
          </>
        )}
      </tbody>
    </>
  );
}
