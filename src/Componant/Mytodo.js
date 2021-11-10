import React, { useState } from 'react';
import './Mytodo.css';
import add from './add.png';


//      ******************* This is main file of todo *****************          //

// ************* Create a first function on input list of todo *******************   ///
function ToDoItem(props) {
    return(
        <div className="list-item row jc-space-between">
            <span>{props.itemData.description}</span>
            <img src={add} className="delete" onClick={()=>props.deleteTask(props.index)}/>
        </div>
    )
}

// *********** create a second function in Mytodo Hooks **************// 
function Mytodo() {
    const [inpute, setInpute ] = useState();
    const [toDoList, setToDoList] = useState([]);

    const addNote = () => {
        toDoList.push({ description: inpute})
        setToDoList(toDoList)
        setInpute("")

    }

    const deleteTask = (index) => {
        const newList = toDoList.filter((item,i) => i !==index);
        setToDoList(newList)
    }


    return (
        // ****************  main div of todolist ***************//
        <div className="app-background">
            <p className="heading">My ToDo list</p>
            <div className="container">
                <div>
                <input className="input" value={inpute} onChange={(event) => setInpute(event.target.value)}/>
                <button className="button" onClick={addNote}>ADD</button>
            </div>
            {toDoList?.length? toDoList.map((toDoObject,index)=>

            <ToDoItem index={index} itemData={toDoObject} deleteTask={deleteTask}/>):

              <p className="notext">Create Your Todo !</p>}
            
      </div>
      </div>
        
    )
}

export default Mytodo
