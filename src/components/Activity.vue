<template>
  <div class="activity">
    <MultipleChoice01 v-if="activity.activityType == 'shortTextButton'" />
    <Introduction01 v-else-if="activity.activityType == 'introduction'" />
  </div>
</template>

<script>
import MultipleChoice01 from "./MultipleChoice01";
import Introduction01 from "./Introduction01";

export default {
  name: "Activity",
  components: {
    MultipleChoice01,
    Introduction01
  },
  props: {
    activity: Object
  },
  data() {
    return {};
  },
  methods: {}
};
</script>