import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productsArray: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        //Функция добавления карточки в store
        add(state, action) { 
            state.productsArray.push(action.payload)
        },
        //Функция удаления карточки из store
        remove(state, action) {
            state.productsArray.splice(action.payload, 1)
        },
        clear(state) {
            state.productsArray = []
        }

    }
})
export const { add } = productsSlice.actions
export const { remove } = productsSlice.actions
export const { clear } = productsSlice.actions

export default productsSlice.reducer;