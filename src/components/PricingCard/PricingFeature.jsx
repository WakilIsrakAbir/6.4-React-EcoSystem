import { CircleCheckBig } from "lucide-react";

import React from "react";

const PricingFeature = ({ feature }) => {
  return (
    <p className="flex gap-2">
      <CircleCheckBig /> {feature}
    </p>
  );
};

export default PricingFeature;
