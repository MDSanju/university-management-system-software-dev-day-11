import mongoose from "mongoose";

import app from "./app";
import config from "./config";

// Database connection
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Successfully database connected!");

    // Start the server
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}

main();
