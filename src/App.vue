<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  /* width: 100%; */
  /* height: 100%; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  width: 375px;
}
.image{
  width: 100%;  
}
.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.ellipsis2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
button{
  border: none;
}
a{
  display: inline-block;
  color: #2c3e50;
}
.bdtop{
  border-top: 1px solid #f1f1f1;
}
.bdbottom{
  border-bottom: 1px solid #f1f1f1;
}
.left{
  float: left;
}
.icon-next{
  display: inline-block;
  background-image: url(https://m.owhat.cn/src/images/list_btn_enter@3x.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;
}
.clearfix{
  *zoom:1;
}
.clearfix:after {
  clear: both;
  content: ".";
  display: block;
  font-size: 0;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
address, cite, dfn, em, i, optgroup, var{
  font-style: normal;
}
/* #6699ff :蓝色 */
/* #ccc 灰色 */
/* border: f1f1f1*/
</style>
