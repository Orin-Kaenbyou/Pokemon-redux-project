import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


//testing how redux work//


const MAX_TEAM_SIZE = 6;

interface PokemonTeamState {
    memberIds: number[];
}

const initialState: PokemonTeamState = {
    memberIds: [],
};


const pokemonTeamSlice = createSlice({
    name:"pokemonTeam",
    initialState,
    reducers: {
       addToTeam: (state, action: PayloadAction<number>) =>  {
        if (state.memberIds.includes(action.payload)) return;
        if (state.memberIds.length >= MAX_TEAM_SIZE) return;
        state.memberIds.push(action.payload);
       },
       removeFromTeam: (state, action: PayloadAction<number>) => {
        state.memberIds = state.memberIds.filter((id) => id !== action.payload);
       }
    },
});

export const { addToTeam, removeFromTeam } = pokemonTeamSlice.actions;

export default pokemonTeamSlice.reducer;