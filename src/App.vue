<template>
  <div id="app">
    <Heading/>
    <TextArea/>
    <Translator/>
    <Phases/>
  </div>
</template>

<script>
import TextArea from './components/TextArea.vue'
import Translator from "./components/Translator";
import Heading from "./components/Heading";
import Phases from "./components/Phases";

export default {
  name: 'app',
  components: {
    Phases,
    Heading,
    Translator,
    TextArea
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
