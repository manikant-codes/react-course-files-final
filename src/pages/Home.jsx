import React, { useState } from "react";
import Tabs from "../components/home/Tabs";
import TasksList from "../components/home/tasksList/TasksList";

function Home() {
  const [list, setList] = useState([
    {
      id: Date.now(),
      task: "Task 1",
      isCompleted: false,
      due: "2024-04-28",
    },
  ]);

  return (
    <div>
      <Tabs list={list} setList={setList} />
      <TasksList list={list} setList={setList} />
    </div>
  );
}

export default Home;
