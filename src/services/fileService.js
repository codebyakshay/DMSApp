// src/services/fileService.js

import api from "./api";
import { ENDPOINTS } from "./endpoints";

export const uploadDocument = async ({
  file,
  major_head,
  minor_head,
  document_date,
  document_remarks,
  tags,
  user_id,
}) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const metadata = {
      major_head,
      minor_head,
      document_date,
      document_remarks,
      tags,
      user_id,
    };
    formData.append("data", JSON.stringify(metadata));

    const res = await api.post(ENDPOINTS.SAVE_DOCUMENT, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    console.error("uploadDocument ERROR:", err.response?.data || err.message);
    throw err;
  }
};

export const fetchDocuments = async ({
  major_head = "",
  minor_head = "",
  from_date = "",
  to_date = "",
  tags = [], // array of { tag_name: "xyz" }
  uploaded_by = "",
  start = 0,
  length = 10,
  filterId = "",
  searchValue = "",
} = {}) => {
  try {
    const payload = {
      major_head,
      minor_head,
      from_date,
      to_date,
      tags,
      uploaded_by,
      start,
      length,
      filterId,
      search: {
        value: searchValue,
      },
    };

    const res = await api.post(ENDPOINTS.SEARCH_DOCUMENT, payload);
    return res.data;
  } catch (err) {
    console.error("fetchDocuments ERROR:", err.response?.data || err.message);
    throw err;
  }
};
