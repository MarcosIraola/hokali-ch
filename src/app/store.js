import { configureStore } from "@reduxjs/toolkit";
import { examsApi } from "../services/examsApi";

export default configureStore({
    reducer: {
        [examsApi.reducerPath]: examsApi.reducer
    }
})