"use client";

import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import style from "./page.module.css";
import Image from "next/image";
import Logo from "./svg/logo";

const LoginComponent = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailError = "";
    let passwordError = "";

    if (!form.email) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      emailError = "Email is invalid";
    }

    if (!form.password) {
      passwordError = "Password is required";
    }

    if (emailError || passwordError) {
      setErrors({ emailError, passwordError });
    } else {
      const formData = {
        email: form.email,
        password: form.password,
      };

      console.log(formData);
    }
  };

  return (
    <>
      <section className={style.container}>
        <div className={style.login_container}>
          <div className={style.login_image_container}>
            <Image src="/test.jpg" width={150} height={150} alt="Login Image" />
          </div>

          <div className={style.login_main_container}>
            <div>
              <Logo />
            </div>

            <form
              className={style.login_form_container}
              onSubmit={handleSubmit}
            >
              <div className={style.login_form_label_container}>
                <label className={style.login_form_label_fnt} htmlFor="email">
                  Email
                </label>
                <div className={style.login_form_input_wrapper}>
                  <MdEmail />
                  <input
                    type="email"
                    className={style.login_form_input_container}
                    value={form.email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                  />
                </div>
                {errors.emailError && (
                  <p className={style.error}>{errors.emailError}</p>
                )}
              </div>

              <div className={style.login_form_label_container}>
                <label
                  className={style.login_form_label_fnt}
                  htmlFor="password"
                >
                  Password
                </label>
                <div className={style.login_form_input_wrapper}>
                  <RiLockPasswordFill />
                  <input
                    type="password"
                    className={style.login_form_input_container}
                    value={form.password}
                    onChange={handleChange}
                    id="password"
                    name="password"
                  />
                </div>
                {errors.passwordError && (
                  <p className={style.error}>{errors.passwordError}</p>
                )}
              </div>

              <div>
                <button className={style.login_form_btn}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginComponent;
