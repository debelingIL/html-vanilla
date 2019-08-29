<template>
  <div id="app">
    <Lesson :lesson="lessonData"/>
  </div>
</template>

<script>
import Lesson from "./components/Lesson";
import LessonData from "./data/lesson.json";

export default {
  name: "App",
  components: {
    Lesson
  },
  data() {
    return {
      lessonData: LessonData
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
