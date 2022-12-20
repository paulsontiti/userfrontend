import { useTheme, Box, IconButton, Badge } from '@mui/material';
import { ICartProduct } from '../../types';
import { token } from '../../theme';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAppDispatch, useAppSelector } from '../../AppStore/store';
import {
  CartState,
  removeProductFromCart,
  increaseProductQuantityInCart,
  decreaseProductQuantityFromCart,
} from '../../AppStore/slices/CartSlice';

export default function AddRemoveDelete(props: { item: ICartProduct }) {
  let { item } = props;
  const dispatch = useAppDispatch();

  //get cart from state
  const cart = useAppSelector((state: { cart: CartState }) => state.cart.cart);

  const i: any = cart.cartItems.find((i) => i.name === item.name);
  if (i) {
    item = i;
  }
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      sx={{ background: colors.primary[500], width: '100%' }}
    >
      <IconButton>
        <RemoveIcon
          onClick={() => {
            if (item.quantity > 1) {
              dispatch(decreaseProductQuantityFromCart({ name: item.name }));
            } else {
              alert(
                'item in cart cannot be less than 1. Use the delete button instead'
              );
            }
          }}
        />
      </IconButton>
      <Badge badgeContent={item.quantity} color='secondary' />
      <IconButton
        onClick={() => {
          dispatch(increaseProductQuantityInCart({ name: item.name }));
        }}
      >
        <AddIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          dispatch(removeProductFromCart({ name: item.name }));
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
