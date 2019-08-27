<template>
  <div class="button" @click="changeState()" v-bind:class="{ buttonCurrentState }">{{buttonText}}</div>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: String
  },
  data() {
    return {
      isSelected: false,
      isCorrect: false,
      isDisabled: false,
      buttonCurrentState: null
    };
  },
  methods: {
    changeState() {
      this.buttonCurrentState = "selected";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
div.button.correct {
  background-color: #E8FCF0;
  border-color: #00CC89;
  color: #00CC89;
}
div.button.disabled {
  background-color: #d8d8d8;
  border: none;
}
div.button.selected {
  background-color: #E8F5FC;
  border-color: #008ECC;
  color: #008ECC;
}
div.button:hover {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
}
div.button:active {
  background-color: #E8F5FC;
  box-shadow: none;
}
</style>