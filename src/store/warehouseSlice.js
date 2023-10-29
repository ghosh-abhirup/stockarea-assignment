import { createSlice } from "@reduxjs/toolkit";
import { warehouse } from "../assets/warehouse";

export const warehouseSlice = createSlice({
  name: "warehouse",
  initialState: {
    warehouseArr: warehouse,
  },
  reducers: {
    editWarehouse: (state, action) => {
      const { id, name, city, spaceAvailable, cluster, isLive } =
        action.payload;
      // console.log("Space i/p = ", spaceAvailable);
      // Find the index of the warehouse to be edited
      const index = state.warehouseArr.findIndex(
        (warehouse) => warehouse.id === id
      );

      if (index !== -1) {
        // Create a new object with the updated values
        const updatedWarehouse = {
          ...state.warehouseArr[index],
          name,
          city,
          space_available: spaceAvailable,
          cluster,
          is_live: isLive,
        };

        // console.log("Updated warehouse = ", updatedWarehouse);

        // Create a new array with the updated warehouse
        const updatedWarehouseArr = [...state.warehouseArr];
        updatedWarehouseArr[index] = updatedWarehouse;

        // Update the state with the new array
        state.warehouseArr = updatedWarehouseArr;
      }
    },
  },
});

export const { editWarehouse } = warehouseSlice.actions;

export default warehouseSlice.reducer;
