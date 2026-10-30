import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Pokemon {
    id: number;
    name: string
    type:string;
}

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5153/api" }),
    endpoints: (builder) => ({
        getPokemons: builder.query<Pokemon[], void>({
            query: () => "/pokemon",
        }),
    }),
});

export const { useGetPokemonsQuery } = pokemonApi;
