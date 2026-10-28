import { configureStore } from "@reduxjs/toolkit";
// import pokemonTeamReducer from "./features/team/teamSlice"
import pokemonTeamReducer from "../features/team/teamSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
    reducer: {
        pokemonTeam: pokemonTeamReducer,
        filter: filterReducer,
    }
}) 

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch