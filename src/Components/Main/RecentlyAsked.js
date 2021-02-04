import React, { useState, useEffect } from "react";
import { Follow, Request, Edit } from "../../assets";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import db from "../../firebase";
import EditQuestion from "./EditQuestion";
import AnswerComp from "./AnswerComp";
import Uploader from "../Uploader";
import LoaderAnimation from "../LoaderAnimation";

function RecentlyAsked() {
  const [toggleAnswer, settoggleAnswer] = useState(false);
  const [currentEdit, setcurrentEdit] = useState();
  const [currans, setcurrass] = useState();
  const [toggleEdit, settoggleEdit] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [data, setdata] = useState();

  // Handle changes in ckeditor
  const editorChange = (event, editor) => {
    setdata(editor.getData());
  };

  // Add answers to the db
  const submitAnswer = (que) => {
    var empty = que.data().answers;
    if (!empty) {
      empty = [{ data: data }];
    } else {
      empty = [...empty, { data: data }];
    }

    db.collection("questions")
      .doc(que.id)
      .update({
        answers: empty,
      });
    // , { merge: true })
    setdata("");
  };

  // Handle Edit question
  const editHandler = (q) => {
    setdata("");
    settoggleEdit(!toggleEdit);
    setcurrentEdit(q);
  };

  // To toggle answer editor for specific questions
  const ansHandler = (qu) => {
    settoggleAnswer(!toggleAnswer);
    setcurrass(qu.id);
  };

  // Handle Delete Question
  const handleDelete = (id) => {
    db.collection("questions")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Successfully deleted! ");
      })
      .catch((error) => {
        console.log("Error removing document:", error);
      });
  };

  // Get all Question on page load
  useEffect(() => {
    db.collection("questions").onSnapshot((snapshot) => {
      setQuestions(snapshot.docs.map((doc) => doc));
    });
  }, []);

  // Delete an answer
  const handleDeleteAnswer = (i, q) => {
    var answers = q.data().answers;
    if (i > -1) {
      answers.splice(i, 1);
    }
    db.collection("questions")
      .doc(q.id)
      .update({ answers: answers });
  };

  return questions ? (
    questions.map((question, index) => {
      return (
        <div className="mainsec__recent" key={question.id}>
          <div className="recent__top">You Asked</div>
          <div className="recent__question">
            {question.data().question} <br />
            <a href={question.data().optlink}>{question.data().optlink}</a>
          </div>
          <div className="recent__bottom">
            <div className="bottom__left">
              <div className="recent__follow">
                <Follow />
                Follow
              </div>
              <div className="recent__request">
                <Request />
                Request
              </div>
              <div
                className="recent__answer"
                onClick={() => ansHandler(question)}
              >
                <Edit />
                Answer
              </div>
            </div>
            <div className="bottom__right">
              <ul>
                <li onClick={() => editHandler(question)}>Edit</li>
                <li onClick={() => handleDelete(question.id)}>Delete</li>
              </ul>
            </div>
          </div>
          {toggleEdit && (
            <EditQuestion
              data={currentEdit.data()}
              id={currentEdit.id}
              editHandler={editHandler}
            />
          )}
          <div className="ck-content">
            {question.data().answers
              ? question.data().answers.map((a, index) => {
                  return Object.values(a).map((aa) => {
                    return (
                      <AnswerComp
                        aa={aa}
                        key={index}
                        index={index}
                        handleDeleteAnswer={handleDeleteAnswer}
                        q={question}
                      />
                    );
                  });
                })
              : null}
          </div>
          {toggleAnswer && currans === question.id ? (
            <div className="answer__section">
              <CKEditor
                editor={ClassicEditor}
                data={data}
                onReady={(editor) => {
                  editor.plugins.get("FileRepository").createUploadAdapter = (
                    loader
                  ) => {
                    return new Uploader(loader);
                  };
                }}
                onChange={(event, editor) => editorChange(event, editor)}
              />
              <button
                className="btn-add-quest answer_submit"
                onClick={() => submitAnswer(question)}
              >
                Post
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    })
  ) : (
    <LoaderAnimation />
  );
}

export default RecentlyAsked;
