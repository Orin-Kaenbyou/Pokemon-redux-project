import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ALL_TYPES } from "../filter/filterSlice";
import { pokemonApi, type Pokemon } from "./pokemonApi";


const EMPTY: Pokemon[] = [];

const selectPokemonsResult = pokemonApi.endpoints.getPokemons.select();
const selectPokemons = (state: RootState) => selectPokemonsResult(state).data ?? EMPTY;
const selectQuery = (state: RootState) => state.filter.query;
const selectType = (state: RootState) => state.filter.type;

export const selectFilteredPokemons = createSelector(
    [selectPokemons, selectQuery, selectType],
    (pokemons, query, type) => {
        const q = query.trim().toLowerCase();
        return pokemons.filter(
            (p) =>
                p.name.toLowerCase().includes(q) && 
            (type === ALL_TYPES || p.type === type)
        );
    }
)

