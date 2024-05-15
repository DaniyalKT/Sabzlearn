import React from "react";
import "./LastArticles.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";

function LastArticles() {
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
        />

        <div className="articles__content">
          <div className="row">
            <ArticleBox
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              desc="پایتون هم مانند دیگر زبانهای برنامه نویسی رایج، دارای کتابخانه های
          مختلفی برای تسریح کد نویسی است"
              cover="images/blog/1.jpg"
            />
            <ArticleBox
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              desc="پایتون هم مانند دیگر زبانهای برنامه نویسی رایج، دارای کتابخانه های
              مختلفی برای تسریح کد نویسی است"
              cover="images/blog/1.jpg"
            />
            <ArticleBox
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              desc="پایتون هم مانند دیگر زبانهای برنامه نویسی رایج، دارای کتابخانه های
              مختلفی برای تسریح کد نویسی است"
              cover="images/blog/1.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LastArticles;
