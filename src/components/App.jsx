import { useState } from "react";
import "../assets/App.css";
import CakeView from "./CakeView";
import Icecreamview from "./Icecreamview";

const App = ()=> {
  return (
    <div>
      <CakeView/>
      <Icecreamview/>
    </div>
  );
}

export default App;
