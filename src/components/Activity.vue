<template>
  <div class="activity">
    <MultipleChoice01 :activity="currentActivity" />
    <!-- <Introduction01 v-else-if="activity.activityType == 'introduction'" /> -->
  </div>
</template>

<script>
import MultipleChoice01 from "./MultipleChoice01";
import Introduction01 from "./Introduction01";
import {mapGetters} from "vuex";

export default {
  name: "Activity",
  components: {
    MultipleChoice01,
    Introduction01
  },
  computed: {
    ...mapGetters([
      'currentActivity'
    ])
  },
  props: {
    activity: Object,
    check: Number
  },
  data() {
    return {};
  },
  methods: {}
};
</script>