<template>
<div class="tracks-list">
  {{tracks}}
  <el-table
    :data="tracks"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="">
      <template 
        slot-scope="scope">
        <div>
            <img 
                class="tracks-list__thumbnail" 
                :src="scope.row.thumbnail" 
            />
        </div>
    </template>
    </el-table-column>
    <el-table-column
      property="artist"
      label="Artist"
      width="160">
    </el-table-column>
    <el-table-column
      property="title"
      label="Title"
      width="150">
    </el-table-column>
    <el-table-column
      property="bitRate"
      label="BPM"
      width="70">
    </el-table-column>
    <el-table-column
      property="duration"
      label="Duration"
      width="80">
    </el-table-column>
    <el-table-column
      label="Download"
      width="90">
      <template 
        slot-scope="scope">
        <div class="download"
        @click="searchAndDownload(scope.row.artist, collectionId, [], scope.row.title)"
        >
          <i
            class="el-icon-download"
          ></i>
        </div>
    </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
// import API from "@/API/mainAPI";
import { collectionId } from "@/config";

export default {
  props: {
    tracks: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      collectionId
    };
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    searchAndDownload(artist, collectionId, genres, title) {
      this.$store.commit("pushToDownloadableTracks", {
        artist,
        collectionId,
        genres,
        title
      });
    }
  }
};
</script>

<style lang="scss">
.tracks-list {
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  &__thumbnail {
    max-width: 100%;
    object-fit: cover;
  }
  .download {
    .el-icon-download {
      font-size: 25px;
      cursor: pointer;
    }
  }
}
</style>
