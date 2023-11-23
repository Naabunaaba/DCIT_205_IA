import React from 'react'

export default function Research() {
  const member = (img,name,position) => {
    return (
      <div className='member'>
         <img src={img} />
         <h1>{name}</h1>
         <p className='body-text-light'>{position}</p>
      </div>
    )
  }
  return (
    <div className='main'>
      <h1 className='title-text-black'>Research Group</h1>
      <div className="teams">
        {member("https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600","Josh Noah","Head ")}
        {member("https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600","Josh Noah","Head ")}
        {member("https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600","Josh Noah","Head ")}
      </div>

    </div>
  )
}