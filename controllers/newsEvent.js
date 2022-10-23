const { NewsEvent } = require('../models');

const getAllEvents = async (req, res) => {
	try {
		const allNewsEvents = await NewsEvent.find({});
		return res.status(200).json(allNewsEvents);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const getEvent = async (req, res) => {
	try {
		const { id } = req.params;
		const event = await NewsEvent.findById(id);
		return res.status(200).json(event);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const createEvent = async (req, res) => {
	try {
		const event = await new NewsEvent(req.body);
		await event.save();
		return res.status(201).json(event);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const updateEvent = async (req, res) => {
	try {
		const { id } = req.params;
		const event = await NewsEvent.findById(id);
		for (let key in event) {
			if (req.body[key]) {
				event[key] = req.body[key];
			}
		}
		await event.save();
		return res.status(201).json(event);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const deleteEvent = async (req, res) => {
	try {
		const { id } = req.params;
		const event = await NewsEvent.findByIdAndDelete(id);
		return res.status(200).json(event);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

module.exports = {
	getAllEvents,
	getEvent,
	createEvent,
	updateEvent,
	deleteEvent
};
