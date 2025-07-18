// src/store/slices/files/FileSlice.js

import { createSlice } from "@reduxjs/toolkit";
import fileExtraReducers from "./fileExtraReducers";

const initialState = {
  uploadStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  uploadError: null,
  fetchStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  fetchError: null,
  documents: [],
  totalDocuments: 0,
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {},
  extraReducers: fileExtraReducers,
});

export default fileSlice.reducer;
