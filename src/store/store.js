import { configureStore } from "@reduxjs/toolkit";
import warehouseReducer from "./warehouseSlice";

export default configureStore({
  reducer: {
    warehouse: warehouseReducer,
  },
});
