<template>
<div>
  <el-table
    ref="multipleTable"
    :data="tableData3"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="Date"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="Address"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">Toggle selection status of second and third rows</el-button>
    <el-button @click="toggleSelection()">Clear selection</el-button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-08",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-06",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-07",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
