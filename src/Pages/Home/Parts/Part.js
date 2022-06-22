import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {

    const {_id,name,minimum,img, price,availableQuantity, description } = part;

    const navigate = useNavigate();

    const navigateToPartsDetails = id => {

      navigate(`/parts/${_id}`);
  }
  
    return (
      
        <div className='mt-5 mb-5'>
        <div class="card w-96 justify-center items-center   shadow-xl ">
<figure><img src={img}alt="perfume" /></figure>
<div class="card-body ">
 <h2 class="text-center">{name}</h2>

 <p class="text-center">{description}</p>

 <p class="text-center">Price: {price}</p>
 <p class="text-center">Minimum-order: {minimum}</p>

 <p class="text-center">Available Quantity: {availableQuantity}</p>

 <div class="card-actions justify-end">
   <button 
    onClick={() => navigateToPartsDetails(_id)} 
   class="btn btn-primary">Purchase</button>
 </div>
</div>
</div>
    </div>
    );
};

export default Part;