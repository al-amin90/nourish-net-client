import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://nourish-net-server-eight.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
