import { SatelliteAlt } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import {
  deleteEmailAction,
  deleteMailFromInboxAction,
  deleteMailFromOutboxAction,
  getEmailAction,
  getEmailDataAction,
  sendEmailAction,
  updateReadMailAction,
} from "../Reducer/asyncEmailReducer";

const initialState = {
  emailList: undefined,
  changed: false,
  inboxEmail: null,
  outboxEmail: null,
  Inbox: [],
  Outbox: [],
  isInboxActive: false,
  isOutboxActive: false,
};
const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    openInboxEmailDetail: (state, action) => {
      state.inboxEmail = action.payload;
    },
    openOutboxEmailDetail: (state, action) => {
      state.outboxEmail = action.payload;
    },
    inboxActive(state, action) {
      state.isInboxActive = true;
      state.isOutboxActive = false;
    },
    outboxActive(state, action) {
      state.isOutboxActive = true;
      state.isInboxActive = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendEmailAction.fulfilled, (state, action) => {
      state.changed = true;
    });
    builder.addCase(getEmailDataAction.fulfilled, (state, action) => {
      state.changed = false;
      const outboxEmailList = action.payload.outboxEmailList;
      const inboxEmailList = action.payload.inboxEmailList;
      state.Outbox = outboxEmailList;
      state.Inbox = inboxEmailList;
    });

    builder.addCase(deleteMailFromInboxAction.fulfilled, (state, action) => {
      state.changed = true;
    });
    builder.addCase(deleteMailFromOutboxAction.fulfilled, (state, action) => {
      state.changed = true;
    });
    builder.addCase(updateReadMailAction.fulfilled, (state, action) => {});
  },
});

export default emailSlice;
export const emailAction = emailSlice.actions;
