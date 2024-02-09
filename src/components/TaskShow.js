import React, { useState } from 'react'
import "./TaskCreate.css"
import TaskCreate from './TaskCreate'


function TaskShow({task,onDelete,onUpdate}) {
    const [showEdit,setShowEdit] = useState(false)


    const handleUpdate=()=>{
        setShowEdit(!showEdit)
    }

    const handleDelete=()=>{
        onDelete(task.id)
    }
    const handleSubmit=(id,updatedTerm,updatedDesc)=>{
        setShowEdit(false)
        onUpdate(id,updatedTerm,updatedDesc)
    }

  return (
    <div className='TaskShow-div' >
        {showEdit ? (<TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}    />) : ( <><h3>Göreviniz</h3>
        <p className='taskTitle'>{task.term}</p>
        <h3>Yapılacaklar</h3>
        <p className='taskTitle'>{task.taskDesc}</p>

        <div  className='TaskShow-buttons'>
            <button className='deletebutton' onClick={handleDelete} >Sil</button>
            <button className='upgradebutton' onClick={handleUpdate} >Güncelle</button>
        </div> </>)}

    </div>
  )
}

export default TaskShow