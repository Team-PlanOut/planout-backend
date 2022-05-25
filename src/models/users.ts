const knex = require("../knex");

const usersTable = "users";

const getAllUsers = () => {
    return knex
    .select({
        id: "userId",
        name: "name",
        points: "points"
    })
    .from(usersTable)
};

const getUsersById = (id: Number) => {
    return knex
    .select({
        id: "userId",
        name: "name",
        points: "points"
    })
    .from(usersTable)
    .where({id: id})
    .first()
};

const getUsersByUserName = (username: String) => {
    return knex
    .select({
        id: "userId",
        name: "name",
        points: "points"
    })
    .from(usersTable)
    .where({name: username})
    .first()
};

const createUser = (user: Object) => {
    return knex.insert(user).into("users").catch(console.error());
};

const updateUser = (id: Number, updatedInfo: Object) => {
    return knex("users")
    .update(updatedInfo)
    .where({"id": id})
    .catch(console.error())
};

const deleteUser = (id: Number) => {
    return knex
    .select({
        id: "userId",
        name: "name",
        points: "points"
    })
    .from(usersTable)
    .where({id: id})
    .del()
};

module.exports = {getAllUsers, getUsersById, getUsersByUserName, createUser, updateUser, deleteUser};