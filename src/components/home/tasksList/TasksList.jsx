import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import Modal from "../../common/modal/Modal";
import AddUpdateTask from "../AddUpdateTask";

function TasksList({ list, setList }) {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  function toggleModal() {
    setOpen(!open);
    setSelectedTask(null);
  }

  console.log(selectedTask);

  return (
    <div>
      <Header toggleModal={toggleModal} />
      <List
        toggleModal={toggleModal}
        list={list}
        setList={setList}
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
              setList={setList}
              selectedTask={selectedTask}
            />
          }
        />
      )}
    </div>
  );
}

export default TasksList;
