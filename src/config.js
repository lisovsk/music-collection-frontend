import axios from "axios";
// import API from '@/API/mainAPI';

const baseURL = "http://10.5.0.7:8080/songbox-house/api/";
const headers = { Authorization: "Basic YWRtaW46YWRtaW4=" };

export const axiosInstance = axios.create({
  baseURL,
  headers
});

export const axiosDownloadInstance = axios.create({
  baseURL,
  headers,
  responseType: "blob"
});

export const axiosMultipartInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/x-mixed-replace; boundary=END",
    // responseType: "blob",
    // "X-Accel-Buffering": "no",
    // 'Accept-Ranges': 'bytes',
    ...headers
  }
});

export let collectionId = 28;

// API.musicCollectionController.findAll().then((res) => {
//     console.log(res);
// });
