const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/authMiddleware");

// Create task
router.post("/", auth, async(req,res)=>{
  const task = new Task({
    title:req.body.title,
    description:req.body.description,
    userId:req.user.id
  });
  await task.save();
  res.json(task);
});

// Get tasks
router.get("/", auth, async(req,res)=>{
  const tasks = await Task.find({userId:req.user.id});
  res.json(tasks);
});

// Delete task
router.delete("/:id", auth, async(req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({msg:"Deleted"});
});

router.put("/:id", auth, async (req,res)=>{
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

module.exports = router;
