import React from "react";
import { useParams } from "react-router-dom";
import SinglePageChart from "../SinglePageChart";
import SinglePageInfo from "../SinglePageInfo";

function SingleCoin() {
  const params = useParams();

  return (
    <div className="flex justify-between w-full items-center self-center h-[88vh]">
      <SinglePageInfo id={params.id} />
      <SinglePageChart id={params.id} />
    </div>
  );
}

export default SingleCoin;
