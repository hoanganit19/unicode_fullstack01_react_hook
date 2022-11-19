import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const isEmail = (email) => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(email);
  };

  const isStrengthPassword = (password) => {
    const pattern =
      /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
    return pattern.test(password);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { email, password } = form;

    const errors = {
      email: {},
      password: {},
    };

    if (typeof email === "string" && email.trim() === "") {
      errors.email.required = "Email không được để trống";
    } else if (!isEmail(email)) {
      errors.email.email = "Email không đúng định dạng";
    }

    if (typeof password === "string" && password.trim() === "") {
      errors.password.required = "Mật khẩu không được để trống";
    } else if (!isStrengthPassword(password)) {
      errors.password.strength = "Mật khẩu không đủ mạnh";
    }

    setErrors(errors);

    if (isValidated(errors)){
        toast.success('Validate thành công')
        setForm({
            email: '',
            password: ''
        })
    }
  };

  const handleChangeValue = (e) => {
    const data = { ...form };
    data[e.target.name] = e.target.value;
    setForm(data);
  };

  const getError = (fieldName) => {
    if (Object.keys(errors).length) {
      return errors[fieldName][Object.keys(errors[fieldName])[0]];
    }

    return false;
  };

  const isValidated = (errors) => {
    let count = 0;
    if (Object.keys(errors).length) {
      Object.keys(errors).forEach((fieldName) => {
        if (Object.keys(errors[fieldName]).length === 0) {
          count++;
        }
      });

      if (count === Object.keys(errors).length) {
        return true;
      }
    }

    return false;
  };

  const {email, password} = form;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <form onSubmit={handleSubmitForm}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="text"
                className={clsx(
                  "form-control",
                  getError("email") && "is-invalid"
                )}
                placeholder="Email..."
                name="email"
                onChange={handleChangeValue}
                value={email}
              />
              {getError("email") && (
                <div className="invalid-feedback">{getError("email")}</div>
              )}
            </div>

            <div className="mb-3">
              <label>Mật khẩu</label>
              <input
                type="password"
                className={clsx(
                  "form-control",
                  getError("password") && "is-invalid"
                )}
                placeholder="Mật khẩu..."
                name="password"
                onChange={handleChangeValue}
                value={password}
              />
              {getError("password") && (
                <div className="invalid-feedback">{getError("password")}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
