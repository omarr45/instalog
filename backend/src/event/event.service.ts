import { db } from '../utils/db.server';

type Event = {
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
  metadata: any;
};

export const listEvents = async (queryParams: any = {}): Promise<Event[]> => {
  const { filterBy, filterValue, page, q } = queryParams;
  if (q)
    return await db.event.findMany({
      where: {
        [filterBy]: filterValue,
        OR: [
          { actor_name: { contains: q, mode: 'insensitive' } },
          { action_name: { contains: q, mode: 'insensitive' } },
          { target_name: { contains: q, mode: 'insensitive' } },
          { actor_email: { contains: q, mode: 'insensitive' } },
          { target_email: { contains: q, mode: 'insensitive' } },
        ],
      },
      take: 3,
      skip: page ? (parseInt(page) - 1) * 3 : 0,
    });
  else
    return await db.event.findMany({
      where: {
        [filterBy]: filterValue,
      },
      take: 3,
      skip: page ? (parseInt(page) - 1) * 3 : 0,
    });
};

export const getEvent = async (id: string): Promise<Event | null> => {
  return await db.event.findUnique({
    where: { id: id },
  });
};

export const createEvent = async (event: Event): Promise<Event> => {
  return await db.event.create({
    data: event,
  });
};

export const deleteEvent = async (id: string): Promise<Event | null> => {
  return await db.event.delete({
    where: { id: id },
  });
};
