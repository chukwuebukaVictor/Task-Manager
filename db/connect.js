const mongoose = require('mongoose') 

const connectionString = 'mongodb+srv://Chukwuebuka:Buckyvicky@nodeexpressprojects.nbnlu.mongodb.net/Task-Manager?retryWrites=true&w=majority'


const connectDB = (url) =>{
  return mongoose.connect(connectionString)

}
// .then(()=>console.log('CONNECTED TO THE DB ...'))
// .catch((err)=>console.log(err))

module.exports = connectDB