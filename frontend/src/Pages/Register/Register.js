import React from "react";
import "./Register.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import { useForm } from "../../hooks/useForm";
import {
  maxValidator,
  minValidator,
  passwordValidator,
  requiredValidator,
  emailValidator,
  phoneNumberValidator
} from "../../Validators/Rules";

export default function Register() {
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      }
    },
    false
  );
 

  console.log(formState)

  const registerNewUser = (event) => {
    event.preventDefault();

  
    const newUserInfos = {
      name: formState.inputs.name.value,
      username:formState.inputs.username.value,
      email: formState.inputs.email.value,
      phone: formState.inputs.phone.value,
      password:formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value
    }

    fetch("http://localhost:4000/v1/auth/register",{
      method: 'POST',
      headers: {
        "Content-type" : 'application/json'  
      },
      body: JSON.stringify(newUserInfos)
    }).then(res=> res.json())
    .then(result => console.log(result))

    console.log('registeing was success ! ')

  };
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ساخت حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم قراره به جمع ما بپیوندی
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">
              قبلا ثبت‌نام کرده‌اید؟{" "}
            </span>
            <Button className="login__new-member-link" to="/login">
              وارد شوید
            </Button>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                element="input"
                id="name"
                type="text"
                className="login-form__username-input"
                placeholder="نام و نام خانوادگی "
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(30),
                ]}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__username">
              <Input
                element="input"
                type="text"
                id="username"
                className="login-form__username-input"
                placeholder="نام کاربری "
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
              />

              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__username">
              <Input
                element="input"
                type="text"
                id="phone"
                className="login-form__username-input"
                placeholder="شماره تماس"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  phoneNumberValidator()
                ]}
              />

              <i className="login-form__username-icon fa fa-phone"></i>
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                type="text"
                id="email"
                className="login-form__password-input"
                placeholder="آدرس ایمیل "
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  emailValidator()
                ]}
              />

              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                type="text"
                id="password"
                className="login-form__password-input"
                placeholder=" رمز عبور "
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  passwordValidator()
                ]}
              />

              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            {/* <div className="login-form__password">
              <Input
                element="input"
                type="text"
                id="password"
                className="login-form__password-input"
                placeholder=" رمز عبور را دوباره وارد کنید "
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
              />

              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div> */}
            <Button
              type="submit"
              className={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              onClick={registerNewUser}
              disabled={!formState.isFormValid}
            >
              <i className="login-form__btn-icon fa fa-user-plus"></i>
              <span className="login-form__btn-text">عضویت</span>
            </Button>
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
