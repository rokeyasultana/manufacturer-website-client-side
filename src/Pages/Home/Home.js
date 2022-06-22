import React from 'react';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts/Parts';


const Home = () => {
    return (
        <div>
           <Parts></Parts> 
          <BusinessSummary></BusinessSummary> 
        </div>
    );
};

export default Home;