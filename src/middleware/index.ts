const knex = require("../knex");
const admin = require("../firebase-config/firebase.config");

class Middleware {
  async decodeToken(req: any, res: any, next: any) {
    const token = req.headers.authorization?.split(" ")[1];

    try {
      const decodedVal = await admin.auth().verifyIdToken(token);
      const uid = decodedVal.uid;
      console.log("this is decodeToken", decodedVal);
      if (decodedVal) {
        req.user = decodedVal;
        const users = await knex
          .select("id")
          .from("users")
          .where("id", req.user.uid);
        const uidList = users.map((user: any) => user.uid);
        if (uidList.includes(req.user.uid)) {
          return next();
        } else {
          const fullName = req.user.name.split(" ");
          const userInfo = {
            first_name: fullName[0],
            last_name: fullName[fullName.length - 1],
            email: req.user.email,
            id: req.user.uid
          };
          await knex.insert(userInfo).into("users");
          return next();
        }
      }
      return res.json({ message: "not authorized" });
    } catch (error) {
      console.log("error:", error);
      return res.json(error);
    }
  }
}

module.exports = new Middleware();
