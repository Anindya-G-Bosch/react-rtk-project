import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCake } from "./cakeSlice";

const CakeComponent = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes: {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(restockCake(5))}>Restock Cakes</button>
    </div>
  );
};

export default CakeComponent;
