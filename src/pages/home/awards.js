import React from 'react'
import Headline from '../components/headline'

const awards = () => {
    const title = "Certification and Awards"
    const desc = "At our firm, we provide a variety of services to assist businesses in growing and succeeding online. These services include:"
    
  return (
    <div>
        <Headline title={title} desc={desc}/>
    </div>
  )
}

export default awards