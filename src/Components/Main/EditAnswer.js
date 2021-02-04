import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CloseButton } from "../../assets";
import db from "../../firebase";
import Uploader from "../Uploader";

function EditAnswer({ index, q, aa, toggleAEH }) {
  // Edit answer and save to db
  const handleEditAnswer = (i, q) => {
    var answers = q.data().answers;
    answers[i].data = editedAnswer;
    db.collection("questions")
      .doc(q.id)
      .update({
        answers: answers,
      });
    toggleAEH();
  };
  const editorChange = (event, editor) => {
    seteditedAnswer(editor.getData());
  };
  const [editedAnswer, seteditedAnswer] = useState(aa);
  return (
    <div className="modal">
      <div id="question__modal" className="modal__container">
        <div className="modal__header">
          <ul>
            <li>Edit Answer</li>
          </ul>
          <div className="close__modal" onClick={toggleAEH}>
            <CloseButton />
          </div>
        </div>
        <div className="modal__content">
          <CKEditor
            editor={ClassicEditor}
            data={editedAnswer}
            onReady={(editor) => {
              editor.plugins.get("FileRepository").createUploadAdapter = (
                loader
              ) => {
                return new Uploader(loader);
              };
            }}
            onChange={(event, editor) => editorChange(event, editor)}
          />
        </div>
        <div className="modal__footer">
          <ul>
            <li onClick={toggleAEH}>Cancel</li>
            <li>
              <button
                className="btn-add-quest"
                onClick={() => handleEditAnswer(index, q)}
              >
                Edit Answer
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EditAnswer;
