const mongoose = require("mongoose");

module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    const connection = await new   mongoose.connect(process.env.DB, connectionParams);
    console.log(`Your DB is connected to url : ${connection.connection.host}`);
  } catch (error) {
    console.log(`Your DB could not connected : ${error}`);
  }
};

