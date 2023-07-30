import { Event } from '../vite-env';
import LoadingRow from './LoadingRow';
import TableRow from './TableRow';
import useEvents from '../utils/useEvents';

export default function Page({ index }: { index: number }) {
  const { events, error, isLoading } = useEvents(index);

  return (
    <>
      {error && <div>Failed to load</div>}
      <tbody className="border-x border-gray-100">
        {isLoading ? (
          <LoadingRow />
        ) : (
          <>
            {events.map((event: Event) => {
              return <TableRow key={event.id} event={event} />;
            })}
          </>
        )}
      </tbody>
    </>
  );
}
