import  { useState } from 'react' 

function Contacts() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')

function onTextInputChange(e) {
  const value = e.target.value
  if(e.target.name === 'full-name') {
    setFullName(value)
  } else if(e.target.name === 'subject') {
    setSubject(value)
  } else if(e.target.name === 'email') {
    setEmail(value)
  } else if(e.target.name === 'message') {
    setMessage(value)
  }
}


  function handleSubmit(e) {
    e.preventDefault()
    console.log(fullName,subject, email, message)
  }

  return (
    <div className='contact-form'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
           <label htmlFor="full-name">Full name </label>
          <input
          type='text'
          name="full-name"
          value={fullName} 
          placeholder="Your first name"
          onChange={onTextInputChange} 
          />
        </div>
        <div className='form-group'>
           <label htmlFor="subject">Subject </label>
          <input
          type='text'
          name="subject"
          value={email} 
          placeholder="Subject"
          onChange={onTextInputChange} 
          />
        </div>
        <div className='form-group'>
           <label htmlFor="email">Email </label>
          <input
          type='email'
          name="email"
          value={email} 
          placeholder="Your email"
          onChange={onTextInputChange} 
          />
        </div>
        <div className='form-group'>
          <label htmlFor="message">Message </label>
          <textarea
          name="message"
          value={message} 
          placeholder="Your message"
          onChange={onTextInputChange} 
          />
        </div>
        <div className='form-group'>
        
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contacts
