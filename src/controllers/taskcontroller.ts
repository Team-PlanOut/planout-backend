const taskmodel = require("../models/tasks");

module.exports = {
    async getTasks(req, res)  {
        const allTasks = await taskmodel.getAllTasks();
        res.send(allTasks);
    },

    async getTaskById(req, res){
        const id = req.params.id;
        const specifiedTask = await taskmodel.getTaskById(id);
        res.send(specifiedTask);
    },

    async getTaskbyName(req, res) {
        const taskName = req.params.name;
        const task = await taskmodel.getByTaskName(taskName);
        res.send(task);
    },

    async saveTask(req, res) {

        const { id, description, status, points, event, users, cost} = req.body;

        const taskObj = {
            id: id,
            description: description,
            status: status,
            points: points,
            event: event,
            users: users,
            cost: cost
        }
        if (id) {
            await taskmodel.updateTask(id, taskObj)
        } else {
            await taskmodel.createTask(taskObj);
        }

    },

    async deleteTask(req, res){
        const id = req.params.id;
        await taskmodel.deleteTask(id);
    }
}