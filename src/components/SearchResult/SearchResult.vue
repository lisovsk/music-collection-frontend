<template>
<div>
  <form class="search" action="" @submit.prevent="submitQuery(query)">
    <el-input 
      placeholder="Search" 
      v-model="query" 
      class="search__main-input">
        <el-button native-type="submit" slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </form>
  <div
    v-if="spinner"
    class="search__wr-spinner"
  >
    <i
      class="el-icon-view"
    ></i>
  </div>
  <div
    v-else
  >
  <tracks-list
    :tracks="tracks"
  ></tracks-list>
  <section class="search__bottom">
      <el-button>Save to collection</el-button>
      <el-button>Download and save to collection</el-button>
  </section>
  </div>
</div>
</template>

<script>
import TracksList from "@/components/TracksList/TracksList.vue";
import API from "@/API/mainAPI";

export default {
  data() {
    return {
      query: "",
      tracks: [],
      spinner: false
    };
  },
  components: { TracksList },
  methods: {
    submitQuery(query) {
      this.spinner = true;
      API.searchController.search(query).then(res => {
        this.tracks = res;
        this.spinner = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  // align-items: center;
  justify-content: center;
  padding: 10px 0 30px 0;
  // height: 100vh;

  &__main-input {
    max-width: 700px;
  }

  &__wr-spinner {
    display: flex;
    justify-content: center;
  }

  &__bottom {
    padding-top: 10px;
    padding-top: 20px;
    max-width: 700px;
    margin: auto;
  }
}

.tracks-list {
  max-width: 700px;
  margin: auto;
}

.el-icon-view {
  font-size: 35px;
  animation: rotating 0.7s linear infinite;
}
</style>
