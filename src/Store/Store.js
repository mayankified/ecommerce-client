import { configureStore } from "@reduxjs/toolkit";
import Product from "../Features/Productslice.js";
// import Task from "../Features/TaskSlice.js";

export const Store=configureStore({
    reducer:{
        prod: Product,
    },
})