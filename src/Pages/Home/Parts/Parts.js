import React, { useEffect, useState } from 'react';
import Part from '../Parts/Part';

const Parts = () => {

    const [parts,setParts] = useState([]);

    useEffect(()=>{
        fetch(`https://safe-earth-55170.herokuapp.com/part`)
        .then(res=> res.json())
        .then(data => setParts(data));
    },[]);

    return (

        <div>
           <h2 className='text-center text-primary  text-5xl '>Our Stock Product</h2> 
           <h2 className='text-center font-bold text-2xl  mb-5'>Camera Parts</h2>  
           <div  
 className= 'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-5  gap-4 '>
    
    {
                    parts.slice(-3).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
</div>
        </div>
    );
};

export default Parts;