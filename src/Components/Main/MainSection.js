import React from 'react'
import PostQuestion from './PostQuestion'
import RecentlyAsked from './RecentlyAsked'

function MainSection({modal,clickHandler }) {
    return (
        <div className="mainsection">
            {/*Create questoins */}
            <PostQuestion clickHandler={clickHandler} modal={modal} />
            {/* aAll asked questions and answers in here */}
            <RecentlyAsked/>
        </div>
    )
}

export default MainSection
