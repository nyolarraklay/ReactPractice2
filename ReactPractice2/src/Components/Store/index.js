import { create } from 'zustand'



const useProductStore = create((set, get) => ({
    products: [],
    cart: [],
    cartTotal: 0,
    isLoading: false,
    isError: false,
    seeMore: true,
    backToProducts: () => set((state)=>({...state, seeMore: false})),

    fetchProducts: async (url) => {
        try {
           set((state)=>({...state, isLoading: true, isError: false}));
            const res = await fetch(url);
            const json = await res.json();
            set((state)=>({...state, products: json.data, isLoading: false, seeMore: true}));  
        }
        
        catch (error) {
            console.log(error);
            set((state)=>({...state, isLoading: false, isError: true}));
        }
        
    },

  
   


    addToCart: (id) => {
        set((state)=>{
            const product = state.products.find(
                (currentProduct) => id === currentProduct.id,
            );

       
            const productInCartId = state.cart.findIndex(
                (currentProduct) => id === currentProduct.id,
            );

            if (productInCartId === -1) {
                product.quantity = 1;
                return {...state, cart: [...state.cart, product]};

            } 
            state.cart[productInCartId].quantity += 1;
            return {...state};
            });
    },


    clearCart:() => set(() => ({cart: []})),
    deleteProductFromCart: (id) =>
    set((state)=> {
        const updatedCart = state.cart.filter((product)=>{
            if(product.id === id) {
                return false;
            }
                return true;
        });
        return { ...state, cart: updatedCart}

        }),
                
        getCartTotal: () =>
        get().cart.reduce((total, product) => {
            const currentPrice = product.quantity * product.price;
            total += currentPrice
            return total;
        }, 0),

        getTotalNumbersOfItemsInCart: () => 
        get().cart.reduce((total, product) => {
            total += product.quantity;
            return total;
        }, 0),
    }));




export default useProductStore;

