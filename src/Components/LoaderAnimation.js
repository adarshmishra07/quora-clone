import React from 'react'
import {ClockLoader} from 'react-spinners'

function LoaderAnimation() {
    return (
      <div className="loading">  <ClockLoader color='#FF0000' size={150}/></div>
    )
}

export default LoaderAnimation
