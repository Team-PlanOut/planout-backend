const admin = require("../firebase-config/firebase.config");

class Middleware {
  async decodeToken(req: any, res: any, next: any) {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);

    try {
      const decodedVal = await admin.auth().verifyIdToken(token);
      console.log("this is decodeToken", decodedVal);
      if (decodedVal) {
        req.user = decodedVal;
        return next();
      }
      return res.json({ message: "not authorized" });
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = new Middleware();
