import React, { Component } from 'react'
import './CommentTextarea.css'

export class CommentTextarea extends Component {
  render() {
    return (
        <div className="comments">
        <span className="comments__title">
          دیدگاهتان را بنویسید
        </span>
        <span className="comments__text">
          <a href="#">
            با عنوان محمدامین سعیدی راد 
          وارد شده اید.
          </a>
           <a href="#">خارج میشوید? </a>
          بخش های موردنیاز علامت گذاری شده اند *
        </span>
        <div className="comments_content">
          <span className="comments__content-title">دیدگاه *</span>
          <textarea className="comments__content-textarea"></textarea>
        </div>
        <button type="submit" className="comments__button">فرستادن دیدگاه</button>
      </div>
    )
  }
}

export default CommentTextarea  