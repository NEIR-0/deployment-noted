class ControllerUser {
  static async createUser(req, res, next) {
    console.log("masuk sini");
    res.status(200).json({ message: "success changed auto build github" });
    try {
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ControllerUser;
