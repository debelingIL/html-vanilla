<template>
  <div class="button short-text-button" @click="$emit('optionSelected', buttonData.responseId)">
    {{ buttonData.responseText }}
  </div>
</template>

<script>
export default {
  name: "ShortTextButton",
  components: {},
  props: {
    buttonData: Object,
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
div.button {
  background-color: #ffffff;
  border-width: 1px 1px 3px 1px;
  border-style: solid;
  border-color: #d8d8d8;
  color: #333333;
  padding: 9px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border-radius: 8px;
}

div.button.selected {
  background-color: #E8F5FC;
  border-color: #008ECC;
  color: #008ECC;
}
</style>