export {};

let knex = require("../knex");

const usersTable = "users";

const getAllUsers = () => {
  return knex
    .select({
      id: "id",
      email: "email",
      first_name: "first_name",
      last_name: "last_name",
      photoUrl: "photoUrl",
      points: "points",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(usersTable);
};

const getUsersById = (id: Number) => {
  return knex
    .select({
      id: "id",
      email: "email",
      first_name: "first_name",
      last_name: "last_name",
      photoUrl: "photoUrl",
      points: "points",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(usersTable)
    .where({ id: id })
    .first();
};

const getUsersByUserName = (username: String) => {
  return knex
    .select({
      id: "id",
      email: "email",
      first_name: "first_name",
      last_name: "last_name",
      photoUrl: "photoUrl",
      points: "points",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(usersTable)
    .where({ name: username })
    .first();
};

const getUsersByFirstName = (text: String) => {
  return knex
    .select({
      id: "id",
      email: "email",
      first_name: "first_name",
      last_name: "last_name",
      photoUrl: "photoUrl",
      points: "points",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(usersTable)
    .where({ first_name: text })
    .first();
};

const createUser = (user: Object) => {
  return knex.insert(user).into("users").catch(console.error);
};

const updateUser = (id: string, updatedInfo: Object) => {
  return knex("users").update(updatedInfo).where("id", id).catch(console.error);
};

const deleteUser = (id: string) => {
  return knex
    .select({
      id: "id",
      email: "email",
      first_name: "first_name",
      last_name: "last_name",
      photoUrl: "photoUrl",
      points: "points",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(usersTable)
    .where("id", id)
    .del();
};

module.exports = {
  getAllUsers,
  getUsersById,
  getUsersByFirstName,
  getUsersByUserName,
  createUser,
  updateUser,
  deleteUser,
};
