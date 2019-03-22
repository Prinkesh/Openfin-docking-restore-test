<template>
  <div class="hello">
    {{name}}
  </div>
</template>

<script>
import * as Layouts from "openfin-layouts";

export default {
  created() {
    var finWindow = fin.desktop.Window.getCurrent();
    this.name= finWindow.name
  },
  data() {
    return {

      name : 'Child Window'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
