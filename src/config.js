import axios from "axios";
// import API from '@/API/mainAPI';

const baseURL = "http://localhost:8080/music-collection/api/";
const headers = { Authorization: "Basic c3RyaW5nOnN0cmluZw==" };

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
    "X-Accel-Buffering": "no",
    // 'Accept-Ranges': 'bytes',
    ...headers
  }
});

export let collectionId = 5;

// API.musicCollectionController.findAll().then((res) => {
//     console.log(res);
// });
