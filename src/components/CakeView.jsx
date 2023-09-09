import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { order , restocking } from '../slice/cake/CakeSlice';


const CakeView = () => {
    const numberOfCake = useSelector(state=>state.cake.numberOfCake);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cakes are: {numberOfCake}</h1>
      <button onClick={()=> dispatch(order())}>order cake</button>
      <button onClick={()=> dispatch(restocking(2))}>restocking cake</button>
    </div>
  )
}

export default CakeView
