const { User } = require("../database/models");

class ControllerUser {
  static async createUser(req, res, next) {
    const dataUser = await User.findAll();
    res.status(200).json(dataUser);
    try {
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ControllerUser;
