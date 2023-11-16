import { toast } from "react-toastify";
import config from "../../config/config";

class apiUserService {
  BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  apiKey = config.apiKey;
  static getInstance() {
    return new apiUserService();
  }

  signUp = async (data) => {
    const response = await fetch(this.BASE_URL + `signUp?key=${this.apiKey}`, {
      method: "POST",
      body: JSON.stringify({
        email: data.userEmail,
        password: data.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      toast.success("Account created successfully!");
      return data;
    } else {
      const data_1 = await response.json();
      let errorMessage = data_1.error.errors[0].message;
      toast.error(errorMessage);
    }
  };
  signIn = async (data) => {
    const response = await fetch(
      this.BASE_URL + `signInWithPassword?key=${this.apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: data.userEmail,
          password: data.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      toast.success("Welcome to Mail Box Client!");
      return data;
    } else {
      const data_1 = await response.json();
      let errorMessage = data_1.error.errors[0].message;
      toast.error(errorMessage);
    }
  };

  profileUpdate = async (data) => {
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(this.BASE_URL + `update?key=${this.apiKey}`, {
      method: "POST",
      body: JSON.stringify({
        idToken: idToken,
        displayName: data.displayName,
        photoUrl: data.photoUrl,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // toast.success("Profile updated successfully!");
      return data;
    }
  };

  resetPassword = async (data) => {
    const response = await fetch(
      this.BASE_URL + `sendOobCode?key=${this.apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: data.userEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      toast.success("A link is send to your email, please check!");
      return data;
    } else {
      const data = await response.json();
      console.log(data);
    }
  };

  getUserData = async () => {
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(this.BASE_URL + `lookup?key=${this.apiKey}`, {
      method: "POST",
      body: JSON.stringify({
        idToken: idToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      console.log(data);
    }
  };
}

export const ApiUserService = apiUserService.getInstance();
