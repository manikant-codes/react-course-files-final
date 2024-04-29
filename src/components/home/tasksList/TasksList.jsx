import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import Modal from "../../common/modal/Modal";
import AddUpdateTask from "../AddUpdateTask";

function TasksList() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([
    {
      id: Date.now(),
      task: "Task 1",
      isCompleted: false,
      due: "2024-04-28",
    },
  ]);

  function toggleModal() {
    setOpen(!open);
  }

  return (
    <div>
      <Header toggleModal={toggleModal} />
      <List toggleModal={toggleModal} list={list} />
      {open && (
        <Modal
          title="Add/Update Task"
          toggleModal={toggleModal}
          body={
            <AddUpdateTask
              toggleModal={toggleModal}
              list={list}
              setList={setList}
            />
          }
        />
      )}
    </div>
  );
}

export default TasksList;
