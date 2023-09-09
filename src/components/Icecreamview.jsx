import React, { useState } from "react";
import { useSelector , useDispatch } from 'react-redux';
import { order , restocking } from "../slice/icecream/IcecreamSlice";

const Icecreamview = () => {
    const [val,setVal] = useState('');
  const numberOfIcecream = useSelector(
    (state) => state.icecream.numberOfIcecream
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of icecream are: {numberOfIcecream}</h1>
      <button onClick={()=> dispatch(order())}>order icecream</button>
      <input type="number" value={val} onChange={(e)=> setVal(e.target.value)}  placeholder="Restock Icecream..."/>
      <button onClick={()=> dispatch(restocking(parseInt(val)))}>restocking icecream</button>
    </div>
  );
};

export default Icecreamview;
