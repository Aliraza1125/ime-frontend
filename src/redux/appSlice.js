import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// send enquiry
export const sendEnquiry = createAsyncThunk(
  "app/register",
  async ({ formData, reset }, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        reset();
      } else {
        console.log("Failed to send enquiry.");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("An error occurred while sending the enquiry.");
    }
  }
);

const initialState = {
  loading: false,
  enquiryModal: false,
  enquirySuccessModal: false,
  email: null,
};

const appSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEnquiryModal: (state, action) => {
      state.enquiryModal = action.payload;
    },

    setEnquirySuccessModal: (state, action) => {
      state.enquirySuccessModal = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendEnquiry.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(sendEnquiry.fulfilled, (state, action) => {
      state.loading = false;
      state.enquiryModal = false;
      state.enquirySuccessModal = true;
    });

    builder.addCase(sendEnquiry.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default appSlice.reducer;

export const { setEnquiryModal, setEnquirySuccessModal, setEmail } =
  appSlice.actions;
