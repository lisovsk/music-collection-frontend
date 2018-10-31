import axios from "axios";
import store from "@/store";
import musicCollectionAPI from "@/API/musicCollectionAPI";
import _ from "lodash";

const baseURL = "http://localhost:8080/songbox-house/api/";
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
    ...headers
  }
});

(async function() {
  let collectionId = null;
  await musicCollectionAPI.findAl().then(item => {
    collectionId = _.get(item, "[0].collectionId");
  });
  if (collectionId === undefined) {
    await musicCollectionAPI.create("base4").then(item => {
      collectionId = item.collectionId;
    });
  }
  store.commit("setCollectionId", collectionId);
})();
