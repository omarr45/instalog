import * as EventService from './event.service';

import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import express from 'express';

export const eventRouter = express.Router();

// GET: list of all events
eventRouter.get('/', async (req: Request, res: Response) => {
  try {
    const events = await EventService.listEvents(req.query);
    return res.status(200).json(events);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

// GET: event by id
eventRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const event = await EventService.getEvent(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    return res.status(200).json(event);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

// POST: create a new event
// Params: object, actor_id, actor_name, group, action_id, action_object, action_name, target_id, target_name, location, occurred_at, metadata
eventRouter.post(
  '/',
  body('object').isString(),
  body('actor_id').isString(),
  body('actor_name').isString(),
  body('group').isString(),
  body('action_id').isString(),
  body('action_object').isString(),
  body('action_name').isString(),
  body('target_id').isString(),
  body('target_name').isString(),
  body('location').isString(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    try {
      const newEvent = await EventService.createEvent(req.body);
      return res.status(201).json(newEvent);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

// DELETE: delete an event by id
eventRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedEvent = await EventService.deleteEvent(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    return res.status(204).json({ message: 'Event deleted successfully' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});
