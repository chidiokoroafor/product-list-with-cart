import { createSlice } from '@reduxjs/toolkit'
import items from '../../data.json'
import { TCartInitialData, TcartItem } from '../../utils/types'


const initialState:TCartInitialData = {
    items: items,
    cartItems: [],
    orderTotal:0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
            state.items.forEach(item => {
                item.quantity = 1;
                item.isAddedToCart = false;
            })
        },
        addItem: (state, { payload }) => {
            const data:TcartItem = {...payload, totalAmount:(payload.price*payload.quantity)}
            state.cartItems.push(data)
            const addedItem = state.items.find(item => item.id === payload.id)
            if (addedItem) {
                addedItem.isAddedToCart = true;
            }
        },
        removeItem: (state, action)=>{
            const itemId = action.payload
            const removedItem = state.items.find(item => item.id === itemId)
            if (removedItem) {
                removedItem.isAddedToCart = false;
                 state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
            }
        },
        calculateOrderTotal: (state) => {
            let total = 0
            state.cartItems.forEach(item => {
                total += item.totalAmount
            });

            state.orderTotal = total
        },
        increaseQuantity: (state, { payload }) => {
            const itemId = payload
            const currentCartitem = state.cartItems.find(i => i.id == itemId)
            const currentProduct = state.items.find(i => i.id == itemId)
            if(currentCartitem) currentCartitem.quantity += 1;
            if(currentProduct) currentProduct.quantity += 1;
            if(currentCartitem) currentCartitem.totalAmount = currentCartitem.quantity * currentCartitem.price
        },
        decreaseQuantity: (state, {payload})=>{
             const itemId = payload
            const currentCartitem = state.cartItems.find(i => i.id == itemId)
             const currentProduct = state.items.find(i => i.id == itemId)
            if(currentCartitem) currentCartitem.quantity -= 1;
            if(currentProduct) currentProduct.quantity -= 1;
            if(currentCartitem) currentCartitem.totalAmount = currentCartitem.quantity * currentCartitem.price
        },
    }
})

export const {clearCart, addItem, removeItem, calculateOrderTotal, increaseQuantity, decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer