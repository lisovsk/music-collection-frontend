export default {
  // pushToDownloadableTracks(item) {
  //     const downloadableTracks = JSON.parse(localStorage.getItem('downloadableTracks')) || [];
  //     downloadableTracks.push(item);
  //     localStorage.setItem('downloadableTracks', JSON.stringify(downloadableTracks));
  //     console.log(item);
  // },

  getDownloadableTracks() {
    return JSON.parse(localStorage.getItem("downloadableTracks"));
  },
  setNewDownloadableTracks(newDownloadableTracks) {
    return localStorage.setItem(
      "downloadableTracks",
      JSON.stringify(newDownloadableTracks)
    );
  }
};
