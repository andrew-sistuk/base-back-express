import { eventsCollection } from '../db/models/events.js';

export const getAllEvents = async () => {
  return eventsCollection.find();
};

export const getEventByID = async (id) => {
  return eventsCollection.findById(id);
};
