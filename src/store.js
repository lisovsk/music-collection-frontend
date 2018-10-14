import Vue from "vue";
import Vuex from "vuex";
import storageAPI from "@/API/storageAPI";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    downloadableTracks: storageAPI.getDownloadableTracks() || []
  },
  mutations: {
    pushToDownloadableTracks(state, newDownloadableTracks) {
      state.downloadableTracks.push(newDownloadableTracks);
      storageAPI.setNewDownloadableTracks([...state.downloadableTracks]);
    },
    deleteFromDownloadableTracks(state, i) {
      state.downloadableTracks.splice(i, 1);
      storageAPI.setNewDownloadableTracks(state.downloadableTracks);
    }
  },
  actions: {}
});
