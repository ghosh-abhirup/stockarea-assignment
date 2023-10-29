import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomFilter = ({
  uniqueCity,
  uniqueCluster,
  uniqueSpace,
  selectedCity,
  setSelectedCity,
  selectedCluster,
  setSelectedCluster,
  selectedSpace,
  setSelectedSpace,
}) => {
  const handleCityChange = (event) => {
    event.preventDefault();
    const selectedValue = event.target.value;
    setSelectedCity(selectedValue);
  };

  const handleClusterChange = (event) => {
    event.preventDefault();
    const selectedValue = event.target.value;
    setSelectedCluster(selectedValue);
  };

  return (
    <div className="w-full md:w-[30%]  mt-5 md:mt-0">
      <p className="font-semibold text-base themeText mb-4">Filter by</p>
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex-1">
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="inputStyles"
          >
            <option value="all">All city</option>
            {uniqueCity &&
              uniqueCity.map((city, index) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
        <div className="flex-1 ">
          <select
            id="cluster"
            value={selectedCluster}
            onChange={handleClusterChange}
            className="inputStyles"
          >
            <option value="all">All cluster</option>
            {uniqueCluster &&
              uniqueCluster.map((cluster, index) => (
                <option value={cluster} key={cluster}>
                  {cluster}
                </option>
              ))}
          </select>
        </div>
        <div className="flex-1 ">
          <select
            id="space"
            value={selectedSpace}
            onChange={(e) => setSelectedSpace(e.target.value)}
            className="inputStyles"
          >
            <option value="all">All range</option>
            {uniqueSpace &&
              uniqueSpace.map((space, index) => (
                <option value={space} key={space}>
                  Less than {space}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CustomFilter;
