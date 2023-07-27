import { Event } from '../vite-env';
import TableRow from './TableRow';

const events: Event[] = [
  {
    id: 'evt_LKWAN',
    object: 'event',
    actor: {
      id: 'user_3VG742',
      name: 'Ali Salah',
      email: 'ali@instatus.com',
    },
    group: 'instatus.com',
    action: {
      id: 'evt_1NCAOQ2',
      object: 'event_action',
      name: 'user.searched_activity_log_events',
    },
    target: {
      id: 'user_DOKVD1U3L030',
      name: 'Ali Salah',
      email: 'ali@instatus.com',
    },
    location: '',
    occurred_at: '2022-01-05T14:31:13.607Z',
    metadata: {
      redirect: '/setup',
      description: 'User login succeeded.',
      x_request_id: 'req_W1Y13QOHMI5H',
    },
  },
  {
    id: 'evt_LKW5C',
    object: 'event',
    actor: {
      id: 'user_3VG743',
      name: 'Ali Salah',
      email: 'ali@instatus.com',
    },
    group: 'instatus.com',
    action: {
      id: 'evt_1NCAOQ4',
      object: 'event_action',
      name: 'user.login_succeeded',
    },
    target: {
      id: 'user_DOKVD1U3L030',
      name: 'Ali Salah',
      email: 'ali@instatus.com',
    },
    location: '',
    occurred_at: '2022-01-05T14:31:13.607Z',
    metadata: {
      redirect: '/setup',
      description: 'User login succeeded.',
      x_request_id: 'req_W1Y13QOHMI5H',
    },
  },
  {
    id: 'evt_LKW5D',
    object: 'event',
    actor: {
      id: 'user_3VG744',
      name: 'Baraa Ahmed',
      email: 'baraa@instatus.com',
    },
    group: 'instatus.com',
    action: {
      id: 'evt_1NCAOQ5',
      object: 'event_action',
      name: 'user.create_succeeded',
    },
    target: {
      id: 'user_DOKVD1U3L030',
      name: 'Ali Salah',
      email: 'ali@instatus.com',
    },
    location: '',
    occurred_at: '2022-01-05T14:31:13.607Z',
    metadata: {
      redirect: '/setup',
      description: 'User login succeeded.',
      x_request_id: 'req_W1Y13QOHMI5H',
    },
  },
  {
    id: 'evt_LKW5W',
    object: 'event',
    actor: {
      id: 'user_3VG745',
      name: 'Omar AbdulRahman',
      email: 'omar@instatus.com',
    },
    group: 'instatus.com',
    action: {
      id: 'evt_1NCAOQ6',
      object: 'event_action',
      name: 'user.invited_teammate',
    },
    target: {
      id: 'user_DOKVD1U3L030',
      name: 'Ali Salah',
      email: 'ali@instatus.com',
    },
    location: '',
    occurred_at: '2022-01-05T14:31:13.607Z',
    metadata: {
      redirect: '/setup',
      description: 'User login succeeded.',
      x_request_id: 'req_W1Y13QOHMI5H',
    },
  },
];

export default function DataTable() {
  return (
    <div className="my-8 rounded-xl">
      <div className="w-full bg-gray-100 p-4 pb-0">
        <input
          type="text"
          className="w-full rounded-lg border border-gray-200 bg-transparent p-2 text-sm focus:border-gray-400 focus:outline-none active:border-gray-400"
          placeholder="Search name, email, or action ..."
        />
      </div>
      <table className="min-w-full text-left text-sm">
        <thead className="border-x border-gray-100 bg-gray-100 font-medium uppercase text-gray-600">
          <tr className="grid grid-cols-3">
            <th scope="col" className="px-6 py-4">
              Actor
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
            <th scope="col" className="px-6 py-4">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="border-x border-gray-100">
          {events.map((event) => {
            return <TableRow key={event.id} event={event} />;
          })}
        </tbody>
      </table>
      <button
        onClick={() => alert('Hi')}
        className="w-full bg-gray-100 py-4 text-sm font-semibold uppercase text-gray-600 transition duration-300 ease-in-out hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
      >
        Load more
      </button>
    </div>
  );
}
