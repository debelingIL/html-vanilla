<template>
  <div class="navigation">
    <div class="row fixed-bottom">
      <div class="col align-self-start">
        <LessonProgress />
      </div>
      <div class="col align-self-end text-right">
        <button @click="$store.dispatch('checkActivityResponse')">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import LessonProgress from './LessonProgress'
import { mapGetters } from 'vuex'

export default {
  name: "Navigation",
  components: {
    LessonProgress
  },
  computed: {
    ...mapGetters([
      'activityProgress'
    ])
  },
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