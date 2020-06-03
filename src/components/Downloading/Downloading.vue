<template>
    <div class="downloading">
        <el-collapse v-model="mainCollapse">
            <el-collapse-item title="Downloading" name="1">
                <div
                    class="downloading__wr-tracks"
                >
                  <ul>
                    <li v-for="(track, index) in tracks" :key="track.title">
                      {{track.title}}
                      <i
                          @click="deleteFromDownloadableTracks(index)"
                          class="el-icon-delete"
                      ></i>
                    </li>
                  </ul>
                    <!-- <el-table
                        :data="tracks"
                        style="width: 100%"
                    >
                        <el-table-column type="expand">
                        <template slot-scope="props">
                            <p>Artist: {{ props.row.artist }}</p>
                            <p>Genres: {{ props.row.genres }}</p>
                        </template>
                        </el-table-column>
                        <el-table-column
                            prop="title">
                        </el-table-column>
                        <el-table-column
                            width="50"
                        >
                            <template
                                slot-scope="scope"
                            >
                                <i
                                    @click="deleteFromDownloadableTracks(props.row.index)"
                                    class="el-icon-delete"
                                ></i>
                            </template>
                        </el-table-column>
                    </el-table> -->
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import API from "@/API/mainAPI";

export default {
  data() {
    return {
      tracks: this.$store.state.downloadableTracks,
      mainCollapse: [],
      tracksCollapse: ""
    };
  },
  methods: {
    downloadTrack(numberOfTrack) {
      // console.log(1);
      // console.log(this.tracks[numberOfTrack].title);
      if (this.tracks.length) {
        // API.trackController.downloadTracks();
        API.searchController
          .searchAndDownload(
            this.tracks[numberOfTrack].artist,
            this.tracks[numberOfTrack].collectionId,
            this.tracks[numberOfTrack].genres,
            this.tracks[numberOfTrack].title
          )
          .then(res => {
            API.trackController.download(res.trackId, res.fileName).then(() => {
              this.$store.commit("deleteFromDownloadableTracks", numberOfTrack);
              this.downloadTrack(0);
            });
          });
      }
    },
    deleteFromDownloadableTracks(i) {
      // console.log(i);
      this.$store.commit("deleteFromDownloadableTracks", i);
    }
  },
  watch: {
    // tracks(newTracks, oldTracks) {
    //   if (!oldTracks.length && newTracks.length) {
    //     this.downloadTrack(0);
    //   }
    // },
  },
  created() {
    for (var i = 0; i < this.tracks.length; i++) {
      this.downloadTrack(i);
    }
  }
};
</script>


<style lang="scss" scoped>
.downloading {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 400px;
  padding: 5px;
  z-index: 100;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  &__wr-tracks {
    max-height: calc(100vh - 55px);
    overflow-y: auto;
  }

  .el-icon-delete {
    cursor: pointer;
  }
}
</style>

<style lang="scss">
.downloading {
  .el-collapse-item__content {
    padding-block-end: 0;
  }

  .el-table thead {
    display: none;
  }
}
</style>
