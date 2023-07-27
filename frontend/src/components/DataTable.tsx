export interface DataTableProps {}

import { Event } from '../vite-env';
import TableRow from './TableRow';

const events: Event[] = [
  {
    id: 'evt_15B56WILKW5K',
    object: 'event',
    actor: {
      id: 'user_3VG74289PUA2',
      name: 'Ali Salah',
      email: 'ali@instatus.com',
    },
    group: 'instatus.com',
    action: {
      id: 'evt_action_PGTD81NCAOQ2',
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
    id: 'evt_15B56WILKW5B',
    object: 'event',
    actor: {
      id: 'user_3VG74289PUA2',
      name: 'Ali Salah',
      email: 'ali@instatus.com',
    },
    group: 'instatus.com',
    action: {
      id: 'evt_action_PGTD81NCAOQ4',
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
    id: 'evt_15B56WILKW5B',
    object: 'event',
    actor: {
      id: 'user_3VG74289PUA2',
      name: 'Baraa Hossam',
      email: 'baraa@instatus.com',
    },
    group: 'instatus.com',
    action: {
      id: 'evt_action_PGTD81NCAOQ5',
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
    id: 'evt_15B56WILKW5B',
    object: 'event',
    actor: {
      id: 'user_3VG74289PUA2',
      name: 'Omar AbdulRahman',
      email: 'omar@instatus.com',
    },
    group: 'instatus.com',
    action: {
      id: 'evt_action_PGTD81NCAOQ6',
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

export default function DataTable(props: DataTableProps) {
  console.log(props);
  return (
    <div className="my-8 overflow-hidden rounded-xl">
      <div className="w-full bg-gray-100 p-4 pb-0">
        <input
          type="text"
          className="w-full rounded-lg border-2 border-gray-200 bg-transparent p-2 text-sm focus:border-gray-400 focus:outline-none active:border-gray-400"
          placeholder="Search name, email, or action ..."
        />
      </div>
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-x border-gray-100 bg-gray-100 font-medium uppercase text-gray-600">
          <tr>
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
      <button className="w-full bg-gray-100 py-4 text-sm font-semibold uppercase text-gray-600 transition duration-300 ease-in-out hover:bg-gray-200 focus:bg-gray-200 focus:outline-none">
        Load more
      </button>
    </div>
  );
}
