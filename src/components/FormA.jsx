import { Button, Select, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

function FormA() {
  const objForm = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = objForm;
  // const { errors } = formState;

  function onSubmit(data) {
    console.log("data", data);
  }

  console.log("errors", errors);

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        placeholder="John Doe"
        {...register("username", {
          required: { value: true, message: "User name is required!" },
          minLength: {
            value: 4,
            message: "User name must be atleast 4 characters!",
          },
        })}
      />
      {errors.username && (
        <p className="text-red-700">{errors.username.message}</p>
      )}
      <TextInput
        type="email"
        placeholder="johndoe@gmail.com"
        {...register("email", {
          // validate: {
          //   isCorrect: (value) => {
          //     const emailRegex =
          //       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

          //     const isValidEmail = emailRegex.test(value);
          //     console.log(isValidEmail);
          //     return isValidEmail;
          //   },
          // },
          pattern:
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        })}
      />
      <TextInput
        type="password"
        placeholder="******"
        {...register("password")}
      />
      <TextInput
        type="password"
        placeholder="******"
        {...register("confirmPassword")}
      />
      <Select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </Select>
      <Button type="submit" color="purple">
        Submit
      </Button>
    </form>
  );
}

export default FormA;
