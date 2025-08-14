const taskListModel = require("../models/taskListModel")


const taskListController ={
    // GET /app
    index: (req,res)=>{
        const taskLists = taskListModel.getAllTaskLists()
        res.render('app', {taskLists})
    },

    // GET /app/newList
    create: (req,res)=>{
        res.render('create')
    },

    // POST /app/newList
    save: (req,res)=>{
        const {title} = req.body
        const newList = taskListModel.createList(title)
        taskListModel.saveList(newList)
        res.redirect('/app')
    },
    //GET /app/:id
    show: (req,res)=>{
        const id = req.params.id
        const taskList = taskListModel.getTaskListById(id)
        res.render('show', {taskList})
    },
    deleteList: (req,res)=>{
        const id = req.params.id
        taskListModel.deleteList(id)
        res.redirect('/app')
    },
    addTask: (req,res)=>{
        const id  = req.params.id
        const {title} = req.body
        taskListModel.addTask(id, title)
        res.redirect(`/app/${id}`)
    },
    completeTask: (req,res)=>{
        const {listId, taskId} = req.params
        taskListModel.completeTask(listId, taskId)
        res.redirect(`/app/${listId}`)
    },
    undoTask: (req,res)=>{
        const {listId, taskId} = req.params
        taskListModel.undoTask(listId, taskId)
        res.redirect(`/app/${listId}`)
    },
    deleteTask: (req, res) => {
        const { listId, taskId } = req.params; 
        taskListModel.deleteTask(listId, taskId);
        res.redirect(`/app/${listId}`);
    }


}

module.exports = taskListController