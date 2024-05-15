import React from "react";
import "./Register.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";

export default function Register() {
  const registerNewUser = (event) => {
    event.preventDefault();

    console.log("user registerd ");
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
                type="text"
                className="login-form__username-input"
                placeholder="نام و نام خانوادگی "
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__username">
              <Input
                element="input"
                type="text"
                className="login-form__username-input"
                placeholder="نام کاربری "
              />

              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__username">
              <Input
                element="input"
                type="text"
                className="login-form__username-input"
                placeholder="شماره تماس "
              />

              <i className="login-form__username-icon fa fa-phone"></i>
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                type="text"
                className="login-form__password-input"
                placeholder="آدرس ایمیل "
              />

              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                type="text"
                className="login-form__password-input"
                placeholder=" رمز عبور "
              />

              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                type="text"
                className="login-form__password-input"
                placeholder=" رمز عبور را دوباره وارد کنید "
              />

              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button
              type="submit"
              className="login-form__btn login-form__btn_success"
              onClick={registerNewUser}
              disabled={false}
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
