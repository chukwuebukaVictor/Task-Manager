const mongoose = require('mongoose');

const TaskScheme = new mongoose.schema({
  name: String, completed: Boolean
})

module.exports = mongoose.model('Task', TaskSchema)