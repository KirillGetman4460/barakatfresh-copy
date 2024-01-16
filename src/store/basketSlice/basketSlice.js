import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state,action) =>{
        // const index = state.basket.findIndex(el => el.id === action.payload.id);
        // if(index === -1){ 
        //     state.basket = action.payload
        // }
        const checkBasket = state.basket.some(item => item.name === action.payload.name)
        
        if(!checkBasket){
            state.basket.push(action.payload)
        }
    }
  },
})


export const { addBasket } = basketSlice.actions

export default basketSlice.reducer