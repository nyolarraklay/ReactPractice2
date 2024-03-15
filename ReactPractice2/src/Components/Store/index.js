import { create } from 'zustand';



const useProductStore = create((set, get) => ({
    products: [],
    cart: [],
    cartTotal: 0,
    isLoading: false,
    isError: false,
    seeMore: true,
    showModal: false,

    handleToggleModal: () => set((state)=>({...state, showModal: !state.showModal})),

    backToProducts: () => set((state)=>({...state, seeMore: false})),
   

    fetchProducts: async (url) => {
        try {
           set((state)=>({...state, isLoading: true, isError: false}));
            const res = await fetch(url);
            const json = await res.json();
            const data = json.data;          
            set((state)=>({...state, products: data, isLoading: false, seeMore: true}));  
            
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
                product.addedToCart = true;
                return {...state, cart: [...state.cart, product]};

            } 
            state.cart[productInCartId].quantity += 1;
            return {...state};


            });
            
    },

    removedFromCart: (id) => {
        set((state) => {
            const productIndex = state.cart.findIndex(
                (currentProduct) => id === currentProduct.id
            );
    
            if (productIndex !== -1) {
                const updatedCart = [...state.cart];
                const product = updatedCart[productIndex];
                
                if (product.quantity === 1) {
                    updatedCart.splice(productIndex, 1);
                } else {
                    product.quantity -= 1;
                }
    
                return { ...state, cart: updatedCart };
            }
    
            return { ...state };
        });
    },

    clearCart: () => set((state) => {
        const updatedProducts = state.products.map(product => {
            return { ...product, addedToCart: false };
        });
        const updatedCart = [];
        return { ...state, products: updatedProducts, cart: updatedCart };
    }),

    

    getAddedToCartValue: (id) => {
        return get().products.some(product => product.id === id && product.addedToCart === true );
    },
    

    deleteProductFromCart: (id) =>
    set((state)=> {
        const updatedCart = state.cart.filter((product)=>{
            if(product.id === id) {
                product.addedToCart = false;
                return false;
            }
                return true;
        });
        return { ...state, cart: updatedCart}

        }),
                
        getCartTotal: () =>
        get().cart.reduce((total, product) => {
            const currentPrice = product.quantity * (product.discountedPrice ? product.discountedPrice : product.price);
            total += currentPrice
            return total;
        }, 0),

        getTotalNumbersOfItemsInCart: () => 
        get().cart.reduce((total, product) => {
            total += product.quantity;
            return total;
        }, 0),   

        getDiscountValue: (id) => {
            get().products.find(product => {
                if(product.id === id) {
                    const discount = Math.floor((product.price - product.discountedPrice) / product.price * 100)
                return discount;
                } 
                
            });
        },
        
      
    }));

export default useProductStore;


