// src/store/slices/files/FileThunks.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadDocument, fetchDocuments } from "@/services/fileService";

// Upload Document Thunk
export const uploadDocumentThunk = createAsyncThunk(
  "files/uploadDocument",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await uploadDocument(payload);
      return response;
    } catch (error) {
      console.error(
        "uploadDocumentThunk error:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch Documents Thunk
export const fetchDocumentsThunk = createAsyncThunk(
  "files/fetchDocuments",
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await fetchDocuments(params);
      return response;
    } catch (error) {
      console.error(
        "fetchDocumentsThunk error:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
