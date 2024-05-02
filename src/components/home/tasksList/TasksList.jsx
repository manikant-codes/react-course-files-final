import React, { useState } from "react";
import Modal from "../../common/modal/Modal";
import AddUpdateTask from "../AddUpdateTask";
import Header from "./Header";
import List from "./List";

function TasksList({ list, dispatch }) {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  function toggleModal() {
    setOpen(!open);
    setSelectedTask(null);
  }

  return (
    <div>
      <Header toggleModal={toggleModal} />
      <List
        list={list}
        toggleModal={toggleModal}
        dispatch={dispatch}
        setSelectedTask={setSelectedTask}
      />
      {open && (
        <Modal
          title={selectedTask ? "Update Task" : "Add Task"}
          toggleModal={toggleModal}
          body={
            <AddUpdateTask
              toggleModal={toggleModal}
              list={list}
              dispatch={dispatch}
              selectedTask={selectedTask}
            />
          }
        />
      )}
    </div>
  );
}

export default TasksList;
