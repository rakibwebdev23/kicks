import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    showLoginModal: boolean;
}

const initialState: AuthState = {
    showLoginModal: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleLoginModal: (state, action: PayloadAction<boolean>) => {
            state.showLoginModal = action.payload;
        },
    },
});

export const { toggleLoginModal } = authSlice.actions;
export default authSlice.reducer;
