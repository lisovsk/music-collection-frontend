import {
  axiosInstance,
  axiosDownloadInstance,
  axiosMultipartInstance
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
      //   console.log(artists);
      //   console.log(collectionId);
      //   console.log(genres);
      //   console.log(title);
      return axiosInstance
        .post("http://localhost:8080/music-collection/api/search", {
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
    downloadTracks() {
      //   console.log(22);
      axiosMultipartInstance
        .post("tracks", {
          collectionId: 5,
          songs: [
            {
              artist: "Vincent Casanova",
              bitRate: 320,
              duration: 482,
              genres: [],
              resource: "VK",
              thumbnail:
                "https://img.discogs.com/hWYX_YGsXQeFfQFzpq5iNN6wN_0=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-52012-1408002828-7824.jpeg.jpg",
              title: "Zip",
              uri:
                "VK:aHR0cHM6Ly9wc3Y0LnZrdXNlcmF1ZGlvLm5ldC9jODEzNDM1L3U0NzQ0OTkyOTAvYXVkaW9zLzBkZWIzM2ZhZjE0MS5tcDM/ZXh0cmE9b0E3LUxldURyM1VlVWxqYkVtYzF5U3pRWWNwQnpaS1pzWWpFN3ZDYVRwc1cxa0JwSFR3bC1fcXlhVGNybHVLeU9sVWdYVnhQS0pTUldrdmNrYnlpRDhUQ1FtVndtM0thQzI2NENua3JsUktsZ0F4c0tHcm1aNzFqQ1hscXN1cmt3ZlgxbDVpVElIYlRkNFQwWmJJakRZd04="
            }
          ]
        })
        .then(() => {
          //   console.log(res);
        })
        .catch(e => {
          throw `API->mainAPI->trackController->downloadTracks: ${e}`;
        });
    }
  }
};
