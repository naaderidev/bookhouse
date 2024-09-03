import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  return (
    <div className="flex-center flex-col gap-5 my-8">
      <BeatLoader color="#5faab1" size={10} speedMultiplier={1}/>
      <h1 className="text-subtitle">کمی منتظر بمانید...</h1>
    </div>
  );
}
