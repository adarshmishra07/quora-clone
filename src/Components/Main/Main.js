import React from 'react'
import MainSection from './MainSection'
import Sidebar from './Sidebar'
import {Route} from 'react-router-dom'
import Answers from '../OtherRoutes/Answers'
import Spaces from '../OtherRoutes/Spaces'
import Notifications from '../OtherRoutes/Notifications'

function Main(  ) {
    return (
        <div className="main">
            <Sidebar/>
            <Route path="/" exact component={MainSection} />
            <Route path="/answers" exact component={Answers} />
            <Route path="/spaces" exact component={Spaces} />
            <Route path="/notifications" exact component={Notifications} />
        </div>
    )
}

export default Main
