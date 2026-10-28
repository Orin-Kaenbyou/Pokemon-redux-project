import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ALL_TYPES } from "../filter/filterSlice";
import { pokemons } from "./PokemonData";




const selectQuery = (state: RootState) => state.filter.query;
const selectType = (state: RootState) => state.filter.type;

export const selectFilteredPokemons = createSelector(
    [selectQuery, selectType],
    (query, type) => {
        const q = query.trim().trim().toLowerCase();
        return pokemons.filter(
            (p) =>
                p.name.toLowerCase().includes(q) && 
            (type === ALL_TYPES || p.type === type)
        );
    }
)

