import { createSlice } from "@reduxjs/toolkit";

//testing how redux work//

interface PokemonTeamState {
    name:string;
    elementName: string;
    isSlotEquired: boolean;
}

const initialState: PokemonTeamState = {
    name:"Pickachu",
    elementName:"Electric",
    isSlotEquired: true,
}

const pokemonTeamSlice = createSlice({
    name:"pokemonTeam",
    initialState,
    reducers: {
        isSlotEmpty: (state) => {
            state.isSlotEquired == true;
        },
        isSlotTaken: (state) => {
            state.isSlotEquired == false;
        }
    },
});

export const { isSlotEmpty, isSlotTaken } = pokemonTeamSlice.actions;

export default pokemonTeamSlice.reducer;