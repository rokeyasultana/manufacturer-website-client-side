import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons';
import {faCoins} from '@fortawesome/free-solid-svg-icons';

import {faStarHalf} from '@fortawesome/free-solid-svg-icons';
const BusinessSummary = () => {
    return (
        <div
        
        className='  text-center'>

            <h2 className='text-center text-5xl mb-5 mt-52 font-bold'>Summary Of Our Business</h2>

<div
style={{
    background: `url()`,
   
}} 

 className= 'justify-center items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 mt-5 '>
    
<div class="card w-96 bg-gradient-to-r from-cyan-500 to-blue-500 text-primary-content">
  <div class="card-body">
  <FontAwesomeIcon icon={faCoins
  }  size="6x"  />
    <h2 class="card-title">Annual revenue</h2>
   <h1 className='text-center text-white font-bold text-5xl'>10M+</h1>
    <div class="card-actions justify-end">
     
    </div>
  </div>
</div>
            <div class="card w-96 bg-gradient-to-r from-cyan-500 to-blue-500 text-primary-content">
  <div class="card-body">
  <FontAwesomeIcon icon={faScrewdriverWrench} size="6x"  />
    <h2 class="card-title">Tools</h2>
   <h1 className='text-center text-white font-bold text-5xl'>65+</h1>
  
    
  </div>
</div>
            <div class="card w-96 bg-gradient-to-r from-cyan-500 to-blue-500 text-primary-content">
  <div class="card-body">
  
  <FontAwesomeIcon icon={faStarHalf} size="6x" />
    <h2 class="card-title">Reviews</h2>
   <h1 className='text-center text-white font-bold text-5xl'>12K+</h1>
   
    
  </div>
</div>
          
</div>
<h2 className='text-3xl mb-5'>For More Information</h2>
<label for="my-modal-6" class="btn modal-button bg-gradient-to-r from-cyan-500 to-blue-500 mb-5 text-white">Contact us</label>

<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Intellect Camera Partszen</h3>
    <p class="py-4">
        Phone: +01587624<br></br>
        Email: intellect@gmail.com
    </p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">X</label>
    </div>
  </div>
</div>

            </div>
    );
};

export default BusinessSummary;