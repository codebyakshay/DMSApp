/// src/store/slices/files/fileExtraReducers.js

import { uploadDocumentThunk, fetchDocumentsThunk } from "./FileThunks";

export default function fileExtraReducers(builder) {
  // Upload handlers
  builder
    .addCase(uploadDocumentThunk.pending, (state) => {
      state.uploadStatus = "loading";
      state.uploadError = null;
    })
    .addCase(uploadDocumentThunk.fulfilled, (state, action) => {
      state.uploadStatus = "succeeded";
      const newDoc = action.payload?.data;
      if (newDoc) {
        state.documents.unshift(newDoc);
        state.totalDocuments = (state.totalDocuments || 0) + 1;
      }
    })
    .addCase(uploadDocumentThunk.rejected, (state, action) => {
      state.uploadStatus = "failed";
      state.uploadError = action.payload;
    });

  // Fetch handlers
  builder
    .addCase(fetchDocumentsThunk.pending, (state) => {
      state.fetchStatus = "loading";
      state.fetchError = null;
    })
    .addCase(fetchDocumentsThunk.fulfilled, (state, action) => {
      state.fetchStatus = "succeeded";
      state.documents = action.payload.data || [];
      state.totalDocuments = action.payload.recordsTotal || 0;
    })
    .addCase(fetchDocumentsThunk.rejected, (state, action) => {
      state.fetchStatus = "failed";
      state.fetchError = action.payload;
    });
}
