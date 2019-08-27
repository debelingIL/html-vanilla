<template>
  <div class="lesson container">
    <p>This is a lesson does this update</p>
    <Activity :activity="currentActivity"/>
    <Navigation :test="lesson.LessonActivities" v-on:nextActivity="Next()"/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Activity from "./Activity";

export default {
  name: "Lesson",
  components: {
    Navigation,
    Activity
  },
  props: {
    lesson: Object
  },
  created() {
    console.log("Component has been created!");
    this.currentActivity = this.lesson.ActivitySequence[0];
  },
  data() {
    return {
      currentActivity: {}
    };
  },
  methods: {
    Next() {
      let currentIndex = this.lesson.ActivitySequence.indexOf(
        this.currentActivity
      );
      console.log(currentIndex);

      this.currentActivity = this.lesson.ActivitySequence[++currentIndex];
    }
  }
};
</script>