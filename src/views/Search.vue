<template>
<div>
    <search-result></search-result>
    <downloading></downloading>
</div>
</template>

<script>
import SearchResult from "@/components/SearchResult/SearchResult.vue";
import Downloading from "@/components/Downloading/Downloading.vue";

export default {
  data() {
    return {};
  },
  components: { SearchResult, Downloading }
};
</script>

<style lang="scss" scoped>
</style>
