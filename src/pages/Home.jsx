import React from "react";
import Tabs from "../components/home/Tabs";
import TasksList from "../components/home/tasksList/TasksList";

function Home() {
  return (
    <div>
      <Tabs />
      <TasksList />
    </div>
  );
}

export default Home;
