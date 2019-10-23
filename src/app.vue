<template>
  <div>
    <div>hello world</div>
    <input type="text" v-model="msg">
    <p>{{msg}}</p>
  </div>

</template>

<script>
export default {
  data() {
    return {
      msg: '你好'
    }
}
</script>

<style>

</style>