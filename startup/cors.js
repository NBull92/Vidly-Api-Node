const cors = require("cors");

module.exports = function (app) {
  app.use(cors());
  //  app.use((req, res, next) => {
  //    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  //    res.setHeader("Access-Control-Allow-Headers", "*");
  //    res.header("Access-Control-Allow-Credentials", true);
  //    next();
  //  });
};
