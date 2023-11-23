import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    //short courses
    const pushdown_style = {
        marginTop:"100px"
    }

    const course = (img,title,body,pushdown = 0) => {
        return (
            <div className='wrapper' style={pushdown == 1 ? pushdown_style : null}>
            <img src={img} className='img'/>
              <div className='text-wrapper'>
                  <a href='#' className='title-text link'>{title}</a>
                  <p className='body-text'>{body}</p>
              </div>
          </div>
        )
    }
  return (
    <div className='main hero'>

        {/* main */}
        <h1 className='headline-text'>The Computer Science Department<br />University of Ghana</h1>

        <div className="events">
          <img src="https://dcs.ug.edu.gh/img/gallery/PHOTO-2019-03-04-14-42-37.jpg" alt="event img" />

          <div className="events-text">
            <h1 className='title-text-black'>Departmental Events</h1>
            <p className="body-text-light">View all the past, ongoing and upcoming events</p>
            <Link to={"events"} className='link'>View upcoming and ongoing events</Link>
          </div>
        </div>
    </div>
  )
}