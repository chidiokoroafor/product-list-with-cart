import { useEffect } from 'react'

import Cart from './components/Cart'
import { calculateOrderTotal } from './features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './components/Modal'
import { TStore } from './utils/types'
import DessertList from './components/DessertList'

function App() {
const dispatch = useDispatch()
  const { cartItems } = useSelector((state:TStore) => state.cart)
  const  {isOpen} = useSelector((store:TStore)=>store.modal)

  useEffect(() => {
    dispatch(calculateOrderTotal())
  },[cartItems])

  return (
    <main className="w-full min-h-screen bg-Rose-100">
      {isOpen && <Modal />}
      <div className="flex lg:items-start flex-col lg:flex-row gap-4 w-full sm:p-16 p-4 mx-auto font-RedHotText">
        <DessertList />
        <Cart />
    </div>
    </main>
  )
}

export default App
