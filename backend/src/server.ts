import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  await mongoose.connect(config.db_url as string);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

main()
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
    process.exit(1); // Exit the process with failure
  });
