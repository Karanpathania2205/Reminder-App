//import React from 'react' //if we use a class instead of a function
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState , useEffect} from 'react'

 function App() {
   const[showAddTask,setShowAddTask]=useState(false)
   const[tasks,setTasks]=useState([]);
   
   //Add Tasks
   const addTask =(task)=>{
     const id=Math.floor(Math.random()*10000)+1
     const newTask={id,...task}
     setTasks([...tasks,newTask]) 
    }
   //delete task
   const deleteTask=(id)=>{
     setTasks(tasks.filter((task)=>task.id!==id))

   }
   //toggle reminder
   const toggleReminder=(id)=>{
     setTasks(tasks.map((task)=>
     task.id===id?{...task , reminder:!task.reminder}:task
     )
     ) 
   }
   

   return (
     <div className='container'>
         
         <Header title='karan' onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/> {/*other datatypes have to be sent like{1}*/}
          {showAddTask && <AddTask onAdd={addTask}/>} {/*shorter way of ternary
          just put in && , no need for third expression*/}
         {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):("NO TASKS TO SHOW")}
     </div>
   );
}


// class App extends React.Component{
//   render(){
//     return <h1>Hello from class</h1>
//   }
// }
export default App;