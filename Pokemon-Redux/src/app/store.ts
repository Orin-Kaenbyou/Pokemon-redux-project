import { configureStore } from "@reduxjs/toolkit";
// import pokemonTeamReducer from "./features/team/teamSlice"
import pokemonTeamReducer from "../features/team/teamSlice";

export const store = configureStore({
    reducer: {
        pokemonTeam: pokemonTeamReducer,
    }
}) 

export type RootState = ReturnType<typeof store.getState>
export type appDuispatch = typeof store.dispatch