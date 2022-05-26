const taskModel = require("../models/tasks");

module.exports = {
    async getTasks(req, res)  {
        const allTasks = await taskModel.getAllTasks();
        res.send(allTasks);
    },

    async getTaskById(req, res){
        const id = req.params.id;
        const specifiedTask = await taskModel.getTaskById(id);
        res.send(specifiedTask);
    },

    async getTaskbyName(req, res) {
        const taskName = req.params.name;
        const task = await taskModel.getByTaskName(taskName);
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
            await taskModel.updateTask(id, taskObj)
        } else {
            await taskModel.createTask(taskObj);
        }

    },

    async deleteTask(req, res){
        const id = req.params.id;
        await taskModel.deleteTask(id);
    }
}