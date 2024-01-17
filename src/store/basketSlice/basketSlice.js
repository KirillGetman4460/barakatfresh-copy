import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const checkBasket = state.basket.findIndex(el => el.id === action.payload.id);
      
      if(checkBasket === -1){
          state.basket.push({...action.payload, quantity: 1});
          return;
      }
      state.basket = state.basket.map((item, i) => {
          if(checkBasket === i) {
              return {...item, quantity: item.quantity + 1};
          } else {
              return item;
          }
      });
    },
    minusQuantity:(state, action) =>{
      const checkBasket = state.basket.findIndex(el => el.id === action.payload.id);

      if(checkBasket !== -1){
        state.basket = state.basket.map((item, i) => {
          if(checkBasket === i) {
              return {...item, quantity: item.quantity - 1};
          } else {
              return item;
          }
      });
      }
    },
    deleteItemBasket: (state, action) => {
      const checkBasket = state.basket.findIndex(el => el.id === action.payload.id);
    
      if(checkBasket !== -1){
        state.basket = state.basket.filter((item, i) => {
          if(checkBasket === i){
            return item.quantity !== 0;
          } else {
            return true;
          }
        });
      }
    },
    deleteItem: (state, action) => {
      state.basket = state.basket.filter(product => product.id !== action.payload.id)
    }
  },
})


export const { addBasket,minusQuantity,deleteItemBasket,deleteItem } = basketSlice.actions

export default basketSlice.reducer