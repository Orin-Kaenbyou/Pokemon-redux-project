import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const ALL_TYPES = "Усі";

interface FilterState {
    query: string;
    type: string;
}

const initialState: FilterState = {
    query: "",
    type: ALL_TYPES,
};

const filterSlice = createSlice ({
    name: "filter",
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        setType: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
        },
    },
});

export const { setQuery, setType } = filterSlice.actions;
export default filterSlice.reducer;