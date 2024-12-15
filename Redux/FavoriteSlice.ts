import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
    favorites: string[];  
}

const initialState: FavoritesState = {
    favorites: []
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {  
            const titleExists = state.favorites.includes(action.payload);
            if (!titleExists) state.favorites.push(action.payload);  
        },

        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(title => title !== action.payload);
        }
    }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
