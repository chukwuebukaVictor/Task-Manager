const getAllTasks = (req,res)=>{
    res.send('Get all tasks')
  }
const createTask = (req,res)=>{
    // res.send('Create tasks')
    res.json(req.body)
  }
  const getTask = (req,res)=>{
      res.json({id:req.params.id})
    }
const updateTask = (req,res)=>{
    res.send('Update tasks')
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

