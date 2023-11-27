import React from 'react'

export default function Contact() {
  return (
    <div className='main contact'>

        <div className="right">
            <form>
                <div className='form-group'>
                    <label htmlFor="name">Fullname</label><br />
                    <input type='text' placeholder='Enter fullname'/>
                </div>
                <div className='form-group'>
                    <label htmlFor="name">Email</label><br />
                    <input type='text' placeholder='Enter email'/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Message</label><br />
                    <textarea name="Message" id="" cols="30" rows="10"></textarea>
                </div>
                <button className='body-text-white'>Submit</button>
            </form>
        </div>
    </div>
  )
}