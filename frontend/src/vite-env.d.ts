/// <reference types="vite/client" />

export type Event = {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  actor_email: string;
  group: string;
  action_id: string;
  action_object: string;
  action_name: string;
  target_id: string;
  target_name: string;
  target_email: string;
  location: string;
  occurred_at: Date;
  metadata: //JSON object
  {
    redirect?: string;
    description?: string;
    x_request_id?: string;
  };
};

// export type Event = {
//   id: string;
//   actor: {
//     name: string;
//     email: string;
//     id: string;
//   };
//   action: {
//     name: string;
//     object: string;
//     id: string;
//   };
//   occurred_at: string;
//   metadata?: {
//     redirect?: string;
//     description?: string;
//     x_request_id?: string;
//   };
//   target: {
//     name: string;
//     id: string;
//     email: string;
//   };
//   object: string;
//   group: string;
//   location: string;
// };

export type TableRowProps = {
  event: Event;
};
