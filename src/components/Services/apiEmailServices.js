import { toast } from "react-toastify";
import config from "../../config/config";

class apiEmailService {
  BASE_URL = config.url;
  static getInstance() {
    return new apiEmailService();
  }

  sendEmailReceiver = async (credentials) => {
    console.log("eamil of receiver", credentials);
    const uniqueId = Math.floor(Math.random() * 1000000);
    const mailDate = new Date();
    const receiverArray = credentials.receiverEmail.split(/[.|@]+/);
    const receiverUserId = receiverArray[0];

    const receiverResponse = await fetch(
      this.BASE_URL + receiverUserId.toLowerCase() + "/Inbox/.json",
      {
        method: "POST",
        body: JSON.stringify({
          receiverEmail: credentials.receiverEmail,
          emailSubject: credentials.emailSubject,
          emailContent: credentials.emailContent,
          senderEmail: credentials.senderEmail,
          uniqueId: uniqueId,
          mailReadStatus: false,
          dateOfMail: {
            year: mailDate.getFullYear(),
            month: mailDate.getMonth() + 1,
            day: mailDate.getDate(),
            hours: mailDate.getHours(),
            minute: mailDate.getMinutes(),
            second: mailDate.getSeconds(),
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (receiverResponse.ok) {
      const data = await receiverResponse.json();
      toast.success("Email Sent successfully!");
      return data;
    } else {
      const data2 = await receiverResponse.json();
      const errorMessage = data2.error.message;
      toast.error(errorMessage);
    }
  };
  sendEmailSender = async (credentials) => {
    console.log("eamil of Sender", credentials);
    const uniqueId = Math.floor(Math.random() * 1000000);
    const mailDate = new Date();
    const senderArray = credentials.senderEmail.split(/[.|@]+/);
    const senderUserId = senderArray[0];

    const receiverResponse = await fetch(
      this.BASE_URL + senderUserId.toLowerCase() + "/Outbox/.json",
      {
        method: "POST",
        body: JSON.stringify({
          receiverEmail: credentials.receiverEmail,
          emailSubject: credentials.emailSubject,
          emailContent: credentials.emailContent,
          senderEmail: credentials.senderEmail,
          uniqueId: uniqueId,
          mailReadStatus: false,
          dateOfMail: {
            year: mailDate.getFullYear(),
            month: mailDate.getMonth() + 1,
            day: mailDate.getDate(),
            hours: mailDate.getHours(),
            minute: mailDate.getMinutes(),
            second: mailDate.getSeconds(),
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (receiverResponse.ok) {
      const data = await receiverResponse.json();
      return data;
    } else {
      const data2 = await receiverResponse.json();
      const errorMessage = data2.error.message;
      toast.error(errorMessage);
    }
  };

  getEmailData = async (senderEmail) => {
    const emailArray = senderEmail.split(/[.|@]+/);
    const senderEmailId = emailArray[0];
    const response = await fetch(this.BASE_URL + senderEmailId + "/.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const data2 = await response.json();
      const error = data2.error.message;
      toast.error(error);
    }
  };

  deleteMailFromOutbox = async (mailInfo) => {
    console.log("3", mailInfo);
    const emailArray = mailInfo.senderEmail.split(/[.|@]+/);
    const userEmailId = emailArray[0];
    const uniqueName = mailInfo.uniqueName;
    const response = await fetch(
      this.BASE_URL + userEmailId + "/Outbox/" + uniqueName + "/.json",
      {
        method: "DELETE",
        redirect: "follow",
      }
    );

    if (response.ok) {
      const data = await response.json();
      toast.success("Email Deleted.");
      return data;
    } else {
      const data = await response.json();
      toast.error(data.error.message);
    }
  };

  deleteMailFromInbox = async (mailInfo) => {
    console.log("3", mailInfo);
    const emailArray = mailInfo.receiverEmail.split(/[.|@]+/);
    const userEmailId = emailArray[0];
    const uniqueName = mailInfo.uniqueName;
    const response = await fetch(
      this.BASE_URL + userEmailId + "/Inbox/" + uniqueName + "/.json",
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const data = await response.json();
      toast.success("Email deleted");
      return mailInfo;
    } else {
      const data = await response.json();
      toast.error(data.error.message);
    }
  };

  updateMailReadStatus = async (mailInfo) => {
    const emailArray = mailInfo.receiverEmail.split(/[.|@]+/);
    const mailDate = new Date();
    const userEmailId = emailArray[0];
    const uniqueName = mailInfo.uniqueName;
    const credentials = mailInfo;
    const response = await fetch(
      this.BASE_URL + userEmailId + "/Inbox/" + uniqueName + "/.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiverEmail: credentials.receiverEmail,
          emailSubject: credentials.emailSubject,
          emailContent: credentials.emailContent,
          senderEmail: credentials.senderEmail,
          uniqueId: credentials.uniqueId,
          mailReadStatus: true,
          dateOfMail: {
            year: mailDate.getFullYear(),
            month: mailDate.getMonth() + 1,
            day: mailDate.getDate(),
            hours: mailDate.getHours(),
            minute: mailDate.getMinutes(),
            second: mailDate.getSeconds(),
          },
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      toast.error(data.error.message);
    }
  };
}

export const ApiEmailService = apiEmailService.getInstance();
