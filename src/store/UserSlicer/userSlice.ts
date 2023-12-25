import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginMockProps } from "../../types/auth.types";
import { UserSliceProp } from "../../types/users.type";

const initialState: UserSliceProp = {
  user: null,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => initialState,
    setUser: (state, { payload }: PayloadAction<LoginMockProps>) => {
      state.user = payload;
      state.token = payload?.token;
    },
  },
});

export const { resetUser, setUser } = userSlice.actions;
export default userSlice.reducer;
