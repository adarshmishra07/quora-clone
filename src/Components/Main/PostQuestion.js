import React, { useState, useContext } from "react";
import { CloseButton, Link, userAvatar } from "../../assets";
import db from "../../firebase";
import { ModalContext } from "../ModalContext";

function PostQuestion() {
  const { modal, clickHandler } = useContext(ModalContext);
  const [questions, setquestions] = useState({
    question: "",
    optlink: "",
  });

  // Add Question to db
  const handleAdd = () => {
    db.collection("questions")
      .add(questions)
      .then(function(docRef) {
        console.log("Question created with ID: ", docRef.id);
        setquestions({ question: "", optlink: "" });
      })
      .catch(function(error) {
        console.error("Error adding Question: ", error);
      });
    clickHandler();
  };

  return (
    <div className="mainsec__question">
      <div onClick={clickHandler}>
        <div className="ques__user">
          <img src={userAvatar} alt="" />
          Naser Mohd Baig
        </div>
        <span>What is your Question or Link ?</span>
      </div>
      {modal ? (
        <div className="modal">
          <div id="question__modal" className="modal__container">
            <div className="modal__header">
              <ul>
                <li>Add Question</li>
                <li>Share Link</li>
              </ul>
              <div className="close__modal" onClick={clickHandler}>
                <CloseButton />
              </div>
            </div>
            <div className="modal__content">
              <div className="ques__user">
                <img src={userAvatar} alt="" /> Naser Mohd Baig asked
              </div>
              <div className="modal__content__input">
                <textarea
                  name="question"
                  id="question"
                  value={questions.question}
                  onChange={(e) =>
                    setquestions({ ...questions, question: e.target.value })
                  }
                  placeholder="Type your question here..."
                ></textarea>
              </div>
              <div className="modal__optional__link">
                <Link />
                <input
                  type="text"
                  placeholder="Enter URL if any"
                  name="optlink"
                  onChange={(e) =>
                    setquestions({ ...questions, optlink: e.target.value })
                  }
                  value={questions.optlink}
                  id="optlink"
                />
              </div>
            </div>
            <div className="modal__footer">
              <ul>
                <li onClick={clickHandler}>Cancel</li>
                <li>
                  <button className="btn-add-quest" onClick={handleAdd}>
                    Add Question
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PostQuestion;
