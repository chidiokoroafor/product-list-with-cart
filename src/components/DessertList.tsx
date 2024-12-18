import { useSelector } from "react-redux"
import Dessert from "./Dessert"
import { TStore } from "../utils/types"

const DessertList = () => {
    const { items } = useSelector((state:TStore) => state.cart)
  return (
    <div className="lg:w-[70%] w-full" >
          <h2 className="text-4xl font-bold text-Rose-900">Desserts</h2>

          <div className='grid md:grid-cols-3  grid-cols-1 gap-6 mt-6 z-10'>
            {items.map((item) => {              
              return <Dessert key={item.name} des={item} />
            })}
          </div>
        </div>
  )
}

export default DessertList