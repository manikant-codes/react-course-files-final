import { Button, Checkbox, TextInput } from "flowbite-react";
import React, { useReducer, useState } from "react";
import { HiPlus, HiTrash } from "react-icons/hi";

function reducer(tasks, action) {
  if (action.type === "ADD") {
    return [...tasks, action.payload];
  } else if (action.type === "DELETE") {
    const updatedTasks = tasks.filter((task) => {
      if (task.id === action.payload) {
        return false;
      } else {
        return true;
      }
    });
    return updatedTasks;
  } else if (action.type === "UPDATE") {
    const updatedTasks = tasks.map((value) => {
      if (value.id === action.payload) {
        return { ...value, isCompleted: !value.isCompleted };
      }
      return value;
    });
    return updatedTasks;
  } else {
    return tasks;
  }
}

function UseReducerTodoDemo() {
  const [tasks, dispatch] = useReducer(reducer, [
    {
      id: 1,
      task: "Hello!",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Another task!",
      isCompleted: true,
    },
  ]);
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleAdd() {
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        task: task,
        isCompleted: false,
      },
    });
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function handleComplete(id) {
    dispatch({ type: "UPDATE", payload: id });
  }

  return (
    <div className="p-[32px] flex flex-col gap-4">
      <div className="flex gap-4">
        <TextInput
          type="text"
          placeholder="Add a task..."
          className="grow-[1]"
          value={task}
          onChange={handleChange}
        />
        <Button onClick={handleAdd}>
          <HiPlus />
          Add Task
        </Button>
      </div>
      <ul className="flex flex-col gap-2">
        {tasks.map((task, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-2 bg-slate-200 p-4 rounded"
            >
              <Checkbox
                checked={task.isCompleted}
                onChange={() => {
                  handleComplete(task.id);
                }}
              />
              <p
                className={`grow-[1] ${task.isCompleted ? "line-through" : ""}`}
              >
                {task.task}
              </p>
              <Button
                color="failure"
                onClick={() => {
                  handleDelete(task.id);
                }}
              >
                <HiTrash />
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseReducerTodoDemo;
