const userModel = require("../models/users");

module.exports = {
    async getUsers(req, res)  {
        const allUsers = await userModel.getAllUsers();
        res.send(allUsers);
    },

    async getUserById(req, res){
        const id = req.params.id;
        const specifiedUser = await userModel.getUsersById(id);
        res.send(specifiedUser);
    },

    async getUserbyName(req, res) {
        const userName = req.params.name;
        const user = await userModel.getUsersByUserName(userName);
        res.send(user);
    },

    async saveUser(req, res) {

        const { id, email, first_name, last_name, points } = req.body;

        const userObj = {
            id: id,
            email: email,
            first_name: first_name,
            last_name: last_name,
            points: points
        }
        if (id) {
            await userModel.updateUser(id, userObj)
        } else {
            await userModel.createUser(userObj);
        }

    },

    async deleteUser(req, res){
        const id = req.params.id;
        await userModel.deleteUser(id);
    }
}