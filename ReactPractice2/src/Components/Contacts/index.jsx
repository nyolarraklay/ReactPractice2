
import {useForm} from 'react-hook-form'
import schema from "../Validation"
import { yupResolver } from '@hookform/resolvers/yup';


function Contacts() {
  const { register, handleSubmit, formState:{errors}, } = useForm({
    resolver: yupResolver(schema)
});

function onSubmit(data) {
    data.preventDefault();
console.log(data);
}

  return (
    <div className='contact-form'>
      <h1>Contact Us</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
           <label htmlFor="name">Full name </label>
          <input
          type='text'
          name="name"
          placeholder="Your first name"
          {...register('name')}
          />
          <p className="form-errors">{errors.name?.message}</p>
        </div>
        <div className='form-group'>
           <label htmlFor="subject">Subject </label>
          <input
          type='text'
          name="subject"
          placeholder="Subject"
          {...register('subject')}
          />
          <p className="form-errors">{errors.subject?.message}</p>
        </div>
        <div className='form-group'>
           <label htmlFor="email">Email </label>
          <input
          type='email'
          name="email"
          placeholder="Your email"
          {...register('email')}
         
          />
          <p className="form-errors">{errors.email?.message}</p>
        </div>
        <div className='form-group'>
          <label htmlFor="message">Message </label>
          <textarea
          name="message"
          placeholder="Your message"
          {...register('message')}
          />
          <p className="form-errors">{errors.message?.message}</p>
        </div>
        <div className='form-group'>
        
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contacts
