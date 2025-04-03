

export const cartreducer=(state,{type,payload})=> {
    switch(type){
        case 'ADDTOCART':
            return{
                ...state,cart:[...state.cart,payload.product]
            }
        case 'REMOVEFROMCART':
            return{
                ...state,
                cart:state.cart.filter(product=>product.id!==payload.id)
            }
        case 'ADDTOWISHLIST':
            return{
                ...state,
                wishlist:[...state.wishlist,payload.product]
            }
        case 'REMOVEFROMWISHLIST':
            return{
                ...state,
                wishlist:state.wishlist.filter(product=>product.id!==payload.id)
            }
            default:
                return state

    }
  
}
