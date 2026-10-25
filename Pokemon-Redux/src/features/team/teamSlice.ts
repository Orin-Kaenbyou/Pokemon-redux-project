import { createSlice } from "@reduxjs/toolkit";

//testing how redux work//

interface PokemonTeamState {
    name:string;
    elementName: string;
    isSlotTaken: boolean;
}

const initialState: PokemonTeamState = {
    name:"Pickachu",
    elementName:"Electric",
    isSlotTaken: true,
}

const pokemonTeamSlice = createSlice({
    name:"pokemonTeam",
    initialState,
    reducers: {
        isSlotEquipped: (state) => {
            state.isSlotTaken = true;
        },
        isSlotEmpty: (state) => {
            state.isSlotTaken = false;
        }
    },
});

export const { isSlotEquipped, isSlotEmpty } = pokemonTeamSlice.actions;

export default pokemonTeamSlice.reducer;