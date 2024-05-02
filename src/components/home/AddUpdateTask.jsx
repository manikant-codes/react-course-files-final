import React, { useState } from "react";
import { ACTIONS } from "../../pages/Home";
import styles from "../../styles/home/addUpdateTask.module.css";
import Button from "../common/button/Button";

const initialState = {
  task: "",
  due: "",
  isCompleted: false,
};

function AddUpdateTask({ toggleModal, list, dispatch, selectedTask }) {
  const [formState, setFormState] = useState(selectedTask || initialState);

  function handleAdd() {
    dispatch({ type: ACTIONS.INSERT, payload: { ...formState } });
    toggleModal();
  }

  function handleUpdate() {
    dispatch({ type: ACTIONS.UPDATE, payload: { ...formState } });
    toggleModal();
  }

  function handleChange(e) {
    if (e.target.name === "isCompleted") {
      setFormState({ ...formState, [e.target.name]: e.target.checked });
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

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
        // min={new Date().toISOString().split("T")[0]}
      />

      <div style={{ display: "flex", gap: "8px" }}>
        <label htmlFor="isCompleted">Is Completed</label>
        <input
          type="checkbox"
          id="isCompleted"
          name="isCompleted"
          checked={formState.isCompleted}
          onChange={handleChange}
        />
      </div>

      <Button onClick={selectedTask ? handleUpdate : handleAdd}>
        {selectedTask ? "Update Task" : "Add Task"}
      </Button>
    </div>
  );
}

export default AddUpdateTask;
