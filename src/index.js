import dotenv from "dotenv";
import connectDB from "./db/database.js";
import app  from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Process is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDb connection error :  ${error}`);
  });

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();
*/ 
