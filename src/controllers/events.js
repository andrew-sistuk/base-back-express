import { getAllEvents, getEventByID } from '../services/events.js';
import createHttpError from 'http-errors';

export const getAllEventsController = async (_, res) => {
  const events = await getAllEvents();
  res.json({
    data: events,
  });
};

export const getEventByIDController = async (req, res, _next) => {
  const { eventId } = req.params;

  const event = await getEventByID(eventId);

  if (!event) {
    throw createHttpError(404, 'Student not found');
  }

  res.json({
    status: 200,
    message: `Successfully found event with id ${eventId}!`,
    data: event,
  });
};
