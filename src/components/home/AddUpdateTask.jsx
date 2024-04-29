import React, { useState } from "react";
import Button from "../common/button/Button";
import styles from "../../styles/home/addUpdateTask.module.css";

function AddUpdateTask({ toggleModal, list, setList }) {
  const [formState, setFormState] = useState({ task: "", due: "" });
  function handleAdd() {
    setList([
      ...list,
      {
        id: Date.now(),
        task: formState.task,
        due: formState.due,
        isCompleted: false,
      },
    ]);
    toggleModal();
  }

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  console.log(formState);

  return (
    <div className={styles.containerForm}>
      <label htmlFor="task"></label>
      <input
        type="text"
        id="task"
        name="task"
        value={formState.task}
        onChange={handleChange}
      />

      <label htmlFor="due"></label>
      <input
        type="date"
        id="due"
        name="due"
        value={formState.due}
        onChange={handleChange}
      />

      <Button onClick={handleAdd}>Add Task</Button>
    </div>
  );
}

export default AddUpdateTask;
