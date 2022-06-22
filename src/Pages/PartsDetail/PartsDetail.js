import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PartsDetail = () => {
    
    const { partsId } = useParams();
    
    const [part, setPart] = useState({});

    const [user, loading, error] = useAuthState(auth);

    const [disable, setDisable] = useState(false);

    const [updateQuantity, setUpdateQuantity] = useState();

    const handleInputQuantity = event => {
      const inputQuantity = event.target.value;
      setUpdateQuantity(inputQuantity);


  }
  const defaultQuantity = parseInt(part.availableQuantity);

  const handlePlaceOrder = event => {

      event.preventDefault();
      const order = {
          name: user.displayName,
          email: user.email,
          phone: event.target.phone.value,
          partName: part.name,
          quantity: event.target.availableQuantity.value,
          price: event.target.quantity.value * part.price

      }
    }

    useEffect(() => {
        const url = `https://safe-earth-55170.herokuapp.com/part/${ partsId }`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));

    }, [])


    return (
        
   
  <div className='justify-center items-center mt-5 mb-8'>
    <div >
    <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={part.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{part.name}</h2>
    <p>{part.description}</p>
    <p>Price: {part.price}</p>
    <p>Available-Quantity:{part.availableQuantity}</p>
    <p>MiniMum-Order:{part.minimum}</p>
   
    <div>
  <form onSubmit={handlePlaceOrder}>
                            <input className="input input-bordered w-full max-w-xs mt-2" type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-2" type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-2" type="text" name="phone" placeholder='Enter your phone number' required />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-2" type="text" value={part.name} name="partName" required readOnly />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-2" type="number" name="quantity" placeholder='Quantity' required onChange={handleInputQuantity} />
                            <br />
                            {updateQuantity < part.minimum && (
                                <p className="text-red-500 text-sm">
                                    Minimum order {part.minimum}pcs
                                </p>
                            )}
                            {updateQuantity > part.quantity && (
                                <p className="text-red-500 text-sm">
                                    Maximum order {part.quantity}pcs
                                </p>
                            )}
                            <input className='btn btn-outline mt-2' type="submit" value="Place Order" disabled={(updateQuantity < part.minimum || updateQuantity > part.quantity) && !disable} />
                        </form>

  </div>
  </div>
</div>
    </div>
  
  </div>

    );
};

export default PartsDetail;