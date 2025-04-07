
import axios from "axios";

export const userlogin = async (email, password) => {
  const url = "https://api.escuelajs.co/api/v1/auth/login";

  try {
    const { data } = await axios.post(url,  {
      "email": "john@mail.com",
      "password": "changeme"
  });


    return data; // Should return a token if successful
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized: Invalid email or password.");
        return { error: "Invalid email or password. Please try again." };
      }
      console.error("Response error:", error.response.data);
      return { error: error.response.data };
    } else if (error.request) {
      console.error("Request error:", error.request);
      return { error: "No response from server. Please try again later." };
    } else {
      console.error("Axios error:", error.message);
      return { error: "An unexpected error occurred." };
    }
  }
};
