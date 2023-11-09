import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/details/${data.id}`);
  };

  return (
    <>
      {data && (
        <div
          className="w-full min-w-[300px] p-4 shadow-lg dark:shadow-gray-500/40 bg-white dark:bg-black rounded-lg flex flex-col gap-2 justify-between cursor-pointer hover:scale-105 transition-all ease-in-out dark:darkBoxBorder"
          onClick={handleNavigate}
        >
          <div className="">
            <p className="text-lg w-full truncate font-bold themeText">
              {data.name}
            </p>
            <p className="text-lg w-full truncate font-bold themeText">
              {data.cluster}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-lg themeText"
            />
            <p className="themeText font-semibold text-base">{data.city}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            {data.is_live ? (
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
            {data.is_registered ? (
              <div className={`rounded-lg p-2 min-w-10 bg-[#b7e4c7]`}>
                <p className={`text-[green] text-xs font-semibold`}>
                  Registered
                </p>
              </div>
            ) : (
              <div className={`rounded-lg p-2 min-w-10 bg-[#ffccd5]`}>
                <p className={`text-red-600 text-xs font-semibold`}>
                  Not registered
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
