<template>
  <div class="lesson-progress">
      <span
        v-for="activity in activityProgress" 
        :key="activity.activityId"
        >
        <img 
            v-if="activity.activityId === currentActivity.activityId && activity.submittedResponse == null"
            class="progress-btn" 
            src="../assets/current-progress.svg" 
            alt="progress">
        <img 
            v-else-if="activity.submittedResponse === activity.correctResponseId"
            class="progress-btn" 
            src="../assets/correct-progress.svg" 
            alt="progress">
        <img 
            v-else-if="activity.submittedResponse != activity.correctResponseId && activity.submittedResponse != null"
            class="progress-btn" 
            src="../assets/wrong-progress.svg" 
            alt="progress">
        <img 
            v-else
            class="progress-btn" 
            src="../assets/idle-progress.svg" 
            alt="progress">
      </span>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "LessonProgress",
  computed: {
    ...mapGetters([
      'activityProgress',
      'currentActivity'
    ])
  },
  data() {
    return {};
  },
  methods: {}
};
</script>