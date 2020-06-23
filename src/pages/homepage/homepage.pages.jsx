import React from "react";

import Benefits from "../../components/Benefits/benefits.components";
import Main from "../../components/Main/main.component";
import Display from "../../components/Display/display.components";

function homepage() {
  return (
    <div className="homepage">
      <Display />
      <Benefits />
      <Main />
    </div>
  );
}

export default homepage;
