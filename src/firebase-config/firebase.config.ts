import auth_admin from "firebase-admin";

const serviceAccount = require("./serviceAccount.json");

auth_admin.initializeApp({
  credential: auth_admin.credential.cert(serviceAccount),
});

export default auth_admin;
