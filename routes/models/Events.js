const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  artist_name: { type: String, required: true },
  location: { type: String, required: true },
  venue_name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  event_url: { type: String, required: true },
  longitude: { type: String, required: true },
  latitude: { type: String, required: true },
  eventId: { type: String, required: true, unique: true }
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event;

