async function dbConnect(){
  const mongoose = require('mongoose')
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true ,
    useFindAndModify: false,
  };

  let getURL = (env) => {
    return (env === 'test') ? process.env.DB_HOST_TEST : process.env.DB_HOST
  }

  await mongoose.connect(getURL(process.env.NODE_ENV), options)
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  return mongoose
}

module.exports = await dbConnect()
