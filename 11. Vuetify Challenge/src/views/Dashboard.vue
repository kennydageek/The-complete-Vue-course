<template>
  <div>
    <h1>Dashboard</h1>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data() {
    return {
      currentItem: '',
      snackbar: false,
    };
  },
  methods: {
    selectRow(event) {
      this.snackbar = true;
      this.currentItem = event.name;
    },
  },
};
</script>

<style></style>
