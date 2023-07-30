import { TableRowProps } from '../vite-env';
import { useState } from 'react';

const formatDate = (dateObj: Date) => {
  return new Date(dateObj).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
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
                  <p className="truncate">{event.actor_name}</p>
                  <p className="text-gray-500">Email</p>
                  <p className="truncate">{event.actor_email}</p>
                  <p className="text-gray-500">ID</p>
                  <p className="truncate">{event.actor_id}</p>
                </div>
              </div>
              <div className="px-6">
                <h4 className="mb-2 font-semibold uppercase text-gray-400">
                  Action
                </h4>
                <div className="grid grid-cols-[5rem,auto] grid-rows-3 gap-1">
                  <p className="text-gray-500">Name</p>
                  <p className="truncate" title={event.action_name}>
                    {event.action_name}
                  </p>
                  <p className="text-gray-500">Object</p>
                  <p className="truncate">{event.action_object}</p>
                  <p className="text-gray-500">ID</p>
                  <p className="truncate">{event.action_id}</p>
                </div>
              </div>
              <div className="px-6">
                <h4 className="mb-2 font-semibold uppercase text-gray-400">
                  Date
                </h4>
                <div className="grid grid-cols-[5rem,auto] grid-rows-3 gap-1">
                  <p className="text-gray-500">Readable</p>
                  <p className="truncate">{formatDate(event.occurred_at)}</p>
                </div>
              </div>
              <div className="px-6">
                <h4 className="mb-2 font-semibold uppercase text-gray-400">
                  Metadata
                </h4>
                <div className="grid grid-cols-[5rem,auto] grid-rows-3 gap-1">
                  <p className="text-gray-500">Redirect</p>
                  <p className="truncate">{event.metadata?.redirect}</p>
                  <p className="text-gray-500">X Req ID</p>
                  <p className="truncate">{event.metadata?.x_request_id}</p>
                  <p className="text-gray-500">Description</p>
                  <p className="truncate" title={event.metadata?.description}>
                    {event.metadata?.description}
                  </p>
                </div>
              </div>
              <div className="px-6">
                <h4 className="mb-2 font-semibold uppercase text-gray-400">
                  Target
                </h4>
                <div className="grid grid-cols-[5rem,auto] grid-rows-3 gap-1">
                  <p className="text-gray-500">Name</p>
                  <p className="truncate">{event.target_name}</p>
                  <p className="text-gray-500">Email</p>
                  <p className="truncate">{event.target_email}</p>
                  <p className="text-gray-500">ID</p>
                  <p className="truncate">{event.target_id}</p>
                </div>
              </div>
              <div className="px-6">
                <h4 className="mb-2 font-semibold uppercase text-gray-400">
                  Event Details
                </h4>
                <div className="grid grid-cols-[5rem,auto] grid-rows-3 gap-1 truncate">
                  <p className="text-gray-500">Event ID</p>
                  <p className="truncate">{event.id}</p>
                  <p className="text-gray-500">Group</p>
                  <p className="truncate">{event.group}</p>
                  <p className="text-gray-500">Object</p>
                  <p className="truncate">{event.object}</p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      ) : (
        <tr className="grid w-full grid-cols-3 transition duration-150 ease-in-out hover:bg-gray-50">
          <td className="flex items-center gap-3 whitespace-nowrap px-6 py-4">
            <div className="tems-center flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-violet-500 text-xs font-semibold text-white">
              {event.actor_name[0]}
            </div>
            {event.actor_email}
          </td>
          <td className="whitespace-nowrap px-6 py-4">{event.action_name}</td>
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
