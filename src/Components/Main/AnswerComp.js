import React,{useState} from "react";
import { userAvatar } from "../../assets";
import EditAnswer from "./EditAnswer";

function AnswerComp({ aa,handleDeleteAnswer,index,q }) {
  const [toggleAnsEditor, settoggleAnsEditor] = useState(false)

  // toggle answer edit handler
  const toggleAEH = ()=>{
    settoggleAnsEditor(!toggleAnsEditor)
  }
  return (
    <div className="answer__component">
      <div className="ans__header">
        <div className="ah__user"><img src={userAvatar} alt=""/></div>
        <div className="ah__name">Someone Smart <span>answered</span></div>
      </div>
      <div className="ans__body">
        <span dangerouslySetInnerHTML={{ __html: aa }}></span>
      </div>
      <div className="ans__footer">
          <ul>
              <li onClick={toggleAEH} >Edit</li>
              <li onClick={()=>handleDeleteAnswer(index,q)}>Delete</li>
          </ul>
      </div>
     {toggleAnsEditor && <EditAnswer q={q} aa={aa} index={index}  toggleAEH={toggleAEH}/>}
    </div>
  );
}

export default AnswerComp;
