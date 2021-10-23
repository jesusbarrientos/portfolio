import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		currentTheme: 'light',
	},
	reducers: {
		setTheme: (state, action) => {
			state.currentTheme = action.payload
		},
	},
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
