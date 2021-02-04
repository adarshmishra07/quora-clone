import React,{useContext} from 'react'
import logo from '../assets/quora.svg'
import {Answer , Home , Spaces, Notifications,Magnifier,userAvatar} from '../assets'
import { ModalContext } from './ModalContext'
import { Link,withRouter } from 'react-router-dom'


function Nav({history}) {
    const {clickHandler } = useContext(ModalContext)
    
    return (
        <nav>
            {console.log(history)}
            <div className="container">
                <div className="logo"><img src={logo} alt="Quora"/></div>
                <ul>
                    <li><Link to="/" className={history.location.pathname==="/" ? "nav-link nav-link-active" : "nav-link"}><Home/>Home</Link></li>
                    <li><Link to="/answers" className={history.location.pathname==="/answers" ? "nav-link nav-link-active" : "nav-link"}><Answer/>Answer</Link></li>
                    <li><Link to="/spaces" className={history.location.pathname==="/spaces" ? "nav-link nav-link-active" : "nav-link"}><Spaces/>Spaces</Link></li>
                    <li><Link to="/notifications" className={history.location.pathname==="/notifications" ? "nav-link nav-link-active" : "nav-link"}><Notifications/>Notifications</Link></li>
                </ul>
                <div className="nav__search">
                    <Magnifier/>
                    <input type="text" placeholder="Search Quora"/>
                </div>
                <div className="nav__profile">
                    <img src={userAvatar} alt="user"/>
                </div>
                <div className="nav__addquest">
                    <button onClick={clickHandler}>Add Question</button>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Nav)
