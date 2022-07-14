<template>
  <div>
    <p>Server status: {{ status }}</p>
    <hr />
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'critical',
    };
  },

  methods: {
    changeStatus() {
      this.status = 'Normal';
    },
  },
};
</script>

<style lang="scss" scoped></style>
