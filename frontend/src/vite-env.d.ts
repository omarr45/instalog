/// <reference types="vite/client" />
export type Event = {
  id: string;
  actor: {
    name: string;
    email: string;
    id: string;
  };
  action: {
    name: string;
    object: string;
    id: string;
  };
  occurred_at: string;
  metadata: {
    redirect: string;
    description: string;
    x_request_id: string;
  };
  target: {
    name: string;
    id: string;
    email: string;
  };
  object: string;
  group: string;
  location: string;
};

export type TableRowProps = {
  event: Event;
};
