import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from "./productsSlice"

const rootReduser = combineReducers({
    productsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

/*
Функционал store
Products:
    Количество товаров в корзине
    Сумма товаров в корзине
    Добавление товара в корзину
Basket:
    Вывод товаров в корзине
    Удаление из корзины
    Сумма товаров
*/