const mongoose = require("mongoose");

module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    const connection = await new   mongoose.connect(process.env.MONGODB_URI, connectionParams);
    console.log(`MongoDB connection established... : ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

