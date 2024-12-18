
export type Tdesert = {
        image: DessertImage,
        name: string,
        category: string,
        price: number,
        isAddedToCart: boolean,
        id: string,
        quantity: number
       
}

export type TcartItem = Tdesert & {
     totalAmount: number
}
    
export type DessertImage ={
            thumbnail: string,
            mobile: string,
            tablet: string,
            desktop: string
}
        
export type TCartInitialData = {
    items: Tdesert[]
    cartItems: TcartItem[]
    orderTotal: number
}

export type DesertProps = {
    des: Tdesert
}

export type TModal = {
    isOpen: boolean
}

export type TStore = {
    cart: TCartInitialData
    modal: TModal
}