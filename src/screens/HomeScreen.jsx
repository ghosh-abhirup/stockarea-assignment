import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/ui/Card";
import CustomFilter from "../components/CustomFilter";

const HomeScreen = () => {
  const [searchInp, setSearchInp] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedCluster, setSelectedCluster] = useState("all");
  const [selectedSpace, setSelectedSpace] = useState("all");

  const [allData, setAllData] = useState(null);
  const warehouseArr = useSelector((state) => state.warehouse.warehouseArr);

  const [uniqueCity, setUniqueCity] = useState([]);
  const [uniqueCluster, setUniqueCluster] = useState([]);
  const uniqueSpace = [50, 500, 1000];

  useEffect(() => {
    let allUniqueCities = [];
    let allUniqueClusters = [];

    warehouseArr?.forEach((element) => {
      if (!allUniqueCities.includes(element.city)) {
        allUniqueCities.push(element.city);
      }

      if (!allUniqueClusters.includes(element.cluster)) {
        allUniqueClusters.push(element.cluster);
      }
    });
    allData?.forEach((element) => {
      if (!allUniqueCities.includes(element.city)) {
        allUniqueCities.push(element.city);
      }

      if (!allUniqueClusters.includes(element.cluster)) {
        allUniqueClusters.push(element.cluster);
      }
    });

    setUniqueCity(allUniqueCities);
    setUniqueCluster(allUniqueClusters);
  }, [warehouseArr]);

  useEffect(() => {
    setAllData(warehouseArr);
  }, [warehouseArr]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      let newData = warehouseArr?.filter((el) =>
        el.name.includes(searchInp.trim())
      );

      if (selectedCity !== "all") {
        newData = newData.filter((el) => el.city === selectedCity);
      }

      if (selectedCluster !== "all") {
        newData = newData.filter((el) => el.cluster === selectedCluster);
      }

      if (selectedSpace !== "all") {
        newData = newData.filter((el) => el.space_available <= selectedSpace);
      }

      // const newURL = `${window.location.pathname}?city=${selectedCity}&cluster=${selectedCluster}&space=${selectedSpace}`;
      // window.history.pushState({}, "", newURL);

      setAllData(newData);
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchInp, selectedCity, selectedCluster, selectedSpace]);

  return (
    <div className="py-5 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-3/5">
          <p className="font-semibold text-base themeText mb-4">Search</p>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search by warehouse name..."
            value={searchInp}
            onChange={(e) => setSearchInp(e.target.value)}
            className="inputStyles"
          />
        </div>

        <CustomFilter
          uniqueCity={uniqueCity}
          uniqueCluster={uniqueCluster}
          uniqueSpace={uniqueSpace}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedCluster={selectedCluster}
          setSelectedCluster={setSelectedCluster}
          selectedSpace={selectedSpace}
          setSelectedSpace={setSelectedSpace}
        />
      </div>
      <div className="gridLayout mt-10">
        {allData &&
          allData.map((warehouse) => (
            <Card data={warehouse} key={warehouse.id} />
          ))}
      </div>
    </div>
  );
};

export default HomeScreen;
