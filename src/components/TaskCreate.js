import React, { useState } from 'react'
import "./TaskCreate.css"
import { addTodo, updateTodo } from '../api'

function TaskCreate({onCreate,task,taskFormUpdate,onUpdate}) {
    const [term,setTerm] = useState(task ? task.term : "")
    const [taskDesc,setTaskDesc] = useState(task ? task.taskDesc : "")
    
    const handleChange = (event)=>{
        setTerm(event.target.value)
    }

    const handleTaskChange = (event)=>{
        setTaskDesc(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (taskFormUpdate) {
          try {
            onUpdate(term, taskDesc);
            setTerm("");
            setTaskDesc("");
          } catch (error) {
            console.error('Error updating task:', error);
          }
        }
        // Değilse, yeni bir görev oluştur
        else {
         
          try {

            onCreate(term,taskDesc);
            setTerm("");
            setTaskDesc("");
          } catch (error) {
            console.error('Error creating task:', error);
          }
        }
      }


  return (
    <div>
        {taskFormUpdate ? 
        (<div className='taskUpdate-div'>
        <h3 className='taskCreate-h3'>Lütfen Taskı Düzenleyiniz</h3>
        <form className='taskCreate-form'>
            <label className='task-label'>Başlığı Düzenleyiniz</label>
            <input value={term} onChange={handleChange} className='task-input' type='text' ></input>
            <label className='task-label'>Taskı Düzenleyiniz</label>
            <textarea value={taskDesc} onChange={handleTaskChange} className='task-input' />
            <button onClick={handleSubmit} className='task-button update-button' type='submit' >Oluştur</button>
        </form>
    </div>) 
    : 
    (<div className='taskCreate-div'>
        <h3 className='taskCreate-h3'>Lütfen Task Ekleyiniz</h3>
        <form className='taskCreate-form'>
            <label className='task-label'>Başlık</label>
            <input value={term} onChange={handleChange} className='task-input' type='text' ></input>
            <label className='task-label'>Görev</label>
            <textarea value={taskDesc} onChange={handleTaskChange} className='task-input' />
            <button onClick={handleSubmit} className='task-button' type='submit' >Oluştur</button>
        </form>
    </div>
    )}
    </div>
    
  )
}

export default TaskCreate