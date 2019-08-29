<template>
  <div class="lesson container">
    <p>This is a lesson does this update</p>
    <Activity :activity="lesson.ActivitySequence[1]" @optionSelected="printResponse" :check="check"/>
    <Navigation :test="lesson.LessonActivities" v-on:nextActivity="Next()" />
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
    this.currentActivity = this.lesson.ActivitySequence[0];
    this.$store.dispatch("setLesson", this.lesson);
  },
  data() {
    return {
      currentActivity: {},
      check: null
    };
  },
  methods: {
    Next() {
      // let currentIndex = this.lesson.ActivitySequence.indexOf(this.currentActivity);
      // this.currentActivity = this.lesson.ActivitySequence[++currentIndex];
      this.check += 1;
    },
    printResponse (test) {
      console.log(test)
    }
  }
};
</script>