import { TableRowProps } from '../vite-env';
import { useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);

  const { event } = props;

  return (
    <>
      {isOpen ? (
        <tr>
          <td className="relative scale-105 text-xs" colSpan={3}>
            <button
              onSubmit={() => setIsOpen(!isOpen)}
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-3 top-5 h-5 w-5 cursor-pointer text-gray-400 transition-colors duration-150 hover:text-gray-600"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="my-2 grid grid-cols-3 grid-rows-2 gap-y-6 rounded-xl border border-gray-200 bg-white px-5 py-8">
              <div className="px-6">
                <h4 className="mb-2 font-semibold uppercase text-gray-400">
                  Actor
                </h4>
                <div className="grid grid-cols-[5rem,auto] grid-rows-3 gap-1">
                  <p className="text-gray-500">Name</p>
                  <p>{event.actor.name}</p>
                  <p className="text-gray-500">Email</p>
                  <p>{event.actor.email}</p>
                  <p className="text-gray-500">ID</p>
                  <p>{event.actor.id}</p>
                </div>
              </div>
              <div className="px-6">
                <h4 className="mb-2 font-semibold uppercase text-gray-400">
                  Action
                </h4>
                <div className="grid grid-cols-[5rem,auto] grid-rows-3 gap-1">
                  <p className="text-gray-500">Name</p>
                  <p title={event.action.name}>
                    {event.action.name?.length > 18
                      ? event.action.name?.substring(0, 18) + '...'
                      : event.action.name}
                  </p>
                  <p className="text-gray-500">Object</p>
                  <p>{event.action.object}</p>
                  <p className="text-gray-500">ID</p>
                  <p>{event.action.id}</p>
                </div>
              </div>
              <div className="px-6">
                <h4 className="mb-2 font-semibold uppercase text-gray-400">
                  Date
                </h4>
                <div className="grid grid-cols-[5rem,auto] grid-rows-3 gap-1">
                  <p className="text-gray-500">Readable</p>
                  <p>{formatDate(event.occurred_at)}</p>
                </div>
              </div>
              <div className="px-6">
                <h4 className="mb-2 font-semibold uppercase text-gray-400">
                  Metadata
                </h4>
                <div className="grid grid-cols-[5rem,auto] grid-rows-3 gap-1">
                  <p className="text-gray-500">Redirect</p>
                  <p>{event.metadata?.redirect}</p>
                  <p className="text-gray-500">X Req ID</p>
                  <p>{event.metadata?.x_request_id}</p>
                  <p className="text-gray-500">Description</p>
                  <p title={event.metadata?.description}>
                    {event.metadata?.description
                      ? event.metadata?.description?.length > 18
                        ? event.metadata?.description?.substring(0, 18) + '...'
                        : event.metadata?.description
                      : 'No description'}
                  </p>
                </div>
              </div>
              <div className="px-6">
                <h4 className="mb-2 font-semibold uppercase text-gray-400">
                  Target
                </h4>
                <div className="grid grid-cols-[5rem,auto] grid-rows-3 gap-1">
                  <p className="text-gray-500">Name</p>
                  <p>{event.target.name}</p>
                  <p className="text-gray-500">Email</p>
                  <p>{event.target.email}</p>
                  <p className="text-gray-500">ID</p>
                  <p>{event.target.id}</p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      ) : (
        <tr className="grid w-full grid-cols-3 transition duration-150 ease-in-out hover:bg-gray-50">
          <td className="flex items-center gap-3 whitespace-nowrap px-6 py-4">
            <div className="tems-center flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-violet-500 text-xs font-semibold text-white">
              {event.actor.name[0]}
            </div>
            {event.actor.email}
          </td>
          <td className="whitespace-nowrap px-6 py-4">{event.action.name}</td>
          <td className="flex items-center justify-between whitespace-nowrap px-6 py-4">
            {formatDate(event.occurred_at)}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600"
            >
              <svg
                fill="none"
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
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
