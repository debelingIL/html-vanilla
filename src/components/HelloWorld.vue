<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <div class="btn">street</div>
    <div class="btn">bridge</div>
    <div class="btn">farm</div>-->
    <div
      v-for="option in options"
      :key="option.id"
      @click="setActive(option.id)"
      :class="[{'btn-selected': activeOption == option.id}, 'btn']"
    >{{ option.value }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      activeOption: 0,
      options: [
        {
          value: "street",
          id: 1
        },
        {
          value: "bridge",
          id: 2
        },
        {
          value: "farm",
          id: 3
        }
      ]
    };
  },
  methods: {
    setActive(id) {
      this.activeOption = id;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  width: 267px;
  /* height: 40px; */
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
  background-color: #ffffff;
  background-size: cover;
  font-family: Lato;
  font-size: 16px;
  color: #5e5e5e;
  font-weight: 700;
  text-decoration: none solid rgb(94, 94, 94);
  text-align: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  transition: 400ms;
  margin-bottom: 20px;
}

.btn:hover {
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.5);
}

.btn-selected {
  border: 1px solid #008ecc;
  background-color: #d9f0fc;
  color: #008ecc;
  /* text-decoration: none solid rgb(0, 142, 204); */
  box-shadow: 0px 3px 6px rgba(0, 142, 204, 0.2);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
