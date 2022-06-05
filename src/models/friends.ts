export {};
let knex = require("../knex");

const friendsTable = "friends";

const getAllFriends = (id: string) => {
  return knex("friends")
    .select({
      id: "friendsTable.id",
      user1_id: "friendsTable.user1_id",
      user2_id: "friendsTable.user1_id",
    })
    .where(id, "user1_id");
};

const addFriend = (newFriend: Object) => {
  return knex.insert(newFriend).into("friends").catch(console.error());
};

const deleteFriend = (id: string, exFriendId: string) => {
  return knex(friendsTable)
    .select("*")
    .where({ id: id, exFriendId: "user2_id" })
    .del();
};

module.exports = { getAllFriends, addFriend, deleteFriend };