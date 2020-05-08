import React from "react";

import CoffeeMugIcon from "./CoffeeMug";


const Icon = props => {
  switch (props.name) {
  
    case "coffeemug":
      return <CoffeeMugIcon {...props} />;
   
    default:
      return;
  }
};

export default Icon;
