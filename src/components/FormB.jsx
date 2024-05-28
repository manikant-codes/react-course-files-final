import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { HiTrash } from "react-icons/hi";

function FormB() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const { fields, prepend, remove } = useFieldArray({
    control,
    name: "users",
  });

  function handleAppend() {
    prepend({ name: "", email: "" });
  }

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => {
        return (
          <div className="flex gap-2">
            <TextInput
              className="grow-[1]"
              type="text"
              placeholder="Guest Name"
              {...register(`users.${index}.name`, {
                required: { value: true, message: "Name is required!" },
                minLength: {
                  value: 5,
                  message: "Min length must be greater than 5 charancters!",
                },
                validate: {
                  trim: (value) => {
                    const length = value.trim().length;
                    if (length > 5) {
                      return true;
                    }
                    return "Min length must be greater than 5 charancters!";
                  },
                },
              })}
            />
            {errors.users &&
              errors.users[index] &&
              errors.users[index].name && (
                <p className="text-red-700">
                  {errors.users[index].name.message}
                </p>
              )}
            <TextInput
              className="grow-[1]"
              type="text"
              name="email"
              placeholder="Guest Email"
              {...register(`users.${index}.email`, {
                required: { value: true, message: "Email is required!" },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  message: "Please provide a valid email!",
                },
              })}
            />
            {errors.users &&
              errors.users[index] &&
              errors.users[index].email && (
                <p className="text-red-700">
                  {errors.users[index].email.message}
                </p>
              )}
            <Button
              color="purple"
              onClick={() => {
                remove(index);
              }}
            >
              <HiTrash />
            </Button>
          </div>
        );
      })}
      <Button color="purple" onClick={handleAppend}>
        Add Guest
      </Button>
      <Button type="submit" color="purple">
        Submit
      </Button>
    </form>
  );
}

export default FormB;
