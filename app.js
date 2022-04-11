const sequelize = require("./database/database");

const Customer = require("./models/customer");

sequelize.sync().then((result) => {
  console.log('created');
}).catch((err) => {
 console.log(err);
});
