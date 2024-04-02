import useProductStore from "../Store"
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const schema = yup.object({
    email: yup.string().email('Must be a valid email address').required('Email is required'),
    name: yup.string().required().min(3, 'Name must be at least 3 characters'),
    address: yup.string().required().min(3, 'Address must be at least 3 characters'),
    city: yup.string().required().min(3, 'City must be at least 3 characters'),
    country: yup.string().required().min(3, 'Country must be at least 3 characters'),
    zip: yup.string().required().matches(/^\d{4}(-\d{3})?$/, 'Invalid zip code'),
    phone: yup.string().required().matches(/^[0-9]{10}$/, 'Invalid phone number'),
})


function CheckOut() {
        const { cart, getCartTotal } = useProductStore();
const { register, handleSubmit, formState:{errors}, } = useForm({
    resolver: yupResolver(schema)
});
const history = useNavigate();

function handleSubmitButton() {
   history('/checkoutsuccess')

}

  return (
    <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      
        <div className="grid max-w-lg mx-auto md:grid-cols-2 sm:grid-cols-1 gap-3" >
            <div className="checkout-container">
            <div>
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <form action="" className="space-y-4">
                <div className="form-group">
                    <label htmlFor="email"
                     className="block text-sm font-medium text-gray-700"
                    >Email</label>
                    <input type="email" name="email" {...register('email')}/>
                    <p className="form-errors">{errors.email?.message}</p>
                </div>
                <div className="form-group-checkbox">
                    <input type="checkbox" name="checkbox"  {...register('checkbox')}/>
                    <label htmlFor="checkbox">Email me with news and offers</label>
                </div> 
                </form>
             </div>
            <div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Shipping address</h2>
                </div>
                
                <form action="" className="space-y-4" onSubmit={handleSubmitButton}>
                <div className="form-group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name"  {...register('name')}/>
                    <p className="form-errors">{errors.name?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input type="text" name="address" {...register('address')}/>
                    <p className="form-errors">{errors.address?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <input type="text" name="city"  {...register('city')}/>
                    <p className="form-errors">{errors.city?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <input type="text" name="country"  {...register('country')}/>
                    <p className="form-errors">{errors.country?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip</label>
                    <input type="text" name="zip"  {...register('zip')}/>
                    <p className="form-errors">{errors.zip?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="text" name="phone"  {...register('phone')} />
                    <p className="form-errors">{errors.phone?.message}</p>
                </div>
                <button type="submit"  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
           >Continue to CheckOut</button>
                </form>
            </div>
            </div>
        
            <div className='cartContainer'>  
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="grid grid-rows-2 gap-2">
                    {cart.map(({id, title, quantity, price, image, discountedPrice}) => (
                        <div key={id}>
                        <div className="grid grid-rows-2">
                            <img src={image.url} alt={title} className="size-36" />
                            <div className="cartProductDetails flex flex-col justify-evenly">
                                <div className="text-lg font-bold mb-4">
                                    {title}
                                </div>
                                <div>
                                    Price: ${discountedPrice ? discountedPrice : price}
                                </div>
                                <div>
                                    Quantity: {quantity}
                                </div>
                                <div>
                                    Total: ${Math.floor(discountedPrice ? discountedPrice * quantity : price * quantity)}
                                </div>
                            </div>
                    
                        </div> 
                       
                    </div>))}
                <div>
                    <p>Cart total: ${getCartTotal().toFixed(2)}</p>
                </div>
            </div>  
            
            </div>
        </div>
    
    </div>
  )
}

export default CheckOut