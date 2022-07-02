const Task = require('../models/Task')

const getAllTasks = (req,res)=>{
    res.send('Get all tasks')
  }
const createTask = async (req,res)=>{
  try {
    const task = await Task.create(req.body)
    res.status(201).json({task})
    
  } catch (error) {
    res.status(500).json({msg:error})  
  }
    // res.send('Create tasks')
    // res.json(req.body)
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

