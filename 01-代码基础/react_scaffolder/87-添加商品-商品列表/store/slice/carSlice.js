import {createSlice} from '@reduxjs/toolkit'

const carSlice = createSlice({
    name:'car',
    initialState:{
        carList:[]
    },
    reducers:{
        addCar(state, {payload}){
            console.log('addCar payload: ', payload);
        }
    }
})

export default carSlice.reducer;
export const {addCar} = carSlice.actions;