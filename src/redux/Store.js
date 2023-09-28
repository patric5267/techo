import { configureStore } from "@reduxjs/toolkit";
import { authreducer } from "./reducers/auth";

export const store = configureStore({
   reducer:{
       auth:authreducer
    }
})