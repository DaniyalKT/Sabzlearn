import React, { useState } from "react";
import "./Login.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import {
  maxValidator,
  minValidator,
  passwordValidator,
  requiredValidator,
} from "../../Validators/Rules";
import { useForm } from "../../hooks/useForm";

function Login() {
  const [formState, onInputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [isShowPassword, setIsShowPassword] = useState(false);

  const userLogin = (event) => {
    event.preventDefault();

    console.log("user logedin");
  };

  const showPasswordHandler = (event) => {
    event.preventDefault();
    setIsShowPassword((prevPass) => !prevPass);
  };

  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Button className="login__new-member-link" to="/register">
              ثبت نام
            </Button>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                id="username"
                type="text"
                className="login-form__username-input"
                placeholder="نام کاربری یا آدرسی ایمیل"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                id="password"
                type={isShowPassword ? "text" : "password"}
                className="login-form__password-input"
                placeholder="رمز عبور"
                element="input"
                validations={[requiredValidator(), passwordValidator()]}
                onInputHandler={onInputHandler}
              />
              <Button
                className="login-form__password-show-password"
                type="submit"
                disabled={!formState.isFormValid}
                onClick={showPasswordHandler}
              >
                <i
                  className={`login-form__password-icon ${
                    isShowPassword ? "fa fa-eye" : "fa fa-eye-slash"
                  }`}
                  onClick={() => {
                    setIsShowPassword((prevPass) => !prevPass);
                  }}
                ></i>
              </Button>
            </div>

            <Button
              className={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type="submit"
              disabled={!formState.isFormValid}
              onClick={userLogin}
            >
              <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span className="login-form__btn-text">ورود</span>
            </Button>

            <div className="login-form__password-setting">
              <label className="login-form__password-remember">
                <input
                  className="login-form__password-checkbox"
                  type="checkbox"
                />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <Button href="#">رمز عبور را فراموش کرده اید؟</Button>
              </label>
            </div>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;
