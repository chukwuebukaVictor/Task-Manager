const getAllTasks = (req,res)=>{
    res.send('Get all tasks')
  }
const createTask = (req,res)=>{
    res.send('Create tasks')
  }
  const getTask = (req,res)=>{
      res.send('Get single task')
    }
const updateTask = (req,res)=>{
    res.send('Edit tasks')
  }
const deleteTask = (req,res)=>{
    res.send('Delete tasks')
  }







  module.exports = {
      getAllTasks,
      createTask,
      getTask,
      updateTask,
      deleteTask
    }

