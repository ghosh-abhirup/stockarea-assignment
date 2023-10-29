import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import EditDetails from "./ui/EditDetails";
import { useDispatch } from "react-redux";
import { editWarehouse } from "../store/warehouseSlice";

const DetailsCard = ({ warehouseData }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const editObjectHandler = (name, cluster, city, space, isLive) => {
    // console.log("SPace before fn ", space);
    dispatch(
      editWarehouse({
        id: warehouseData.id,
        name: name,
        city: city,
        spaceAvailable: space,
        cluster: cluster,
        isLive: isLive,
      })
    );
  };

  return (
    <>
      <div className="w-full max-w-[800px] flex flex-col gap-4 themeBg sm:shadow-lg sm:dark:shadow-gray-500/40 sm:rounded-lg sm:p-4 sm:dark:darkBoxBorder">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold themeText">{warehouseData.name}</p>
          <div className={`rounded-lg py-2 px-4 w-fit min-w-10 bg-[#ced4da]`}>
            <p className={`text-black text-xs font-semibold`}>
              {warehouseData.code}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-lg themeText" />
          <p className="themeText font-semibold text-base">
            {warehouseData.city}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-4">
          <div className="extraData">
            <p className="extraTitle">Type</p>
            <p className="text-sm sm:text-base themeText">
              {warehouseData.type}
            </p>
          </div>
          <div className="extraData">
            <p className="extraTitle">Space available</p>
            <p className="text-sm sm:text-base themeText">
              {warehouseData.space_available}
            </p>
          </div>
          <div className="extraData">
            <p className="extraTitle">Cluster</p>
            <p className="text-sm sm:text-base themeText">
              {warehouseData.cluster}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          {warehouseData.is_live ? (
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex rounded-full h-full w-full bg-red-500 opacity-75"></span>
                <span className=" rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <p className="font-bold themeText text-base">LIVE</p>
            </div>
          ) : (
            <div></div>
          )}
          {warehouseData.is_registered ? (
            <div className={`rounded-lg py-2 px-4 min-w-10 bg-[#b7e4c7]`}>
              <p className={`text-[green] text-xs font-semibold`}>Registered</p>
            </div>
          ) : (
            <div className={`rounded-lg py-2 px-4 min-w-10 bg-[#ffccd5]`}>
              <p className={`text-red-600 text-xs font-semibold`}>
                Not registered
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 sm:mt-10 w-full sm:max-w-[200px]">
        <button className="btnStyle" onClick={() => setOpenModal(true)}>
          Edit
        </button>
      </div>

      {openModal && (
        <EditDetails
          open={openModal}
          onClose={() => setOpenModal(false)}
          data={warehouseData}
          edit={editObjectHandler}
        />
      )}
    </>
  );
};

export default DetailsCard;
