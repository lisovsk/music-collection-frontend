import Vue from "vue";
import Vuex from "vuex";
import storageAPI from "@/API/storageAPI";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    downloadableTracks: storageAPI.getDownloadableTracks() || [],
    collectionId: 7
  },
  mutations: {
    pushToDownloadableTracks(state, newDownloadableTracks) {
      state.downloadableTracks.push(newDownloadableTracks);
      storageAPI.setNewDownloadableTracks([...state.downloadableTracks]);
    },
    deleteFromDownloadableTracks(state, i) {
      state.downloadableTracks.splice(i, 1);
      storageAPI.setNewDownloadableTracks(state.downloadableTracks);
    },
    setCollectionId(state, collectionId) {
      state.collectionId = collectionId;
    }
  },
  actions: {}
});
export default store;
