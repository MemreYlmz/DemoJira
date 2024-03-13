import React from 'react'
import TaskShow from './TaskShow'


function TaskList({tasks,onDelete,updateTask}) {

  return (
    <div className='TaskList-div' >
        {tasks.map((task,index)=>{
            return <TaskShow key={index} task={task} onDelete={onDelete} updateTask={updateTask} />
        })}
    </div>
  )
}

export default TaskList