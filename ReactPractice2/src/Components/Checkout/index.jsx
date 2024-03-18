
import useProductStore from "../Store"
import {useForm} from 'react-hook-form'
import schema from "../Validation"
import { yupResolver } from '@hookform/resolvers/yup';

function CheckOut() {
        const { cart, getCartTotal } = useProductStore();
const { register, handleSubmit, formState:{errors}, } = useForm({
    resolver: yupResolver(schema)
});

function onSubmit(data) {
    console.log(data);  
}

  return (
    <div>
        <h1 className="checkout-h1">Checkout</h1>
   <div className="checkout-page">
        <div className="checkout-container">
            <div>
                <h2 className="checkout-heading">Contact Information</h2>
                <form action="" className="checkout-form" onChange={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" {...register('email')}/>
                    <p className="form-errors">{errors.email?.message}</p>
                </div>
                <div className="form-group-checkbox">
                    <input type="checkbox" name="checkbox" id="checkbox" {...register('checkbox')}/>
                    <label htmlFor="checkbox">Email me with news and offers</label>
                </div> 
                </form>
             </div>
            <div>
                <div>
                    <h2 className="checkout-heading">Shipping address</h2>
                </div>
                <form action="" className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" {...register('name')}/>
                    <p className="form-errors">{errors.name?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" {...register('address')}/>
                    <p className="form-errors">{errors.address?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" {...register('city')}/>
                    <p className="form-errors">{errors.city?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" {...register('country')}/>
                    <p className="form-errors">{errors.country?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" name="zip" id="zip" {...register('zip')}/>
                    <p className="form-errors">{errors.zip?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" {...register('phone')} />
                    <p className="form-errors">{errors.phone?.message}</p>
                </div>
                <button type="submit" className="checkout-button">Continue to Payment</button>
                </form>
            </div>
        </div>
        
        <div className='cartContainer'>  
<h2>Order Summary</h2>
        <div>
            {cart.map(({id, title, quantity, price, image, discountedPrice}) => (
                <div key={id}>
                    <div className="cartProducts">
                        <img src={image.url} alt={title} className="thumbnail" />
                        <div className="cartProductDetails">
                            <div>
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