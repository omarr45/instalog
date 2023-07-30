import { useEffect, useState } from 'react';

import DataPage from './DataPage';

/*
const events: Event[] = [
  {
    id: 'evt_LKWAN',
    object: 'event',
    actor_id: 'user_3VG742',
    actor_name: 'Ali Salah',
    actor_email: 'ali@instatus.com',
    group: 'instatus.com',
    action_id: 'evt_1NCAOQ2',
    action_object: 'event_action',
    action_name: 'user.searched_activity_log_events',
    target_id: 'user_DOKVD1U3L030',
    target_name: 'Ali Salah',
    target_email: 'ali@instatus.com',
    location: '',
    occurred_at: new Date('2022-01-05T14:31:13.607Z'),
    metadata: {
      redirect: '/setup',
      description: 'User login succeeded.',
      x_request_id: 'req_W1Y13QOHMI5H',
    },
  },
  // {
  //   id: 'evt_LKW5C',
  //   object: 'event',
  //   actor: {
  //     id: 'user_3VG743',
  //     name: 'Ali Salah',
  //     email: 'ali@instatus.com',
  //   },
  //   group: 'instatus.com',
  //   action: {
  //     id: 'evt_1NCAOQ4',
  //     object: 'event_action',
  //     name: 'user.login_succeeded',
  //   },
  //   target: {
  //     id: 'user_DOKVD1U3L030',
  //     name: 'Ali Salah',
  //     email: 'ali@instatus.com',
  //   },
  //   location: '',
  //   occurred_at: '2022-01-05T14:31:13.607Z',
  //   metadata: {
  //     redirect: '/setup',
  //     description: 'User login succeeded.',
  //     x_request_id: 'req_W1Y13QOHMI5H',
  //   },
  // },
  // {
  //   id: 'evt_LKW5D',
  //   object: 'event',
  //   actor: {
  //     id: 'user_3VG744',
  //     name: 'Baraa Ahmed',
  //     email: 'baraa@instatus.com',
  //   },
  //   group: 'instatus.com',
  //   action: {
  //     id: 'evt_1NCAOQ5',
  //     object: 'event_action',
  //     name: 'user.create_succeeded',
  //   },
  //   target: {
  //     id: 'user_DOKVD1U3L030',
  //     name: 'Ali Salah',
  //     email: 'ali@instatus.com',
  //   },
  //   location: '',
  //   occurred_at: '2022-01-05T14:31:13.607Z',
  //   metadata: {
  //     redirect: '/setup',
  //     description: 'User login succeeded.',
  //     x_request_id: 'req_W1Y13QOHMI5H',
  //   },
  // },
  // {
  //   id: 'evt_LKW5W',
  //   object: 'event',
  //   actor: {
  //     id: 'user_3VG745',
  //     name: 'Omar AbdulRahman',
  //     email: 'omar@instatus.com',
  //   },
  //   group: 'instatus.com',
  //   action: {
  //     id: 'evt_1NCAOQ6',
  //     object: 'event_action',
  //     name: 'user.invited_teammate',
  //   },
  //   target: {
  //     id: 'user_DOKVD1U3L030',
  //     name: 'Ali Salah',
  //     email: 'ali@instatus.com',
  //   },
  //   location: '',
  //   occurred_at: '2022-01-05T14:31:13.607Z',
  //   metadata: {
  //     redirect: '/setup',
  //     description: 'User login succeeded.',
  //     x_request_id: 'req_W1Y13QOHMI5H',
  //   },
  // },
];
*/

export default function DataTable() {
  const [search, setSearch] = useState('');
  const [cnt, setCnt] = useState(1);
  const [queryParams, setQueryParams] = useState('');
  const [filterBy, setFilterBy] = useState('none');
  const [filterValue, setFilterValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const dataPages = [];
  for (let i = 1; i <= cnt; i++) {
    dataPages.push(<DataPage index={i} queryParams={queryParams} key={i} />);
  }

  const handleExport = () => {
    console.log('hi');
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const filter: string = e.target.text;

    switch (filter) {
      case 'Actor ID':
        setFilterBy('actor_id');
        break;
      case 'Target ID':
        setFilterBy('target_id');
        break;
      case 'Action ID':
        setFilterBy('action_id');
        break;
      case 'None':
      default:
        setFilterBy('none');
        break;
    }

    setShowDropdown(false);
  };

  useEffect(() => {
    if (filterBy !== 'none')
      setQueryParams(
        `&q=${search}&filterBy=${filterBy}&filterValue=${filterValue}`,
      );
    else {
      setFilterValue('');
      setQueryParams(`&q=${search}`);
    }
  }, [search, filterBy, filterValue]);

  return (
    <div className="my-8 rounded-xl">
      <pre className="mb-2 rounded-lg bg-gray-100 p-3 text-center">{`API_URL/events?page=XX${queryParams}`}</pre>
      <div className="w-full rounded-t-xl bg-gray-100 p-4 pb-0">
        <div className="relative">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setQueryParams(`&q=${e.target.value}`);
            }}
            type="text"
            className="w-full rounded-lg border border-gray-200 bg-transparent p-2 text-sm focus:outline-none focus:ring-4 focus:ring-gray-300"
            placeholder="Search name, email, or action ..."
          />
          <div className="absolute right-0 top-0 flex">
            <label
              htmlFor="search-dropdown"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <button
              id="search-dropdown"
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex h-full items-center justify-center gap-2 border border-l-gray-200 p-2.5 text-xs font-medium uppercase text-gray-600 hover:bg-black/5 focus:outline-none focus:ring-4 focus:ring-gray-300"
              type="button"
            >
              <svg
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
              Filter
            </button>
            <div
              id="dropdown"
              className={
                showDropdown
                  ? 'absolute top-10 z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow'
                  : 'z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow'
              }
            >
              <ul className="py-2 text-sm" aria-labelledby="dropdown-button">
                <li title="actor" onClick={handleFilter}>
                  <a href="" className="block px-4 py-2 hover:bg-gray-100">
                    Actor ID
                  </a>
                </li>
                <li title="target" onClick={handleFilter}>
                  <a href="" className="block px-4 py-2 hover:bg-gray-100">
                    Target ID
                  </a>
                </li>
                <li title="action" onClick={handleFilter}>
                  <a href="" className="block px-4 py-2 hover:bg-gray-100">
                    Action ID
                  </a>
                </li>
                <li title="none" onClick={handleFilter}>
                  <a href="" className="block px-4 py-2 hover:bg-gray-100">
                    None
                  </a>
                </li>
              </ul>
            </div>
            <button
              onClick={handleExport}
              type="submit"
              className="flex h-full items-center justify-center gap-2 rounded-r-lg border-t-2 border-transparent p-2.5 text-sm font-medium text-gray-600 hover:bg-black/5 focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              <p className="text-xs uppercase">Export</p>
            </button>
          </div>
        </div>
        {filterBy === 'none' ? null : (
          <div className="relative">
            <input
              value={filterValue}
              onChange={(e) => {
                setFilterValue(e.target.value);
              }}
              type="text"
              className="mt-2 w-full rounded-lg border border-gray-200 bg-transparent p-2 text-sm focus:outline-double focus:outline-2 focus:outline-gray-400 active:border-gray-400"
              placeholder="Filter"
            />
            <p className="absolute right-4 top-[calc(50%-.25rem)] text-xs font-semibold text-gray-700">
              Filtering by {filterBy}
            </p>
          </div>
        )}
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
        {dataPages}
      </table>
      <button
        onClick={() => setCnt(cnt + 1)}
        className="w-full rounded-b-xl bg-gray-100 py-4 text-sm font-semibold uppercase text-gray-600 transition duration-300 ease-in-out hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
      >
        Load more
      </button>
    </div>
  );
}
