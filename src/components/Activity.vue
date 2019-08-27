<template>
  <div class="activity">
    <p>{{ activity.activityType }}</p>
  </div>
</template>

<script>
export default {
  name: "Activity",
  components: {},
  props: {
    activity: Object
  },
  data() {
    return {};
  },
  methods: {}
};
</script>