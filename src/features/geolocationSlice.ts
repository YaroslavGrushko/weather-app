import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../state/store'

// Define a type for the slice state
export interface GeolocationState {
currentLatitude: number | undefined,
currentLongitude: number| undefined,
}

// Define the initial state using that type
const initialState: GeolocationState = {
    currentLatitude: undefined,
    currentLongitude: undefined,
}

export const geolocationSlice = createSlice({
  name: 'geolocation',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLatitude: (state, action: PayloadAction<number | undefined>) => {
        state.currentLatitude = action.payload
    },
    setLongitude: (state, action: PayloadAction<number | undefined>) => {
        state.currentLongitude = action.payload
    }
  }
})

export const { setLatitude, setLongitude } = geolocationSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLatitude = (state: RootState) => state.geolocation.currentLatitude;
export const selectLongitude = (state: RootState) => state.geolocation.currentLongitude;


export default geolocationSlice.reducer