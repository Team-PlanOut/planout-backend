const eventModel = require("../models/events");

module.exports = {
    async getEvents(req, res)  {
        const allEvents = await eventModel.getAllEvents();
        res.send(allEvents);
    },

    async getEventById(req, res){
        const id = req.params.id;
        const specifiedEvent = await eventModel.getEventById(id);
        res.send(specifiedEvent);
    },

    async getEventbyName(req, res) {
        const eventName = req.params.name;
        const event = await eventModel.getByEventName(eventName);
        res.send(event);
    },

    async saveEvent(req, res) {

        const { id, name, date, budget, members, host} = req.body;

        const eventObj = {
            id: id,
            name: name,
            date: date,
            budget: budget,
            members: members,
            host: host
        }
        if (id) {
            await eventModel.updateEvent(id, eventObj)
        } else {
            await eventModel.createEvent(eventObj);
        }

    },

    async deleteEvent(req, res){
        const id = req.params.id;
        await eventModel.deleteEvent(id);
    }
}