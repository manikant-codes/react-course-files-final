import React, { useState } from "react";
import Tabs from "../components/home/Tabs";
import TasksList from "../components/home/tasksList/TasksList";
import Modal from "../components/common/modal/Modal";

function Home() {
  return (
    <div>
      <Tabs />
      <TasksList />
      
    </div>
  );
}

export default Home;
