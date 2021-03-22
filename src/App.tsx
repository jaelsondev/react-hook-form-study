import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { FormInput } from "./components/FormInput";

import "./App.css";

const schema = Yup.object().shape({
  login: Yup.string()
    .max(10, "Login must be shorter than 10 characters")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password should be longer than 6 characters")
    .required("Required"),
});

interface FormProps {
  login: string;
  password: string;
}

function App() {
  const { register, handleSubmit, errors } = useForm<FormProps>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const submit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="App">
      <form onSubmit={submit}>
        <FormInput
          register={register}
          id="login"
          label="Login"
          error={errors.login}
          name="login"
        />
        <FormInput
          register={register}
          id="password"
          label="Password"
          error={errors.password}
          name="password"
          type="password"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default App;
