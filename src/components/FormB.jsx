import { Button, TextInput } from "flowbite-react";
import React from "react";
import { HiTrash } from "react-icons/hi";

function FormB() {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex gap-2">
        <TextInput
          className="grow-[1]"
          type="text"
          name="name"
          placeholder="Guest Name"
        />
        <TextInput
          className="grow-[1]"
          type="text"
          name="email"
          placeholder="Guest Email"
        />
        <Button color="purple">
          <HiTrash />
        </Button>
      </div>
      <Button color="purple">Add Guest</Button>
      <Button color="purple">Submit</Button>
    </form>
  );
}

export default FormB;
