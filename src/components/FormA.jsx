import { Button, Select, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

function FormA() {
  const objForm = useForm();
  console.log("objForm", objForm);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = objForm;

  function onSubmit(data) {
    console.log("data", data);
  }

  console.log("errors", errors);

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        placeholder="John Doe"
        // name={objUsername.name}
        // onChange={objUsername.onChange}
        // onBlur={objUsername.onBlur}
        // ref={objUsername.ref}
        // {...objUsername}
        {...register("username", {
          required: { value: true, message: "Username is required!" },
          minLength: {
            value: 2,
            message: "Username must be at least 2 characters long!",
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
          required: { value: true, message: "Email is required!" },
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            message: "Please provide a valid email!",
          },
        })}
      />
      {errors.email && <p className="text-red-700">{errors.email.message}</p>}
      <TextInput
        type="password"
        placeholder="******"
        {...register("password")}
      />
      <TextInput
        type="password"
        placeholder="******"
        {...register("confirmPassword", {
          validate: {
            isPasswordSame: (value) => {
              const password = getValues("password");
              if (password === value) {
                return true;
              }
              return "Password did not match!";
            },
          },
          min: {value: 1, message: ""}
        })}
      />
      {errors.confirmPassword && (
        <p className="text-red-700">{errors.confirmPassword.message}</p>
      )}
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

//  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

// validate: {
//   isCorrect: (value) => {
//     const emailRegex =
//       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     const isValidEmail = emailRegex.test(value);
//     console.log(isValidEmail);
//     return isValidEmail;
//   },
// },
