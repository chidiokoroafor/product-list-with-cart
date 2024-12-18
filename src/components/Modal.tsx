import { useDispatch, useSelector } from 'react-redux'
import orderConfirmedIcon from '../assets/images/icon-order-confirmed.svg'
import { closeModal } from '../features/modal/modalSlice'
import { clearCart} from '../features/cart/cartSlice'
import { TStore } from '../utils/types'

const Modal = () => {
    const { cartItems, orderTotal } = useSelector((state:TStore) => state.cart)
     const dispatch = useDispatch()
  return (
      <div className="w-full h-screen flex justify-center items-center fixed top-0 left-0 bg-[rgba(0_,0_,0_,0.7)] z-50">
          <div className='p-5 bg-Rose-50 w-[95%] max-w-[400px] rounded-lg'>
              <img className='size-8' src={orderConfirmedIcon} alt="confirm order icon" />
              <h2 className='font-bold text-Rose-900 text-2xl mt-4'>Order Confirmed</h2>
              <p className='text-xs text-Rose-500 mt-2'>We hope you enjoy your food!</p>
              <div className='mt-6 bg-Rose-100'>
                  {cartItems.map((order) => {
                      return <div key={order.id} className='flex justify-between items-center border-b-[2px] border-b-Rose-100 p-4'>
                          <div className='flex gap-3'>
                              <img className='size-10 rounded-md' src={order.image.desktop} alt="" />
                              <div className='text-sm'>
                                  <h3 className='text-Rose-900 font-[500]'>{order.name} </h3>
                                  <p className='text-xs'> <span className='text-Red'>{order.quantity}x </span> <span>@ ${order.price.toPrecision(3) }</span></p>
                              </div>
                          </div>
                          <p>${order.totalAmount.toPrecision(4)} </p>
                            
                        </div>
                  })}
                <div className='flex justify-between items-center p-4'>
                    <p className='text-sm'>Order Total</p>
                    <p className='font-bold text-lg'>${orderTotal.toPrecision(4)} </p>
                </div>
              </div>

              <button
                  onClick={() => {
                  dispatch(closeModal())
                  dispatch(clearCart())
                    }}
                  className='bg-Red text-white py-3 w-full rounded-3xl mt-6'>
                  Start New Order</button>
          </div>
          
    </div>
  )
}

export default Modal