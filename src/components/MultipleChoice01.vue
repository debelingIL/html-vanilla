<template>
  <div class="mc01">
    <p>This is a multiple choice activity</p>
    <!-- <Stem /> -->
    <ShortTextButton 
    v-for="option in activity.question.activityResponses" 
    :key="option.responseText" 
    @optionSelected="selectOption"
    :class="{ 'selected': option.responseId == selectedOption }"
    :buttonData="option" />
  </div>
</template>

<script>
import ShortTextButton from './ShortTextButton';

export default {
  name: "MultipleChoice01",
  components: {
    ShortTextButton
  },
  props: {
    activity: Object,
    check: Number
  },
  watch: {
    check: function(newVal, oldVal) {
      console.log("prop change", oldVal, 'to', newVal)
      this.responseIsCorrect();
    }
  },
  data() {
    return {
      selectedOption: null
    };
  },
  methods: {
    selectOption (optionId) {
      this.selectedOption = optionId;
      // this.$store.dispatch("setLoadingLessonStatus");
      this.$store.dispatch("selectActivityResponse", optionId);
    },
    responseIsCorrect () {
      if (this.activity.correctOption === this.selectedOption) {
        console.log("you're correct!")
      } else {
        console.log("try again")
      }
    }
  }
};
</script>