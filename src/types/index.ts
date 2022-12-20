export interface IUser {
  token: string;
  details: {
    email: string;
    userName: string;
    _id: string;
    role: string;
    firstName: string;
    lastName: string;
    contact: string;
    dp?: string;
  };
}

export type signUpDetails = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  contact: string;
  userName: string;
};

export type LoginDetails = {
  email: string;
  password: string;
};

export interface ICartProduct {
  img: string;
  category: string;
  name: string;
  price: number;
  discount: string;
  quantity: number;
  product: string;
  description: string;
  rating: number;
  likes: number;
  dislikes: number;
}
export interface ICart {
  cartItems: ICartProduct[];
  totalPrice: number;
  shippingAddress: IShippingAddress;
  paymentDetails: IPaymentDetails;
  successful: Boolean;
}
export interface IShippingAddress {
  recieversName: string;
  contact: string;
  address: string;
}

export interface IPayPalPaymentDetails {
  name: {
    given_name: string;
    surname: string;
  };
  payer_id: string;
  address: {
    country_code: string;
  };
  email: string;
}
export interface IPaymentDetails extends IPayPalPaymentDetails {
  orderId: string;
}
