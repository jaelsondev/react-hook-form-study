import { InputHTMLAttributes } from "react";

import "./style.css";

interface FormInputProp extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  register(): void;
  error: any;
}

export const FormInput = ({
  id,
  label,
  register,
  error,
  ...inputProps
}: FormInputProp) => {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input
        className={error && error?.message && "error"}
        ref={register}
        id={id}
        {...inputProps}
      />
      {error && <div className="form-input-error">{error?.message}</div>}
    </div>
  );
};
