export {};
let knex = require("../knex");

const friendsTable = "friends";

const getAllFriends = (id: string) => {
  return knex("friends")
    .join("users", "friends.user2_id", "=", "users.id")
    .select({
      friendId: "users.id",
      friendFirstName: "users.first_name",
      friendLastName: "users.last_name",
      username: "users.username",
      email: "users.email",
      photoUrl: "users.photoUrl",
    })
    .where("friends.user1_id", id);
};

const addFriend = (newFriend: Object) => {
  return knex.insert(newFriend).into("friends").catch(console.error);
};

const endFriendship = (id: string, friendId: string) => {
  return knex(friendsTable)
    .select("*")
    .where({ user1_id: id, user2_id: friendId })
    .del();
};

module.exports = { getAllFriends, addFriend, endFriendship };
