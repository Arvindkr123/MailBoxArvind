import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiEmailService } from "../Services/apiEmailServices";

export const sendEmailAction = createAsyncThunk(
  "sendEmailAction",
  async (credentials, thunkAPI) => {
    const outboxResponse = await ApiEmailService.sendEmailReceiver(credentials);
    const inboxResponse = await ApiEmailService.sendEmailSender(credentials);
    const response = {
      outboxResponse: outboxResponse,
      inboxResponse: inboxResponse,
    };

    return response;
  }
);

export const deleteMailFromOutboxAction = createAsyncThunk(
  "deleteMailFromOutboxAction",
  async (mailInfo, thunkAPI) => {
    const outboxResponse = await ApiEmailService.deleteMailFromOutbox(mailInfo);
    return mailInfo;
  }
);

export const deleteMailFromInboxAction = createAsyncThunk(
  "deleteMailFromInboxAction",
  async (mailInfo, thunkAPI) => {
    const inboxResponse = await ApiEmailService.deleteMailFromInbox(mailInfo);
    return mailInfo;
  }
);

export const getEmailDataAction = createAsyncThunk(
  "getEmailDataAction",
  async (senderEmail, thunkAPI) => {
    const response = await ApiEmailService.getEmailData(senderEmail);
    const outBoxData = response.Outbox;

    const outboxEmailList = [];
    for (const key in outBoxData) {
      const newMail = outBoxData[key];
      outboxEmailList.push({
        receiverEmail: newMail.receiverEmail,
        emailSubject: newMail.emailSubject,
        emailContent: newMail.emailContent,
        senderEmail: newMail.senderEmail,
        uniqueId: newMail.uniqueId,
        uniqueName: key,
        mailReadStatus: newMail.mailReadStatus,
        dateOfMail: newMail.dateOfMail,
      });
    }

    const inboxData = response.Inbox;
    const inboxEmailList = [];
    for (const key in inboxData) {
      const newMail = inboxData[key];
      inboxEmailList.push({
        receiverEmail: newMail.receiverEmail,
        senderEmail: newMail.senderEmail,
        emailSubject: newMail.emailSubject,
        emailContent: newMail.emailContent,
        uniqueId: newMail.uniqueId,
        uniqueName: key,
        mailReadStatus: newMail.mailReadStatus,
        dateOfMail: newMail.dateOfMail,
      });
    }

    return {
      outboxEmailList: outboxEmailList,
      inboxEmailList: inboxEmailList,
    };
  }
);

export const updateReadMailAction = createAsyncThunk(
  "updateReadMailAction",
  async (mailInfo, thunkAPI) => {
    const changedReadStatus = await ApiEmailService.updateMailReadStatus(
      mailInfo
    );
    return changedReadStatus;
  }
);
