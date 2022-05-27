const auth_admin = require("firebase-admin");

const serviceAccount = require("./serviceAccount.json");

auth_admin.initializeApp({
  credential: auth_admin.credential.cert(serviceAccount),
});

module.exports = auth_admin;
