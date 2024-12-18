import { useDispatch, useSelector } from 'react-redux'
import emptyCartImg from '../assets/images/illustration-empty-cart.svg'
import removeItemIcon from '../assets/images/icon-remove-item.svg'
import carbonBeutral from '../assets/images/icon-carbon-neutral.svg'
import {  removeItem } from '../features/cart/cartSlice'
import { openModal } from '../features/modal/modalSlice'
import { TStore } from '../utils/types'

const Cart = () => {

const { cartItems, orderTotal } = useSelector((state:TStore) => state.cart)
const dispatch = useDispatch()
  return (
      <div className="bg-Rose-50 w-full lg:w-[30%] space-y-8 p-4 rounded-lg">
          <h3 className="text-Red font-bold text-2xl">Your Cart ({cartItems.length}) 
          </h3>
         
          {cartItems.length > 0 ?
             <div>
              {
                  cartItems.map((cat) => {
                      return <div className='flex justify-between items-center border-b-[1px] border-b-gray-300 py-3' key={cat.id}>
                          <div className=''>
                            <p className='text-[16px] font-[600]'>{cat.name}</p>
                            <p className='text-xs flex gap-2 items-center text-Rose-400'>
                            <span className='text-Red font-bold'>{cat.quantity}x</span>
                            <span>@ ${cat.price.toPrecision(3)}</span>
                            <span className='text-Rose-500'>${(cat.price * cat.quantity).toPrecision(3)}</span>
                            </p>
                          </div>
                          <button onClick={()=>dispatch(removeItem(cat.id))} className='size-5 flex justify-center items-center rounded-full border-2 border-Rose-300'>
                               <img src={removeItemIcon} alt="" />
                          </button>
                         
                          
                      </div>
                  })
                  }
                   <div className='flex justify-between items-center py-4'>
                      <p className='text-sm'>Order Total</p>
                      <p className='font-bold text-lg'>${orderTotal.toPrecision(4)} </p>
                  </div>
                  
                  <div className='bg-Rose-100 py-4 mb-6'>
                      <p className='text-xs text-center flex justify-center'>
                          <img src={carbonBeutral} alt="" />
                          <span>This is a <strong>carbon-neutral </strong> delivery</span>
                      </p>
                  </div>

                  <button onClick={()=>dispatch(openModal())} className='bg-Red text-white py-3 w-full rounded-3xl'>Confirm Order</button>
              </div>
              
          :
         <div>
            <img className='mx-auto' src={emptyCartImg} alt="" />
            <p className='text-Rose-900 text-center'>Your added items will appear here</p>
        </div>
         
          }

         
          
    </div>
  )
}

export default Cart