import { TableRowProps } from '../vite-env';

const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  return `${month} ${day}, ${hour > 12 ? hour - 12 : hour}:${minute} ${ampm}`;
};

export default function TableRow(props: TableRowProps) {
  const { event } = props;

  return (
    <tr className="transition duration-300 ease-in-out hover:bg-gray-50">
      <td className="flex items-center gap-3 whitespace-nowrap px-6 py-4">
        <div className="tems-center flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-violet-500 text-xs font-semibold text-white">
          {event.actor.name[0]}
        </div>
        {event.actor.email}
      </td>
      <td className="whitespace-nowrap px-6 py-4">{event.action.name}</td>
      <td className="flex items-center justify-between whitespace-nowrap px-6 py-4">
        {formatDate(event.occurred_at)}
        <svg
          fill="none"
          className="h-4 w-4 cursor-pointer text-gray-400"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </td>
    </tr>
  );
}
