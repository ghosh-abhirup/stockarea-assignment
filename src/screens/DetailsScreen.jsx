import React from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";
import { useSelector } from "react-redux";

const DetailsScreen = () => {
  const { id } = useParams();
  const warehouseData = useSelector((state) => state.warehouse.warehouseArr);
  const specificData = warehouseData?.find((element) => element.id == id);

  return (
    <>
      {specificData && (
        <div className="py-5 px-4 sm:px-6 w-full h-full flex flex-col items-center justify-center">
          <DetailsCard warehouseData={specificData} />
        </div>
      )}
    </>
  );
};

export default DetailsScreen;
