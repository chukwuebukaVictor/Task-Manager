const mongoose = require('mongoose') 

// const connectionString = ''


const connectDB = (url) =>{
  return mongoose.connect(url)

}
// .then(()=>console.log('CONNECTED TO THE DB ...'))
// .catch((err)=>console.log(err))

module.exports = connectDB