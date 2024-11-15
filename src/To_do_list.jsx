import React, { useState } from "react";


function To_do_list() {

    const [tasks, setTasks] = useState(["task1"]);
    const [newTask, setNewTask] = useState("")

    function handleInput(e) {
        setNewTask(e.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask)
    }

    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks]
            const temp = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index - 1]
            updatedTasks[index - 1] = temp
            setTasks(updatedTasks)
        }
    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks]
            const temp = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index + 1]
            updatedTasks[index + 1] = temp
            setTasks(updatedTasks)
        }
    }


    return (<>
        <div>
            <h1>To Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInput}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={() => moveUp(index)}>Up</button>
                        <button onClick={() => moveDown(index)}>Down</button>
                    </li>
                )}
            </ol>
        </div>
    </>
    );
}

export default To_do_list