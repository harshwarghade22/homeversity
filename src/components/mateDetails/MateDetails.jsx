import React from "react";

import Left from "./Left";
import Right from "./Right";
function MateDetails() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto  grid lg:grid-cols-12 gap-4">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default MateDetails;
