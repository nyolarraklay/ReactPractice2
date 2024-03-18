
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string().email('Must be a valid email address').required('Email is required'),
    name: yup.string().required().min(3, 'Name must be at least 3 characters'),
    subject: yup.string().required().min(3, 'Subject must be at least 3 characters'),
    message: yup.string().required().min(8, 'Message must be at least 8 characters'),
})


function Contacts() {
  const { register, handleSubmit, formState:{errors}, } = useForm({
    resolver: yupResolver(schema)
});

function onSubmit(data) {
console.log(data);
}

  return (
    <div className='contact-form'>
      <h1>Contact Us</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
           <label htmlFor="name">Full name </label>
          <input
          name="name"
          placeholder="Your first name"
          {...register('name')}
          />
          <p className="form-errors">{errors.name?.message}</p>
        </div>
        <div className='form-group'>
           <label htmlFor="subject">Subject </label>
          <input
          name="subject"
          placeholder="Subject"
          {...register('subject')}
          />
          <p className="form-errors">{errors.subject?.message}</p>
        </div>
        <div className='form-group'>
           <label htmlFor="email">Email </label>
          <input
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
