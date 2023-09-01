import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: "course",
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        addData: (state, action) => {
            state.data.push({
                name: action.payload.name,
                description: action.payload.description,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        deleteData: (state, action) => {
            const filteredData = state.data.filter((dataItem) => dataItem.id !== action.payload);
            state.data = filteredData;
        },
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
})
export const { addData, deleteData, changeSearchTerm } = courseSlice.actions

export default courseSlice.reducer;