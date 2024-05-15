import React, { useState } from "react";
import "./ArticleBox.css";
import CircleSpinner from "../CircleSpinner/CircleSpinner";

function ArticleBox({ title, desc, cover }) {
  const [isImage, setIsImage] = useState(false);

  const onImageLoaded = () => {
    setIsImage(true);
  };

  return (
    <div className="col-4">
      <div className="article-card">
        <div className="article-card__header">
          <a href="#" className="article-card__link-img">
            <img
              src={cover}
              alt={title}
              className="article-card__img"
              onLoad={onImageLoaded}
            />

            {!isImage && <CircleSpinner />}
          </a>
        </div>
        <div className="article-card__content">
          <a href="#" className="article-card__link">
            {title}
          </a>
          <p className="article-card__text">{desc}</p>
          <a href="#" className="article-card__btn">
            بیشتر بخوانید
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArticleBox;
