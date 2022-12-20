import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axios';
import { ICart, ICartProduct, IShippingAddress } from '../../types';

export interface CartState {
  cart: ICart;
}

//types for cart orders in the database

interface CartProduct {
  product: string; //id of this product in the product model
  price: Number; //current price of this product in the cart as of the day it was purchased
  quantity: Number; //quantity of this product in the cart
}

interface PaymentDetails {
  given_name: string;
  surname: string;

  payer_id: string;
  email: string;
  orderId?: string;
}

export interface IOrder {
  userToken: string;
  cartProducts: CartProduct[];
  totalPrice: Number;
  shippingAddress: IShippingAddress;
  paymentDetails: PaymentDetails;
  paymentMethod: 'paypal' | 'stripe' | 'cash';
}

const initialState: CartState = {
  cart: localStorage.getItem('cart')
    ? JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('cart'))))
    : {
        cartItems: [],
        totalPrice: 0,
        shippingAddress: {
          recieversName: '',
          contact: '',
          address: '',
        },
      },
};

export const placeOrder = createAsyncThunk(
  'cart/placeOrder',
  async (order: IOrder, ThunkAPI) => {
    try {
      const { data } = await axiosInstance.post(
        '/carts/addtocart',
        { order },
        {
          headers: {
            Authorization: `Bearer ${order.userToken}`,
          },
        }
      );
      return data.successful;
    } catch (err: any) {
      alert(err.response.data);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //add shipping address to cart state
    addShippingAddressToCart: (
      state,
      action: PayloadAction<{ address: IShippingAddress }>
    ) => {
      state.cart.shippingAddress = action.payload.address;
      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    //add item to cart for the first time
    addProductToCart: (
      state,
      action: PayloadAction<{ product: ICartProduct }>
    ) => {
      let newItem = action.payload.product;
      const objCopy = { ...newItem }; // 👈️ create copy
      objCopy.quantity = 1;
      state.cart.cartItems.push(objCopy);
      state.cart.totalPrice = state.cart.totalPrice + objCopy.price;
      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    //remove an item from cart
    removeProductFromCart: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      const newCartItems: ICartProduct[] = [];
      state.cart.cartItems.map((i) => {
        if (i.name !== name) {
          newCartItems.push(i);
        } else {
          state.cart.totalPrice = state.cart.totalPrice - i.price * i.quantity;
        }
      });
      state.cart.cartItems = newCartItems;

      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    //increase the quantity of a cart item
    increaseProductQuantityInCart: (
      state,
      action: PayloadAction<{ name: string }>
    ) => {
      const { name } = action.payload;

      state.cart.cartItems.map((i) => {
        if (i.name === name) {
          i.quantity++;
          state.cart.totalPrice = state.cart.totalPrice + i.price;
        }
      });

      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    //decrease the quantity of a cart item
    decreaseProductQuantityFromCart: (
      state,
      action: PayloadAction<{ name: string }>
    ) => {
      const { name } = action.payload;

      state.cart.cartItems.map((i) => {
        if (i.name === name) {
          i.quantity--;
          state.cart.totalPrice = state.cart.totalPrice - i.price;
        }
      });

      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(placeOrder.fulfilled, (state, action: any) => {
      state.cart.successful = action.payload;
      state.cart.successful && localStorage.removeItem('cart');
    });
  },
});

export default cartSlice.reducer;
export const {
  addProductToCart,
  removeProductFromCart,
  decreaseProductQuantityFromCart,
  increaseProductQuantityInCart,
  addShippingAddressToCart,
} = cartSlice.actions;
