const connectDB = require("./src/config/db");
const config = require("./src/config/index");
const app = require("./src/server");

connectDB()

app.listen(config.PORT, () => {
  console.log(`Server running on http://localhost:${config.PORT}`);
});
