// src/store/slices/auth/authExtraReducers.js

const addAuthExtraReducers = (builder) => {
  builder
    .addCase("auth/requestOTP/pending", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("auth/requestOTP/fulfilled", (state) => {
      state.loading = false;
    })
    .addCase("auth/requestOTP/rejected", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("auth/verifyOTP/pending", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("auth/verifyOTP/fulfilled", (state, action) => {
      state.loading = false;
      state.token = action.payload;
    })
    .addCase("auth/verifyOTP/rejected", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
};

export default addAuthExtraReducers;
