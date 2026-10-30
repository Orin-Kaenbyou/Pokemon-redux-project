import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


//testing how redux work//


const MAX_TEAM_SIZE = 6;

interface PokemonTeamState {
    memberIds: number[];
    error: string | null;
}

const initialState: PokemonTeamState = {
    memberIds: [],
    error: null,
};


const pokemonTeamSlice = createSlice({
    name:"pokemonTeam",
    initialState,
    reducers: {
       addToTeam: (state, action: PayloadAction<number>) =>  {
        if (state.memberIds.includes(action.payload)) return;
        if (state.memberIds.length >= MAX_TEAM_SIZE) {
            state.error = `У команді не може бути більше ${MAX_TEAM_SIZE} покемонів`;
            return;
        }
        state.memberIds.push(action.payload);
        state.error = null;
       },
       removeFromTeam: (state, action: PayloadAction<number>) => {
        state.memberIds = state.memberIds.filter((id) => id !== action.payload);
        state.error = null;
       }
    },
});

export const { addToTeam, removeFromTeam } = pokemonTeamSlice.actions;

export default pokemonTeamSlice.reducer;