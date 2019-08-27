<template>
  <div class="navigation">
    <div class="row fixed-bottom">
      <div class="col align-self-start">
        <img v-for="n in test" :key="n" class="progress-btn" src="../assets/idle-progress.svg" alt="progress">
      </div>
      <div class="col align-self-end text-right">
        <button @click="$emit('nextActivity')">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    test: Number
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.navigation {
  height: 100px;
}
.progress-btn {
  padding-right: 8px;
}
</style>