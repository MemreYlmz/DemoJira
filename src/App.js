import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "../src/components/TaskCreate.css"
import { useState,useEffect } from "react";
import { getTodos, addTodo, deleteTodo, updateTodo } from './api';

function App() {
  const [tasks,setTasks] = useState([])

  useEffect(() => {
    async function fetchTodos() {
      const todos = await getTodos();
      setTasks(todos);
    }
    fetchTodos();
  }, []);

  
  const createTask = async (term, taskDesc) => {
    // Yeni görevi API'ye ekle
    const newTodo = { term, taskDesc };
    try {
        const createdTodo = await addTodo(newTodo);
        const task = { id: createdTodo.insertedId, term: newTodo.term, taskDesc: newTodo.taskDesc };
        setTasks([...tasks, task]); // Varsayılan olarak kabul ediyorum ki tasks bir state değişkenidir.
    } catch (error) {
        console.error("Görev eklenirken bir hata oluştu:", error);
    }
};


  const deleteTaskById = async (id) => {
    // Görevi API'den sil
    await deleteTodo(id);
    const updatedTasks = tasks.filter((task) => task._id !== id);
    setTasks(updatedTasks); // Silinen görevi yerel state'den kaldır
  };

  const editTaskById = async (id, updatedTerm, updatedDesc) => {
    // Görevi API'de güncelle
    const updatedTodo = { term: updatedTerm, taskDesc: updatedDesc };
    await updateTodo(id, updatedTodo);

    const updatedTasks = tasks.map((task) => {
      if (task._id === id) {
        return { ...task, term: updatedTerm, taskDesc: updatedDesc };
      }
      return task;
    });
    setTasks(updatedTasks); // Güncellenen görevi yerel state'de güncelle
  };

  

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} updateTask={editTaskById} />
    </div>
  );
}

export default App;
