import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/slicesForm";
import courseSlice from "./slices/courseSlices";

export const store = configureStore({
    reducer: {
        form: formSlice,
        courses: courseSlice
    }
});