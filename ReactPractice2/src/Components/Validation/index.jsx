import * as yup from 'yup';

let schema = yup.object({
    email: yup.string().email('Must be a valid email address').required('Email is required'),
    name: yup.string().required().min(3, 'Name must be at least 3 characters'),
    address: yup.string().required().min(3, 'Address must be at least 3 characters'),
    city: yup.string().required().min(3, 'City must be at least 3 characters'),
    country: yup.string().required().min(3, 'Country must be at least 3 characters'),
    zip: yup.string().required().matches(/^\d{4}(-\d{3})?$/, 'Invalid zip code'),
    phone: yup.string().required().matches(/^[0-9]{10}$/, 'Invalid phone number'),
    subject: yup.string().required().min(3, 'Subject must be at least 3 characters'),
    message: yup.string().required().min(8, 'Message must be at least 8 characters'),
})

export default schema;