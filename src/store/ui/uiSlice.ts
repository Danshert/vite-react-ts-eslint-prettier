import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		darkMode: false,
	},
	reducers: {
		onActivateDarkMode: (state) => {
			state.darkMode = true;
		},

		onDeactivateDarkMode: (state) => {
			state.darkMode = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { onActivateDarkMode, onDeactivateDarkMode } = uiSlice.actions;
