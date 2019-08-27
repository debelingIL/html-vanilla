<template>
  <div class="navigation">
    <div class="row fixed-bottom">
      <div class="col align-self-start">Progress</div>
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
</style>