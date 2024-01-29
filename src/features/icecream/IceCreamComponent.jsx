import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream, restockIceCream } from "./iceCreamSlice";

const IceCreamComponent = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of icecreams: {numOfIceCreams} </h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy icecream</button>
      <button onClick={() => dispatch(restockIceCream(10))}>
        Restock icecreams
      </button>
    </div>
  );
};

export default IceCreamComponent;
