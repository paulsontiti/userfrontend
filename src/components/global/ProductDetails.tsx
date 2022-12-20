import {
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
  Box,
  Button,
  IconButton,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Rating,
} from '@mui/material';
import { ICartProduct } from '../../types';
import { token } from '../../theme';
import { useNavigate } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAppDispatch, useAppSelector } from '../../AppStore/store';
import {
  addProductToCart,
  CartState,
  removeProductFromCart,
  increaseProductQuantityInCart,
  decreaseProductQuantityFromCart,
} from '../../AppStore/slices/CartSlice';
import { useState } from 'react';
import AddRemoveDelete from '../addremovedelete';

export default function ProductDetails(props: { item: ICartProduct }) {
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

  //create state for dialog box
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ color: '#0f2b63', fontWeight: 'bold' }}>
          {item.name}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>{item.description}</DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ThumbUpIcon />
          <ThumbDownIcon />
          <Rating value={item.rating} />
        </DialogActions>
      </Dialog>
      <Card
        sx={{
          background: 'white',
          height: '50vh',
        }}
      >
        <CardContent style={{ width: '100%', height: '100%' }}>
          <img
            alt='category'
            onClick={() => navigate(`/product:${item.name}`)}
            src={item.img}
            style={{ width: '100%', height: '70%' }}
          />
          <Stack
            justifyContent='center'
            alignItems='start'
            sx={{ color: colors.primary[500] }}
          >
            <Typography variant='caption'>{item.name}</Typography>
            <Typography variant='caption'>{item.price}</Typography>

            {i ? (
              <AddRemoveDelete item={item} />
            ) : (
              <Box display='flex' justifyContent='center' alignItems='end'>
                <IconButton
                  onClick={() => setOpen(true)}
                  sx={{ color: colors.primary[500] }}
                >
                  <MoreVertIcon />
                </IconButton>

                <IconButton
                  sx={{ color: colors.primary[500] }}
                  onClick={() => {
                    dispatch(addProductToCart({ product: item }));
                  }}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Box>
            )}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
