import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
//   console.log(pricing);
    const { name, price, description, features }= pricing;
  return (
    <div className="flex flex-col border-2 p-4 bg-pink-800 border-amber-700 rounded-md">
      {/* card Hearder */}
      <h1 className="text-4xl text-green-400"> {name} </h1>
      <h4 className="text-2xl"> {price} </h4>
      {/* card body */}
      <div className=" flex-1 bg-pink-700 rounded-xl p-3">
        <p> {description} </p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;