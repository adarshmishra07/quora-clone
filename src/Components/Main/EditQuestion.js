import React, { useState } from "react";
import { CloseButton, Link, userAvatar } from "../../assets";
import db from '../../firebase'

function EditQuestion({ data, id, editHandler }) {
  const handleedit = (id) => {
    db.collection('questions').doc(id).update({
        question : editedQ.question,
        optlink:editedQ.optlink
    }).then(()=>{
        console.log('success')
    })
    editHandler()
  };
  const [editedQ, seteditedQ] = useState(data);
  return (
    <div className="modal">
        {console.log(id)}
      <div id="question__modal" className="modal__container">
        <div className="modal__header">
          <ul>
            <li>Edit Question</li>
          </ul>
          <div className="close__modal" onClick={editHandler}>
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
              value={editedQ.question}
              onChange={(e) =>
                seteditedQ({ ...editedQ, question: e.target.value })
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
                seteditedQ({ ...editedQ, optlink: e.target.value })
              }
              value={editedQ.optlink}
            />
          </div>
        </div>
        <div className="modal__footer">
          <ul>
            <li onClick={editHandler}>Cancel</li>
            <li>
              <button className="btn-add-quest" onClick={()=>handleedit(id)}>
                Edit Question
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EditQuestion;
