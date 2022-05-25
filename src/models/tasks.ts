

const tasksTable = "Tasks";

const getAllTasks = () => {
    return knex
    .select({
        id: "id",
        description: "description",
        status: "status",
        points: "points",
        event: "eventID",
        users: "userID",
        cost: "cost"
    })
    .from(tasksTable)
};

const getTaskById = (id: Number) => {
    return knex
    .select({
        id: "id",
        description: "description",
        status: "status",
        points: "points",
        event: "event_id",
        users: "user_id",
        cost: "cost"
    })
    .from(tasksTable)
    .where({id: id})
    .first()
};

const getByTaskName = (taskname: String) => {
    return knex
    .select({
        id: "id",
        description: "description",
        status: "status",
        points: "points",
        event: "event_id",
        users: "user_id",
        cost: "cost"
    })
    .from(tasksTable)
    .where({name: taskname})
    .first()
};

const createTask = (task: Object) => {
    return knex.insert(task).into("tasks").catch(console.error());
};

const updateTask = (id: Number, updatedInfo: Object) => {
    return knex("Tasks")
    .update(updatedInfo)
    .where({"id": id})
    .catch(console.error())
};

const deleteTask = (id: Number) => {
    return knex
    .select({
        id: "id",
        description: "description",
        status: "status",
        points: "points",
        event: "event_id",
        users: "user_id",
        cost: "cost"
    })
    .from(eventsTable)
    .where({id: id})
    .del()
};

module.exports = {getAllEvents, getEventById, getByEventName, createUser, updateUser, deleteUser};