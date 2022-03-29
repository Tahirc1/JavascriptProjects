import { useState } from 'react'
import Header from './components/Header.jsx'
import Tasks from './components/Tasks.jsx'
import AddTask from './components/AddTask.jsx'

function App() {
  const [show, setshow] = useState(false)
  const [tasks,setTask] = useState([
    {
        id:1,
        text:"fun",
        day:"april 3 at 2:00pm",
        reminder:true,
    },
    {   id:2,
        text:"party",
        day:"april 5 at 6:00pm",
        reminder:true,
    },
    {   id:3,
        text:"school",
        day:"april 9 at 9:00am",
        reminder:false,
    }
])

//Add task 
  const addTask = (task) =>{
    const id = tasks.length +1
    const newtask = {id, ...task}
    setTask([...tasks,newtask])
  }


// delete task
  const delTask = (id) =>{
    setTask( tasks.filter( (task) => task.id != id))
    console.log(id)
  }

// Toggle reminder
  const togRem = (id) =>{
    setTask( tasks.map((task ) => task.id == id ? {...task,reminder: !task.reminder}:task))
  }

  
  return (
    <div className='container'>
    <Header greet='heyy' show={show} setShow={setshow}/>
    { show &&
      (<AddTask onAdd = {addTask}/>)}
    { tasks.length > 0 ?
    (<Tasks tasks={tasks} onDelete={delTask} onToggle={togRem} />):
    (<h3>No Task to Show</h3>)}
    </div>
   
  )
}

export default App
