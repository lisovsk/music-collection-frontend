import { axiosInstance } from "@/config.js";

export default {
  findAl() {
    return axiosInstance
      .get("collections")
      .then(res => {
        return res.data;
      })
      .catch(e => {
        throw `API->musicCollectionAPI->findAl: ${e}`;
      });
  },
  create(name) {
    return axiosInstance
      .post("collections", null, {
        params: {
          name
        }
      })
      .then(res => {
        return res.data;
      })
      .catch(e => {
        throw `API->musicCollectionAPI->create: ${e}`;
      });
  }
};
