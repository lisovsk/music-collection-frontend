import {
  axiosInstance,
  axiosDownloadInstance
  // axiosMultipartInstance
} from "@/config.js";

export default {
  searchController: {
    search(query) {
      return axiosInstance
        .get("search", {
          params: {
            query
          }
        })
        .then(res => {
          return res.data;
        })
        .catch(e => {
          throw `API->mainAPI->searchController->search: ${e}`;
        });
    },
    searchAndDownload(artists, collectionId, genres, title) {
      return axiosInstance
        .post("search", {
          artists,
          collectionId,
          genres,
          title
        })
        .then(res => {
          return res.data;
        })
        .catch(e => {
          throw `API->mainAPI->searchController->searchAndDownload track: ${title}: ${e}`;
        });
    }
  },
  musicCollectionController: {
    create(name) {
      return axiosInstance
        .post("collections", {
          name
        })
        .catch(e => {
          throw `API->mainAPI->musicCollectionController->create: ${e}`;
        });
    },
    findAll() {
      return axiosInstance
        .get("collections")
        .then(res => {
          return res;
        })
        .catch(e => {
          throw `API->mainAPI->musicCollectionController->findAll: ${e}`;
        });
    }
  },

  trackController: {
    download(trackId, fileName) {
      return axiosDownloadInstance
        .get("tracks", {
          params: {
            trackId
          }
        })
        .then(res => {
          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${fileName}`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(e => {
          throw `API->mainAPI->trackController->download: ${e}`;
        });
    },
    downloadOneFromSearch(collectionId, songDto) {
      return axiosDownloadInstance
        .post("tracks", songDto, {
          params: {
            collectionId
          }
        })
        .then(res => {
          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${songDto.title}.mp3`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(e => {
          throw `API->mainAPI->trackController->downloadOneFromSearch: ${e}`;
        });
    }
    // downloadTracks(trackIds, fileName) {
    //   return axiosMultipartInstance
    //     .get('tracks', {
    //       params: {
    //         trackIds: trackIds.toString()
    //       }
    //     })
    //     .then(res => {
    //       let testData = res.data
    //         .split('--END')[1]
    //         .split('mp3\r\n\r\n')[1]
    //         .trim();

    //       let buff = Buffer.from(testData, 'binary');

    //       // const buff = stringToUint(testData);
    //       // console.log(buff);
    //       //   var myRequest = new Request();
    //       //   myRequest.body = testData;
    //       //   fetch(myRequest).then(function(response) {
    //       //     console.log('response', response.blob());
    //       //     return response.blob();
    //       //   });
    //       //   var data = new Blob(testData], { type: 'audio/mpeg' });
    //       //   console.log(data);

    //       // .trim()
    //       // .replace(/audio\/mpeg\n.*\n*/, '')
    //       // .trim();
    //       //   console.log(testData);
    //       // var regex = /--END.*--END/g;
    //       // console.log(res.data.match(regex))
    //       //   console.log(
    //       //     new Blob([res.data.split('--END')[1]], {
    //       //       type: 'audio/mpeg'
    //       //     })
    //       //   );
    //       //   const data = b64toBlob(testData, 'audio/mpeg');
    //       // var data = new Uint8Array(str2ab(testData));
    //       // var blob = new Blob([data], { type: 'audio/mpeg' });

    //       // let myBlob = blobUtil.createBlob([testData], { type: 'audio/mpeg' });
    //       // var binary = convertDataURIToBinary(testData);
    //       // var blob = new Blob([binary], { type: 'audio/ogg' });

    //       // var data = new Uint8Array(testData);
    //       var blob = new Blob(buff, { type: 'audio/mpeg-3' });
    //       const url = window.URL.createObjectURL(new Blob([blob]));
    //       const link = document.createElement('a');
    //       link.href = url;
    //       link.setAttribute('download', `${fileName}.mp3`);
    //       document.body.appendChild(link);
    //       link.click();
    //       document.body.removeChild(link);
    //     })
    //     .catch(e => {
    //       throw `API->mainAPI->trackController->downloadTracks: ${e}`;
    //     });
    // }
    // downloadTracks() {
    //     console.log(22);
    //     axiosMultipartInstance
    //         .post("tracks", {
    //             collectionId: 28,
    //             songs: [
    //                 {
    //                     artist: "Coldfish",
    //                     bitRate: 320,
    //                     duration: 626,
    //                     genres: [],
    //                     resource: "VK",
    //                     thumbnail:
    //                         "https://img.discogs.com/QUt6_ZElApoa_9tbWPyko3kKYMo=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-109388-1445953182-5379.jpeg.jpg",
    //                     title: "Apollonia",
    //                     uri:
    //                         "VK:aHR0cHM6Ly9wc3Y0LnZrdXNlcmF1ZGlvLm5ldC9jNjEzOTIxL3UyOTcwMzYzMzYvYXVkaW9zL2NjZGVjYzYyZTNhMi5tcDM/ZXh0cmE9SEhUQ1FXckhUaS1hSUtsUmxmcFJxTHNoU3VNZDJIUUJ1YzVYZ2xtdlVtaVpKZnlBclJIMGtvRXRmSHZhTU9nM3dtQjRWOGNFdVBEMTJMYU1ReWFfNm1VOTlHWmNXNTRJZEJMN3lRX0hJdjN1NFZVZWhWQVZPWWZKRjU4WmJfZDVWWko5MXhXNDh3MEtpdmxpR3JvTmlRcDhlQQ=="
    //                 }
    //             ]
    //         })
    //         .then(() => {
    //             console.log(res);
    //         })
    //         .catch(e => {
    //             throw `API->mainAPI->trackController->downloadTracks: ${e}`;
    //         });
    // }
  }
};
