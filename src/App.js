import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "../src/components/TaskCreate.css"
import { useState } from "react";

function App() {
  const [tasks,setTasks] = useState([])

  const createTask = (term,taskDesc)=>{
    const createdTask = [
      ...tasks,{
        id:Math.round(Math.random()*99999),
        term,
        taskDesc
      }
    ]

  setTasks(createdTask) //burayı pek anlamadım

}

  const deleteTaskById=(id)=>{
    //console.log(id)
    const afterDeletingTasks= tasks.filter((task)=>{
      return task.id !== id
    })
    setTasks(afterDeletingTasks)
  }

  const editTaskById=(id,updatedTerm,updatedDesc)=>{
    //console.log(id)
    const updatedTasks = tasks.map((task)=>{
      if(task.id === id){
        return{id,term:updatedTerm,taskDesc:updatedDesc}
      }
      return task
    })
    setTasks(updatedTasks)
  }
  

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
