import axios from "axios";

const axiosCall = async (data: string) => {
  const responseData = await axios
    .post("/api", data, {
      baseURL: "http://localhost:8080",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
    })
    .then((res) => {
      return res.data.deliveryFee;
    });

  return responseData;
};

export default axiosCall;
