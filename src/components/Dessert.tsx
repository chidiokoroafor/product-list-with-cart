import cartIcon from '../assets/images/icon-add-to-cart.svg'
import { useDispatch } from 'react-redux'
import { addItem, increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice'
import { DesertProps } from '../utils/types'


const Dessert = ({ des }:DesertProps) => {
    // const { cartItems } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

  return (
    <div className={`  rounded-lg overflow-hidden border-red-500`}>
    <div className='mb-1 rounded-lg '>
              <div className={` relative mb-12 `}>
                  <div className={`${des.isAddedToCart ? 'border-2 border-Red' : ''} rounded-lg overflow-hidden`}>
                <img className='w-full -z-10' src={des.image.desktop} alt="" />
                  </div>

                {des.isAddedToCart ?
                  <button 
                 className={`group bg-Red border-Red  rounded-3xl border-2 py-2 px-2 z-10 -bottom-6 mx-auto absolute w-[55%] left-1/2 -translate-x-1/2`}>
           
                    <div className='flex justify-between gap-2 items-center '>
                        <div onClick={()=>dispatch(decreaseQuantity(des.id))} className='size-4 flex justify-center items-center border-2 border-Rose-50 rounded-full'>
                        <img src="/images/icon-decrement-quantity.svg" alt="" />
                        </div>

                        <span className='text-Rose-50'>{des.quantity} </span>
                        
                        <div onClick={()=>dispatch(increaseQuantity(des.id))} className='size-4 flex justify-center items-center border-2 border-Rose-50 rounded-full'>
                        <img src="/images/icon-increment-quantity.svg" alt="" />
                        </div>
                    </div>
                    </button>
                   :
                  <button onClick={() =>{dispatch(addItem(des))}}  className='hover:border-Red  bg-Rose-50 border-Rose-500 rounded-3xl border-2 py-2 px-2 z-10 -bottom-6 mx-auto absolute w-[55%] left-1/2 -translate-x-1/2'  >
                      <div className='flex justify-center gap-2'>
                        <img className='rounded-lg size-4' src={cartIcon} alt="Add to cart icon" />
                        <span className='text-sm group-hover:text-Red md:text-[.7em] md:font-[500]'>Add to Cart</span>
                    </div>
                  </button>
                } 
        </div>
    
        <p className='text-Rose-500 text-sm'> {des.category} </p>
        <p className='text-Rose-900 font-bold'> {des.name} </p>
        <p className='text-Red'> ${des.price.toPrecision(3)} </p>
        </div>
    </div>
  )
}

export default Dessert