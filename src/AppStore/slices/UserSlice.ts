import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axios';
import { IUser, LoginDetails, signUpDetails } from '../../types';

export interface UserState {
  user: IUser;
}

const initialState: UserState = {
  user: localStorage.getItem('user')
    ? JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user'))))
    : { token: '', details: { email: '', role: '', _id: '', userName: '' } },
};
export const login = createAsyncThunk(
  'user/login',
  async (user: LoginDetails, ThunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/users/signin', user);
      return data;
    } catch (err: any) {
      alert(err.response.data.message);
    }
  }
);

export const signup = createAsyncThunk(
  'user/signup',
  async (user: signUpDetails, ThunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/users/signup', { user });
      return data;
    } catch (err: any) {
      alert(err.response.data.message);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signout: (state) => {
      state.user = initialState.user;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: any) => {
      if (action.payload) {
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(state.user));
      }
    });
    builder.addCase(signup.fulfilled, (state, action: any) => {
      if (action.payload) {
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(state.user));
      }
    });
  },
});

export default userSlice.reducer;
export const { signout } = userSlice.actions;
