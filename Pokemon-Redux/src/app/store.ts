import { configureStore } from "@reduxjs/toolkit";
import pokemonTeamReducer from "../features/team/teamSlice";
import filterReducer from "../features/filter/filterSlice";

import { pokemonApi } from "../features/pokemon/pokemonApi";


export const store = configureStore({
    reducer: {
        pokemonTeam: pokemonTeamReducer,
        filter: filterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(pokemonApi.middleware),
}) 

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch