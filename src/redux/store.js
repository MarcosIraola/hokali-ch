import { configureStore } from "@reduxjs/toolkit";
import { examsApi } from "./examsApi";

export default configureStore({
    reducer: {
        [examsApi.reducerPath]: examsApi.reducer
    }
})